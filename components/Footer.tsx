import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer
    className=' bg-light-gray flexCenter mb-24'
    >
<div
className='padding-container max-container flex w-full flex-col gap-14'
>
<div
className='flex flex-col items-center justify-center gap-[18%] md:flex-row '
>
<Link
href='/' className='mb-10 '
>
<Image
src='/pngegg.png'
alt='logo'
width={174}
height={89}
/>
</Link>
<div
className='flex flex-wrap gap-10 sm:justify-between md:flex-1'
>
{FOOTER_LINKS.map((colums)=>(
<ul
className='regular-14 flex flex-col gap-4 text-gray-30'
>
{colums.links.map((link)=>(
<Link
href='/'
key={link}
>
{link}
</Link>
))}
</ul>
))}
<div
className='flex flex-col gap-5'
>
<FooterColumn
title={FOOTER_CONTACT_INFO.title}
>
{FOOTER_CONTACT_INFO.links.map((link)=>(
  <Link
  href='/'
  key={link.label}
className='flex gap-4 md:flex-col lg:flex-row'
  >
  <p
  className='whitespace-nowrap'
  >
{link.label}:
  </p>
  <p
  className='medium-14 whitespace-nowrap text-blue-70'
  >
    {link.value}
  </p>
  </Link>
))}
</FooterColumn>
</div>
<div
className='flex flex-col gap-5'
>
<FooterColumn
title={SOCIALS.title}
>
<ul
className='regular-14 flex gap-4 text-gray-30 '
>
{SOCIALS.links.map((link)=>(
  <Link
  href='/'
  key={link}
  >
  <Image
  src={link}
  alt='logo'
  width={24}
  height={24}
  />
  </Link>
))}
</ul>
</FooterColumn>
</div>
</div>
</div>
<div
className='border bg-gray-20'
/>
<p
className='regular-14 w-full text-center bg-light-gray text-gray-30 '
>2023 HiLink | All Rights Reserved</p>
</div>
    </footer>
  )
}

interface FooterColumn {
  title:string
  children:React.ReactNode
}

const FooterColumn =({title,children}:FooterColumn)=>{
return (
  <div
  className='flex flex-col gap-5 bg-light-gray '
  >
    <h4 className='bold-18 whitespace-nowrap'>{title}</h4>
    {children}
  </div>
)
}

export default Footer
