export default defineEventHandler(() =>{
    return {
        orders:[
            {
                orderId:'order-001',
                customerName:'Rosa',
                tableNumber:1,
                totalPrice:5.50,
                status:'confirmed',
            },
            {
                orderId:'order-002',
                customerName:'Tom',
                tableNumber:2,
                totalPrice:12.00,
                status: 'confirmed',
            },
        ],
    }
})