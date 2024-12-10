import React from 'react'
import Link from 'next/link'
import Card from '@/components/Cards'

export default function DefaultAcrchiveNotifications() {
  return (
    <Card>
        <div>Archived Notifications</div>
        <Link href="/complex-dashboard" style={{margin: "10px"}}>Default</Link>
    </Card>
  )
}
