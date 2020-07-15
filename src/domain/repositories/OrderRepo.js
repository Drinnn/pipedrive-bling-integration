import Order from "../entities/Order";

class OrderRepo {
  async create({ ...data }) {
    return await Order.create(data);
  }

  async getAll() {
    return await Order.find({});
  }
}

export default new OrderRepo();
