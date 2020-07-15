import pipedriveClient from "../../clients/pipedriveClient";
import { createOrder } from "../../clients/blingClient";

import CreateOrderService from "./CreateOrderService";

class IntegrateService {
  async run() {
    let response = [];
    const pipedriveDealsResult = await pipedriveClient.DealsController.getAllDeals(
      {
        filterId: 2,
      }
    );
    const { data: pipedriveDeals } = pipedriveDealsResult;
    await Promise.all(
      pipedriveDeals.map(async (deal) => {
        const dealProductsResult = await pipedriveClient.DealsController.listProductsAttachedToADeal(
          { id: deal.id }
        );
        const { data: dealProducts } = dealProductsResult;

        if (dealProducts) {
          const integrationResponse = await createOrder({
            pedido: [
              {
                data: deal.first_won_time,
              },
              {
                cliente: [
                  {
                    nome: deal.org_id.name,
                  },
                  { tipoPessoa: "J" },
                  { ie: "757253066325" },
                ],
              },
              {
                volumes: [
                  {
                    volume: [
                      {
                        servico: "Transportadora AHQ",
                      },
                    ],
                  },
                ],
              },
              {
                items: dealProducts.map((dealProduct) => {
                  return {
                    item: [
                      {
                        codigo: dealProduct.product_id,
                      },
                      { descricao: dealProduct.name },
                      {
                        qtde: dealProduct.quantity ? dealProduct.quantity : 1,
                      },
                      { vlr_unit: dealProduct.item_price },
                    ],
                  };
                }),
              },
            ],
          });

          if (!integrationResponse.retorno.erros) {
            await CreateOrderService.run(
              deal.org_id.name,
              deal.first_won_time,
              deal.value
            );
            response.push({
              deal: [
                {
                  customer_name: deal.org_id.name,
                  value: deal.value,
                  success: true,
                },
              ],
            });
          } else {
            response.push({
              deal: [
                {
                  customer_name: deal.org_id.name,
                  value: deal.value,
                  error: "Integration error.",
                },
              ],
            });
          }
        } else {
          response.push({
            deal: [
              {
                customer_name: deal.org_id.name,
                value: deal.value,
                error:
                  "There must be at least one product in the Pipedrive's Lead",
              },
            ],
          });
        }
      })
    );

    return response;
  }
}

export default new IntegrateService();
