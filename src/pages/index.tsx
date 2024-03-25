import { Inter } from 'next/font/google';

import ApiTest from './ApiTest';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <ApiTest />
    </>
  );
}
