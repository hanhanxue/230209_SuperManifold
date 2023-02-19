// pages/_app.js
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'




// import { Inter } from '@next/font/google'
import localFont from '@next/font/local'
const Inter = localFont({
  src: '../public/fonts/Inter-VariableFont_slnt,wght.ttf',
  variable: '--font-inter',
})




export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${Inter.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
