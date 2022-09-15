import '../styles/globals.css'
import NextNProgress from 'nextjs-progressbar'
function MyApp({ Component, pageProps }) {
  return <>
  <NextNProgress color='#232323' height={2} />
<Component {...pageProps} />
</>
  
}

export default MyApp
