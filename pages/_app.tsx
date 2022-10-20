import '../styles/globals.css';
import 'pattern.css/dist/pattern.min.css';
import 'remixicon/fonts/remixicon.css';
import type { AppProps } from 'next/app';
import '@master/css';

const App = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />;
};

export default App;
