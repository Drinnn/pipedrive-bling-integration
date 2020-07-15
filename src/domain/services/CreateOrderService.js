import OrderRepo from "../repositories/OrderRepo";

class CreateOrderService {
  async run(customerName, date, value) {
    return await OrderRepo.create({ customerName, date, value });
  }
}

export default new CreateOrderService();
