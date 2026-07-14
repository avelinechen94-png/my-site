# Rosa's Café — API Contract

## GET /menu
回傳菜單資料。

Response `200`:
```json
{ "sections": [ { "category": "Coffee", "items": [...] } ] }
```

---

## POST /orders
送出新訂單。

Request:
```json
{
  "customerName": "Rosa",
  "tableNumber": 1,
  "items": [ { "itemId": "flat-white", "size": "Large", "quantity": 1 } ]
}
```

Response `201`:
```json
{ "orderId": "order-001", "totalPrice": 5.50, "status": "confirmed" }
```

Error `400` — 格式錯誤: `{ "error": "Missing tableNumber" }`
Error `409` — 售完: `{ "error": "Item unavailable" }`

---

## GET /orders
回傳所有訂單。

Response `200`:
```json
{ "orders": [ { "orderId": "order-001", "tableNumber": 1, "totalPrice": 5.50 } ] }
```
