import { Inter } from 'next/font/google'
import Head from 'next/head'
import { ReactNode } from 'react';

import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });
 
type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Invotastic: Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={`pt-16 mt-4 mx-8 ${inter.className}`}>
        {children}
      </main>
    </>
  )
}
