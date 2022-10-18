import '../styles/globals.css';
import 'remixicon/fonts/remixicon.css'
import type { AppProps } from 'next/app';
import '@master/css';

const App = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />;
};

export default App;
