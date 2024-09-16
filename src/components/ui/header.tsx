import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Sidebar from './sidebar';
import Mobilemenu from './mobilemenu';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <div className='p-4 flex items-center justify-between bg-white'>
      <div className='sm:hidden flex items-center '>
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <Mobilemenu />
          </SheetContent>
        </Sheet>
      </div>
      <div className='ml-6 flex items-center sm:text-4xl font-bold'>
        <h1>Transactions</h1>
      </div>
      <div className='flex items-center gap-4'>
        {/* Search input visible only on large screens */}
        <div className='lg:flex hidden bg-gray-100 border-2 rounded-full items-center'>
          <input
            className='rounded-full h-10 w-[300px] bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50'
            type='text'
            placeholder='Search Here'
          />
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='mr-2'
          >
            <circle
              cx='11'
              cy='11'
              r='8'
            />
            <path d='m21 21-4.3-4.3' />
          </svg>
        </div>

        <div className='flex gap-2 mr-4'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='w-6 h-6'
          >
            <path d='M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z' />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='w-6 h-6'
          >
            <path d='M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9' />
            <path d='M10.3 21a1.94 1.94 0 0 0 3.4 0' />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='w-6 h-6'
          >
            <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
            <circle
              cx='12'
              cy='7'
              r='4'
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
