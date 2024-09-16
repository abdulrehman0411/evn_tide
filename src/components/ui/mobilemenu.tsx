'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import EventidelogoBlack from '@/images/EventidelogoBlack.png';
import Link from 'next/link';
const Mobilemenu = () => {
  const [state, setState] = useState('1');
  return (
    <div>
      <div className=''>
        <aside
          className={`float-left relative flex h-screen transition-all duration-300 ease-in-out w-64 flex-col overflow-y-auto bg-white px-5 py-8`}
        >
          {/* Toggle Button */}

          {/* Logo */}
          <div className='flex flex-col items-center justify-center mt-3'>
            <Image
              src={EventidelogoBlack}
              alt='EventidelogoBlack'
            />
            {<h1>ENVTIDE</h1>}
          </div>

          {/* Navigation */}
          <div className='mt-6 flex flex-col justify-between'>
            <nav className='-mx-3 space-y-2'>
              <div
                onClick={() => setState('1')}
                className={`text-slate-400 ${state != '1' ? 'hover:bg-gray-100 hover:text-gray-700' : ''} ${state == '1' ? 'bg-indigo-900 text-white' : ''}`}
              >
                <Link
                  className={`flex items-center rounded-lg px-3 py-2`}
                  href={{
                    pathname: '/dashboard',
                  }}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    className=''
                  >
                    <rect
                      width='7'
                      height='9'
                      x='3'
                      y='3'
                      rx='1'
                    />
                    <rect
                      width='7'
                      height='5'
                      x='14'
                      y='3'
                      rx='1'
                    />
                    <rect
                      width='7'
                      height='9'
                      x='14'
                      y='12'
                      rx='1'
                    />
                    <rect
                      width='7'
                      height='5'
                      x='3'
                      y='16'
                      rx='1'
                    />
                  </svg>
                  {<span className='mx-2 text-md'>Dashboard</span>}
                </Link>
              </div>

              <div
                onClick={() => setState('2')}
                className={`text-slate-400 ${state !== '2' ? 'hover:bg-gray-100 hover:text-gray-700' : ''} ${state == '2' ? 'bg-indigo-900 text-white' : ''}`}
              >
                <Link
                  className={`flex items-center rounded-lg px-3 py-2 `}
                  href='#'
                >
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
                    className='h-6 w-6'
                    aria-hidden='true'
                  >
                    <path d='M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4'></path>
                    <path d='M4 6v12c0 1.1.9 2 2 2h14v-4'></path>
                    <path d='M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z'></path>
                  </svg>
                  {<span className='mx-2 text-md'>E - Wallet</span>}
                </Link>
              </div>
              <div
                onClick={() => setState('3')}
                className={`text-slate-400 ${state !== '3' ? 'hover:bg-gray-100 hover:text-gray-700' : ''} ${state == '3' ? 'bg-indigo-900 text-white' : ''}`}
              >
                <Link
                  className={`flex items-center rounded-lg px-3 py-2 `}
                  href={{
                    pathname: '/transaction',
                  }}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    className='h-6 w-6'
                  >
                    <path d='M8 3 4 7l4 4' />
                    <path d='M4 7h16' />
                    <path d='m16 21 4-4-4-4' />
                    <path d='M20 17H4' />
                  </svg>
                  {<span className='mx-2 text-md'>Transactions</span>}
                </Link>
              </div>
              <div
                onClick={() => setState('4')}
                className={`text-slate-400 ${state !== '4' ? 'hover:bg-gray-100 hover:text-gray-700' : ''} ${state == '4' ? 'bg-indigo-900 text-white' : ''}`}
              >
                <Link
                  className={`flex items-center rounded-lg px-3 py-2 $`}
                  href='#'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    className='h-6 w-6'
                  >
                    <path d='M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z' />
                    <path d='M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8' />
                    <path d='M12 18V6' />
                  </svg>
                  {<span className='mx-2 text-md'>Trading</span>}
                </Link>
              </div>
              <div
                onClick={() => setState('5')}
                className={`text-slate-400 ${state !== '5' ? 'hover:bg-gray-100 hover:text-gray-700' : ''} ${state == '5' ? 'bg-indigo-900 text-white' : ''}`}
              >
                <Link
                  className={`flex items-center rounded-lg px-3 py-2 $`}
                  href='#'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    className='h-6 w-6'
                  >
                    <line
                      x1='3'
                      x2='21'
                      y1='22'
                      y2='22'
                    />
                    <line
                      x1='6'
                      x2='6'
                      y1='18'
                      y2='11'
                    />
                    <line
                      x1='10'
                      x2='10'
                      y1='18'
                      y2='11'
                    />
                    <line
                      x1='14'
                      x2='14'
                      y1='18'
                      y2='11'
                    />
                    <line
                      x1='18'
                      x2='18'
                      y1='18'
                      y2='11'
                    />
                    <polygon points='12 2 20 7 4 7' />
                  </svg>
                  {<span className='mx-2 text-md'>Tidal Pools</span>}
                </Link>
              </div>
              <div
                onClick={() => setState('6')}
                className={`text-slate-400 ${state !== '6' ? 'hover:bg-gray-100 hover:text-gray-700' : ''} ${state == '6' ? 'bg-indigo-900 text-white' : ''}`}
              >
                <Link
                  className={`flex items-center rounded-lg px-3 py-2 $`}
                  href='#'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    className='lucide lucide-chart-column'
                  >
                    <path d='M3 3v16a2 2 0 0 0 2 2h16' />
                    <path d='M18 17V9' />
                    <path d='M13 17V5' />
                    <path d='M8 17v-3' />
                  </svg>
                  {<span className='mx-2 text-md'>Market Performance</span>}
                </Link>
              </div>
              <div
                onClick={() => setState('7')}
                className={`text-slate-400 ${state !== '7' ? 'hover:bg-gray-100 hover:text-gray-700' : ''} ${state == '7' ? 'bg-indigo-900 text-white' : ''}`}
              >
                <Link
                  className={`flex items-center rounded-lg px-3 py-2 $`}
                  href='#'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    className='h-6 w-6'
                  >
                    <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
                    <circle
                      cx='9'
                      cy='7'
                      r='4'
                    />
                    <path d='M22 21v-2a4 4 0 0 0-3-3.87' />
                    <path d='M16 3.13a4 4 0 0 1 0 7.75' />
                  </svg>
                  {<span className='mx-2 text-md'>Contacts</span>}
                </Link>
              </div>
              <div
                onClick={() => setState('8')}
                className={`text-slate-400 ${state !== '8' ? 'hover:bg-gray-100 hover:text-gray-700' : ''} ${state == '8' ? 'bg-indigo-900 text-white' : ''}`}
              >
                <Link
                  className={`flex items-center rounded-lg px-3 py-2 $`}
                  href='#'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    className='h-6 w-6'
                  >
                    <path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' />
                    <path d='M8 10h.01' />
                    <path d='M12 10h.01' />
                    <path d='M16 10h.01' />
                  </svg>
                  {<span className='mx-2 text-md'>Messages</span>}
                </Link>
              </div>
              <div
                onClick={() => setState('9')}
                className={`text-slate-400  ${state !== '9' ? 'hover:bg-gray-100 hover:text-gray-700' : ''} ${state == '9' ? 'bg-indigo-900 text-white' : ''}`}
              >
                <Link
                  className={`flex items-center rounded-lg px-3 py-2 $`}
                  href='/support'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    className='h-6 w-6'
                  >
                    <path d='M7.9 20A9 9 0 1 0 4 16.1L2 22Z' />
                    <path d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3' />
                    <path d='M12 17h.01' />
                  </svg>
                  {<span className='mx-2 text-md'>Support</span>}
                </Link>
              </div>
              <div className='text-slate-400 hover:bg-gray-100 hover:text-gray-700'>
                <a
                  className={`flex mt-16 items-center rounded-lg px-3 py-2 $`}
                  href='#'
                >
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
                    className='h-6 w-6'
                    aria-hidden='true'
                  >
                    <path d='M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z'></path>
                  </svg>
                  {<span className='mx-2 text-md'>Logout</span>}
                </a>
              </div>
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Mobilemenu;
