"use client"

import React from 'react'
import { useEffect, useState } from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Image from 'next/image'
import nft1 from '../../public/assets/nft.webp'
import Link from 'next/link'
// import banner from 'https://ipfs.io/ipfs/QmYDYUEyCUZ17jsSzPxE6Ui1RP68STDrbdQrctFdtbArtH/nft.jpg';


const Home = () => {

  // connectToDB();
  return (
    <div className='w-full h-fit bg-black flex flex-col '>
      <div className='flex justify-start items-center gap-6 ml-24 pt-6 text-white'>
        <div className='w-fit hover:bg-slate-800 rounded-lg px-4 py-2'><p className='logo_text'>All</p></div>
        <div className='w-fit hover:bg-slate-800 rounded-lg px-4 py-2'><p className='logo_text'>Art</p></div>
        <div className='w-fit hover:bg-slate-800 rounded-lg px-4 py-2'><p className='logo_text'>Gaming</p></div>
        <div className='w-fit hover:bg-slate-800 rounded-lg px-4 py-2'><p className='logo_text'>Membership</p></div>
        <div className='w-fit hover:bg-slate-800 rounded-lg px-4 py-2'><p className='logo_text'>PFPs</p></div>
        <div className='w-fit hover:bg-slate-800 rounded-lg px-4 py-2'><p className='logo_text'>Photography</p></div>
        <div className='w-fit hover:bg-slate-800 rounded-lg px-4 py-2'><p className='logo_text'>Music</p></div>
      </div>
      <div className='h-[30rem] rounded-2xl mx-12 my-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
      </div>

      <div className='flex justify-between items-center mx-24 my-4'>
        <div className='flex gap-4'>
        <div className='px-4 py-2 w-fit border-[2px] border-zinc-700 hover:border-zinc-500 text-white rounded-xl flex items-center gap-2 text-lg'>Trending</div>
        <div className='px-4 py-2 w-fit border-[2px] border-zinc-700 hover:border-zinc-500 text-white rounded-xl flex items-center gap-2 text-lg'>Top</div>
        </div>
        <div className='flex gap-4'>
        <div className='px-4 py-2 w-fit border-[2px] border-zinc-700 hover:border-zinc-500 text-white rounded-xl flex items-center gap-2 text-lg'>Trending</div>
        <div className='px-4 py-2 w-fit border-[2px] border-zinc-700 hover:border-zinc-500 text-white rounded-xl flex items-center gap-2 text-lg'>Trending</div>
        </div>
      </div>
      <div className='text-white my-6 mx-24 text-3xl font-medium'>Trending NFT's</div>
      <div className='flex justify-start items-center mx-24 my-4 gap-12'>
        <div className='w-60 h-60 bg-white rounded-lg'>
          <Image src="https://ipfs.io/ipfs/QmV9waZphaSP15DnMVUsUCiyzMw16FpVHhTZX1sD8eNU6B/nft.png" width={240} height={240} />
          <div className='h-6 bg-zinc-800 rounded-b-lg'></div>
        </div>
        <div className='w-60 h-60 bg-white rounded-lg'>
        <Image src="https://ipfs.io/ipfs/QmXq6S3UgHuyWA26LYc2jr5JYLPKRvHB94e3ugw9AqZuQs/nft.jpg" width={240} height={240} className='rounded-t-lg' />
          <div className='h-6 bg-zinc-800 rounded-b-lg'></div>
        </div>
        <div className='w-60 h-60 bg-white rounded-lg'>
        <Link href='/nft/1'><Image src={nft1} width={240} height={240} className='rounded-t-lg' /></Link>
          <div className='h-6 bg-zinc-800 rounded-b-lg'></div>
        </div>
        <div className='w-60 h-60 bg-white rounded-lg'>
        <Image src="https://ipfs.io/ipfs/QmPsgF6q5nPzgUbyqyViJL62ytbv5CErBwNAqDTmrfcodC/nft.jpg" width={240} height={240} className='rounded-t-lg' />
          <div className='h-6 bg-zinc-800 rounded-b-lg'></div>
        </div>
        <div className='w-60 h-60 bg-white rounded-lg'>
        <Image src="https://ipfs.io/ipfs/QmTcDBA3mKDLbQ2vsFmUJNhT3hH7vkLdNCV9tqAzs2uH6s/nft.png" width={240} height={240} className='rounded-t-lg' />
          <div className='h-6 bg-zinc-800 rounded-b-lg'></div>
        </div>
        <div className='w-60 h-60 bg-white rounded-lg'>
        <Image src="https://ipfs.io/ipfs/QmdsCy2kxGTmQ891vZXcBWRphRTYmafNzwshkpyJRw4djc/nft.png" width={240} height={240} className='rounded-t-lg' />
          <div className='h-6 bg-zinc-800 rounded-b-lg'></div>
        </div>

      </div>
      <div className='text-white my-6 mx-24 text-3xl font-medium'>New Arrivals</div>
      <div className='flex justify-start items-center mx-24 my-4 gap-12'>
        <div className='w-60 h-60 bg-white rounded-lg'>
          <Image src="https://ipfs.io/ipfs/QmUtkt1kXmJtZJRtCw72mxjZh5hSFc8TSwygNwLnyR28eF/nft.png" width={240} height={240} />
          <div className='h-6 bg-zinc-800 rounded-b-lg'></div>
        </div>
        <div className='w-60 h-60 bg-white rounded-lg'>
        <Image src="https://ipfs.io/ipfs/QmSTetdiBvxFV9TCog2gxcAVvbk3BGdwSNPfh1me4HM5w9/nft.png" width={240} height={240} className='rounded-t-lg' />
          <div className='h-6 bg-zinc-800 rounded-b-lg'></div>
        </div>
        <div className='w-60 h-60 bg-white rounded-lg'>
        <Image src="https://ipfs.io/ipfs/QmNeNRuAbftdNbdr9vNQe4VL5QsUkWmrGhG9triXikFSRV/nft.png" width={240} height={240} className='rounded-t-lg' />
          <div className='h-6 bg-zinc-800 rounded-b-lg'></div>
        </div>
        <div className='w-60 h-60 bg-white rounded-lg'>        
        <Image src="https://ipfs.io/ipfs/QmTBxrj6G5gVD7m9SgGaH1vDMUjFZPru2QYKDMf2fQ7jjH/nft.jpg" width={240} height={240} className='rounded-t-lg' />
          <div className='h-6 bg-zinc-800 rounded-b-lg'></div></div>
        <div className='w-60 h-60 bg-white rounded-lg'>
        <Image src="https://ipfs.io/ipfs/QmUtkt1kXmJtZJRtCw72mxjZh5hSFc8TSwygNwLnyR28eF/nft.png" width={240} height={240} className='rounded-t-lg' />
          <div className='h-6 bg-zinc-800 rounded-b-lg'></div>
        </div>
        <div className='w-60 h-60 bg-black rounded-lg'>
        <Image src="https://ipfs.io/ipfs/Qmc68MaqRxCr3CisiL6cj3g8Jin5cnSzVjt5pRbXj1fXFw/nft.jpg" width={240} height={240} className='rounded-t-lg' />
          <div className='h-6 bg-zinc-800 rounded-b-lg'></div>
        </div>
      </div>
    </div>
  )
}

export default Home