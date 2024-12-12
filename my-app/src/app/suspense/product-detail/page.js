import {Product} from '@/components/Product'
import {Reviews} from '@/components/Reviews'
import React, { Suspense } from 'react'

export default function ProductDetails() {
  return (
    <div>
      <h1>Product Detail Page</h1>
      <Suspense fallback={<p>Loading Product Details.....</p>}>
        <Product/>
      </Suspense>
      <Suspense fallback={<p>Loading Review Details.....</p>}>
        <Reviews/>
      </Suspense>
    </div>
  )
}
