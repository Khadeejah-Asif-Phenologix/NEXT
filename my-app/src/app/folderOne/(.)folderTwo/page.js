import Link from 'next/link'
import React from 'react'

export default function InterceptedFolderTwo() {
  return (
    <div>
      <br/>
      <Link href='/folderOne'>(.) Intercepted Folder Two</Link>
    </div>
  )
}
