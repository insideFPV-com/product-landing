import Link from 'next/link';

const Header = () => {
	return (
		<header className="grid grid-cols:2 py:15 px:5vw bg:#E4E4E4">
			<div className="flex ai:center gap:50">
				<div>
					<img height={50} src="/logo.png" alt="InsideFPV Logo" />
				</div>

				<nav className="flex gap:60">
					<Link href="/">
						<span className="text:none f:#FF0000:hover cursor:pointer">
							All Products
						</span>
					</Link>

					<Link href="/">
						<span className="text:none f:#FF0000:hover cursor:pointer">
							Blog
						</span>
					</Link>

					<Link href="/">
						<span className="text:none f:#FF0000:hover cursor:pointer">
							About
						</span>
					</Link>

					<Link href="/">
						<span className="text:none f:#FF0000:hover cursor:pointer">
							Contact
						</span>
					</Link>
				</nav>
			</div>

			<div className="flex ai:center jc:flex-end gap:25">
				<Link href="/">
					<i className="ri-search-line cursor:pointer font:32"></i>
				</Link>

				<Link href="/">
					<i className="ri-shopping-bag-line cursor:pointer font:32"></i>
				</Link>
			</div>
		</header>
	);
};

export default Header;
