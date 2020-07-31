import React, { FC, useCallback } from 'react'

import ProductForm from './ProductForm'
import { useTenantConfig } from '../../../contexts/TenantContext'

type Props = { onFinish: () => void }

const AddProduct: FC<Props> = ({ onFinish }) => {
  const { productsLoading } = useTenantConfig()

  const createProduct = useCallback(
    (data: Partial<Product>) => {
      // TODO: Use the Tenant's function
      Promise.resolve(data).then(() => {
        onFinish()
      })
    },
    [onFinish]
  )

  return <ProductForm onValidSubmit={createProduct} loading={productsLoading} />
}

export default AddProduct
