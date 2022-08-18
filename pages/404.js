
import Link from 'next/link'
import React from 'react'

function Error() {
  return (
    <div className='m-[5%] text-[20px]'>
      <p>Error, Somthing happend !</p>
      <Link href="/"><p>Go home Page</p></Link>
    </div>
  )
}

export default Error
