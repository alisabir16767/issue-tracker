import React from 'react'
import Link from 'next/link'
import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
   const links=[
      {label:'Dashboard', href:'/'},
      {label:'Issues', href:'/issues'}
   ]
  return (
    <div>
      <nav className='flex space-x-6 mb-5 px-8 border-b h-14 items-center'>
         <Link href="/"><AiFillBug  /></Link>
         <ul className='flex space-x-6'>
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className='text-zinc-500 hover:text-zinc-900 transition-colors'>
                  {link.label}
                </Link>
              </li>
            ))}
         </ul>
      </nav>
    </div>
  )
}

export default NavBar