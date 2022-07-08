import { Pool } from 'mysql2/promise';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAll = async () => {
    const query = 'SELECT * FROM Trybesmith.Orders;';

    const [allOrders] = await this.connection.execute(query);

    return allOrders;
  };
}