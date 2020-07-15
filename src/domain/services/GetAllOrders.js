import OrderRepo from "../repositories/OrderRepo";

class GetAllOrders {
  async run() {
    return await OrderRepo.getAll();
  }
}

export default new GetAllOrders();
