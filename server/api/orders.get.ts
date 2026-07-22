import { db } from '../db'
import { orders } from '../schema'

export default defineEventHandler(async () => {
  const allOrders = await db.select().from(orders)
  return { orders: allOrders }
})