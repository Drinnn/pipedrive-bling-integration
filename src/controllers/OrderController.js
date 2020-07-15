import getAllOrders from "../domain/services/GetAllOrders";

export class DealController {
  async getAll({ req, res }) {
    const serviceResponse = await getAllOrders.run();

    return res.status(200).json(serviceResponse);
  }
}

export default new DealController();
