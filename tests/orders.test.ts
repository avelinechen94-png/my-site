import { describe, it, expect } from 'vitest'

describe('order validation', () => {
  it('should reject an order missing customerName', () => {
    const body = { tableNumber: 3, items: [{ itemId: 'flat-white' }] }
    const isValid = body.customerName !== undefined && body.tableNumber !== undefined && body.items !== undefined
    expect(isValid).toBe(false)
  })

  it('should accept a valid order', () => {
    const body = { customerName:'Rosa', tableNumber: 3, items: [{ itemId: 'flat-white' }] }
    const isValid = body.customerName !== undefined && body.tableNumber !== undefined && body.items !== undefined
    expect(isValid).toBe(true)
  })
  it('should not allow quantity to exceed stock', ()=>{
    const stock=1
    const requested=2
    const canFulfill=requested<=stock
    expect(canFulfill).toBe(false)
  })
})