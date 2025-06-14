import '@/styles/global.css'; // ✅ Make sure path is correct
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }