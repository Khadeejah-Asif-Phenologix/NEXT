import Link from 'next/link'
import React from 'react'

export default function Blog() {
  return (
    <div>
    <Link  href="/blog/first">Blog 1</Link>
    <Link  href="/blog/second">Blog 2</Link>
    </div>
  )
}
