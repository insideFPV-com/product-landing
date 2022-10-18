import { FC, ReactNode } from 'react';
import Footer from './footer';
import Header from './header';

interface IProps {
	children?: ReactNode
}

const Layout: FC<IProps> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
