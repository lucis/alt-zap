/* eslint-disable no-console */
import React from 'react'

import ProductForm from '../tenant/products/ProductForm'
import { TenantProvider } from '../../contexts/TenantContext'

export default {
  title: 'tenant|ProductForm',
  component: ProductForm,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  decorators: [(story: any) => <div className="pa2">{story()}</div>],
}
const exampleCategories = [
  {
    id: '1',
    name: 'Principal',
    slug: 'principal',
    live: true,
  },
  {
    id: '2',
    name: 'Hamburgueres',
    slug: 'hamburgueres',
    live: true,
  },
]

const initialData = {
  name: 'Bia de Calcinha',
  select: '2',
  logoSrc: 'htpss',
  price: 1000,
  assemblyOptions: [
    {
      name: 'Sabor',
      live: true,
      price: 100,
      min: 0,
      max: 20,
      options: [
        {
          first: 'Lucis',
          last: 'Boy',
        },
        {
          first: 'Bia',
          last: 'Cunha',
        },
      ],
      type: 'UNISELECT',
    },
  ],
}

export const classic = () => (
  <TenantProvider
    value={
      {
        categories: exampleCategories,
      } as any
    }
  >
    <ProductForm onValidSubmit={(a) => console.log(a)} />
  </TenantProvider>
)

export const withData = () => (
  <TenantProvider
    value={
      {
        categories: exampleCategories,
      } as any
    }
  >
    <ProductForm
      onValidSubmit={(a) => console.log(a)}
      initialData={initialData}
    />
  </TenantProvider>
)
// export const WithData = () => (
//   <ProductForm
//     initialData={{
//       name: 'Bar do Lucis',
//       slug: 'bardolucis',
//       whatsapp: '+55 (83) 99432-2457',
//       instagram: 'bardolucis',
//       color: '#ff0000',
//     }}
//   />
// )
