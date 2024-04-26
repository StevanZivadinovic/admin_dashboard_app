"use client"
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React from 'react'
import { MdSearch } from 'react-icons/md'

const SearchBar: React.FC = () => {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();
    const searchHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const params=new URLSearchParams(searchParams)
        if (e.target.value && e.target.value.length>2) {
            params.set("q", e.target.value);
          } else {
            params.delete("q");
          }
          replace(`${pathname}?${params}`);
    }
  return (
    <div className='flex justify-between'>
    <div className='relative mr-4'>
    <MdSearch className="absolute top-2 left-2"/>
    <input onChange={(e)=>{searchHandler(e)}} type="text" placeholder={`Search for user...`} className='p-1 pl-8 bg-bgMoreSoft rounded-md' />
  </div>
  
</div>
  )
}

export default SearchBar