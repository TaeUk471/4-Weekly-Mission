import { Inter } from 'next/font/google';

import SharedPage from './sharedPage';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <SharedPage />
    </>
  );
}
