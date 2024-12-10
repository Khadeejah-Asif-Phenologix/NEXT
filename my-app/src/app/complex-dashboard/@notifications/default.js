import Card from '@/components/Cards'
import React from 'react'
import Link from 'next/link'

export default function DefaultNotifications() {
  return (
    <Card>
      <div>Notifications</div>
      <Link href="/complex-dashboard/archived" style={{margin: "10px"}}>Archive</Link>
    </Card>
  )
}
