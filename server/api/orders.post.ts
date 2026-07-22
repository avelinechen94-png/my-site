import{db} from '../db'
import{orders} from '../schema'
export default defineEventHandler(async(event)=>{
    const body=await readBody(event)
    if (!body.customerName||!body.tableNumber||!body.items){
        throw createError({statusCode:400,message:'missing required fields'})
    } 
    const orderId=`order-${Date.now()}`
    await db.insert (orders).values({
         id: orderId,
    customerName: body.customerName,
    tableNumber: body.tableNumber,
    totalPrice: 5.50,
    status: 'confirmed',
    })
    return {
    orderId,
    status: 'confirmed',
    totalPrice: 5.50,
   }
})
