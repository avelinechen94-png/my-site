import{sqliteTable,text,real, integer} from 'drizzle-orm/sqlite-core'
export const orders=sqliteTable('orders',{
    id:text('id').primaryKey(),
    customerName:text('customer_name').notNull(),
    tableNumber:integer('table_number').notNull(),
    totalPrice:real('total_price').notNull(),
    status:text('status').notNull().default('confirmed'),
})