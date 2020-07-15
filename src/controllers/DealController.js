import integrateService from "../domain/services/IntegrateService";

export class DealController {
  async integrate({ req, res }) {
    const serviceResponse = await integrateService.run();

    return res.status(200).json(serviceResponse);
  }
}

export default new DealController();
