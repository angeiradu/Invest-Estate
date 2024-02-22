import React from 'react';
import { MdRealEstateAgent } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

export default function home() {
  return (
    <div>
        <div className='bg-[#0b0f1f] text-white flex justify-between px-12 py-5'>
            <div className='flex gap-4'><MdRealEstateAgent className='mt-1 text-green-500' />Invest Estate</div>
            <div className='flex gap-4'>
                <div>Buy</div>
                <div>Rent</div>
                <div>Sell</div>
                <div>Rent Out</div>
            </div>
            <div className='flex'>
                <div className='bg-[#1e243a] py-1 pl-2 pt-2'><IoIosSearch /></div>
                <input  className='bg-[#1e243a] py-1 px-2' type="text" name="" id="" placeholder='Search' /></div>
            <div className='flex gap-4'>
                <div>Login</div>
                <div className='flex gap-3'>En <IoIosArrowDown  className='mt-1'/></div>
            </div>
        </div>
    </div>
  )
}
