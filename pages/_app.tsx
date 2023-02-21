import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Open_Sans } from "@next/font/google";


const open_sans = Open_Sans({ subsets: ['latin'], weight: ['400', '600', '700'] })


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={open_sans.className}>
      <Component {...pageProps} />
    </div>
  );
}
