import Link from 'next/link';

export const Navbar = () => {
	return (
		<header className="grid grid-cols:2 py:5 px:5vw bg:rgba(25,25,25,0.9) top:0 sticky z:100">
			<p className="f:white">Krishi</p>

			<nav className="flex jc:flex-end ai:center gap:60">
				<Link href="/">
					<span className="text:none f:white f:#E4E4E4:hover cursor:pointer">
						Specs
					</span>
				</Link>

				<Link href="/">
					<span className="text:none f:white f:#E4E4E4:hover cursor:pointer">
						Video
					</span>
				</Link>

				<Link href="/">
					<span className="text:none f:white f:#E4E4E4:hover cursor:pointer">
						FAQ
					</span>
				</Link>

				<Link href="/">
					<button className="text:none px:25 py:15 bg:red f:white b:0 r:5">
						Buy Now
					</button>
				</Link>
			</nav>
		</header>
	);
};

export default Navbar;
