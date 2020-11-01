import { useMemo } from 'react'

import { calculateItemPrice } from '../functions/calculateItemPrice'
import { OrderItemInput } from '../typings'

export const useItemPrice = (item?: OrderItemInput): number => {
  const totalPrice = useMemo(() => (item ? calculateItemPrice(item) : 0), [
    item,
  ])

  return totalPrice
}