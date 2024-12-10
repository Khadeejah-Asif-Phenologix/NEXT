import Link from 'next/link'
import React from 'react'

export default function FolderOne() {
  return (
    <div>
      FolderOne
      <br/>
      <Link href="/folderOne/folderTwo">Folder 2</Link>
    </div>
  )
}
