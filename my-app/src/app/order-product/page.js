"use client"
import React from 'react'
import { useRouter } from 'next/navigation';

export default function OrderProduct() {
    const router = useRouter();
    const handleClick=()=>{
        console.log('Placing your Order.');
        router.push('/');
        // router.replace('/');
        // router.back();
    }
  return (
    <div>
      <h1>Order The Products</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}
