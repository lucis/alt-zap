import { OrderItemInput } from '../typings'

export const calculateItemPrice = (item: OrderItemInput): number => {
  const productPrices = item.product.price

  const itemsPrice = item.selectedItems.reduce((acc, cur) => {
    const assembly = item.product.assemblyOptions?.find(
      (_assembly) => _assembly.name === cur.name
    )

    if (!assembly) {
      console.error(`Couldn't find an Assembly ${cur.name}`)
    }

    const optionsPriceMap =
      assembly?.options?.reduce((_acc, _cur) => {
        return Object.assign(_acc, {
          [_cur.name]: _cur.price ?? 0,
        })
      }, {} as Record<string, number>) ?? {}

    const assemblyPrice = assembly?.price ?? 0

    const subItemsPrice = cur.options.reduce((__acc, __cur) => {
      const itemPrice = optionsPriceMap[__cur.name] ?? 0

      return itemPrice * __cur.quantity + __acc
    }, 0)

    return assemblyPrice + subItemsPrice + acc
  }, 0)

  return (productPrices + itemsPrice) * item.quantity
}