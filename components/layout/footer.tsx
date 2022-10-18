import Link from 'next/link';

const Footer = () => {
	return (
		<footer className="flex flex:col gap:50 py:100 px:5vw bg:#E4E4E4">
			<div className="flex jc:center jc:flex-start@sm">
				<img height={50} src="/logo.png" alt="InsideFPV Logo" />
			</div>

			<div className="grid grid-cols:5@lg">
				<div className="grid-col-span:2 pr:250@lg">
					<div className="flex ai:center gap:25">
						<i className="ri-map-pin-line font:32"></i>
						<p>
							L/7-A, Yogi Complex, Shanti Niketan Society, Adajan,
							Surat, Gujarat
						</p>
					</div>

					<div className="flex ai:center gap:25">
						<i className="ri-mail-line font:32"></i>
						<p>contact@insidefpv.com</p>
					</div>

					<div className="flex ai:center gap:25">
						<i className="ri-phone-line font:32"></i>
						<p>+91 777 900 3767</p>
					</div>

					<div className="flex ai:center gap:25">
						<i className="ri-phone-line font:32"></i>
						<p>+91 991 098 3126</p>
					</div>
				</div>

				<div className="flex flex:col ai:flex-start gap:25">
					<p className="uppercase"> Contact </p>

					<Link href="/">
						<span className="text:none f:#FF0000 cursor:pointer">
							Contact Us
						</span>
					</Link>

					<Link href="/">
						<span className="text:none f:#FF0000 cursor:pointer">
							About Us
						</span>
					</Link>

					<Link href="/">
						<span className="text:none f:#FF0000 cursor:pointer">
							Feedback
						</span>
					</Link>

					<Link href="/">
						<span className="text:none f:#FF0000 cursor:pointer">
							Sell with us
						</span>
					</Link>

					<Link href="/">
						<span className="text:none f:#FF0000 cursor:pointer">
							FAQs
						</span>
					</Link>
				</div>

				<div className="flex flex:col ai:flex-start gap:25">
					<p className="uppercase"> Policies </p>

					<Link href="/">
						<span className="text:none f:#FF0000 cursor:pointer">
							Terms and Conditions
						</span>
					</Link>

					<Link href="/">
						<span className="text:none f:#FF0000 cursor:pointer">
							Shipping and Returns
						</span>
					</Link>

					<Link href="/">
						<span className="text:none f:#FF0000 cursor:pointer">
							Privacy Policy
						</span>
					</Link>

					<Link href="/">
						<span className="text:none f:#FF0000 cursor:pointer">
							Cancellation Policy
						</span>
					</Link>
				</div>

				<div className="flex flex:col ai:flex-start gap:25">
					<p className="uppercase"> Services </p>

					<Link href="/">
						<span className="text:none f:#FF0000 cursor:pointer">
							Blog
						</span>
					</Link>

					<Link href="/">
						<span className="text:none f:#FF0000 cursor:pointer">
							Request Products
						</span>
					</Link>

					<Link href="/">
						<span className="text:none f:#FF0000 cursor:pointer">
							Address
						</span>
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
