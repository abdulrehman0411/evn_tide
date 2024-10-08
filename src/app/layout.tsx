'use client';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/providers';
import Sidebar from '@/components/ui/sidebar';
import Header from '@/components/ui/header';
import { usePathname } from 'next/navigation';
const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let pathName = usePathname();
  pathName = pathName.slice(1, pathName.length);
  return (
    <html lang='en'>
      <body className={`bg-slate-200`}>
        <div className='flex h-screen'>
          <Sidebar />
          <div className='flex-1 flex flex-col'>
            <Header pathName={pathName} />
            <main className='flex-1 overflow-y-auto'>
              <Providers>{children}</Providers>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
