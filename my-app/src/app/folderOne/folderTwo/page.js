import Link from 'next/link'
import React from 'react'

export default function FolderTwo() {
  return (
    <div>
      Folder Two
      <br/>
      <Link href='/folderOne'>Folder One</Link>
    </div>
  )
}
