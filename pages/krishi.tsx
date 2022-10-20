import { NextPage } from 'next';
import Layout from '../components/layout';
import { Navbar, Hero } from '../components/krishi';

const Home: NextPage = () => {
	return (
		<>
			<Layout>
				<Navbar />
				<Hero />
			</Layout>
		</>
	);
};

export default Home;
