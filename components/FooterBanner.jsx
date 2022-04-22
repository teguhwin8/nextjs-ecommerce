import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/clients";

const FooterBanner = ({
	footerBanner: {
		discount,
		largeText1,
		largeText2,
		saleTime,
		smallText,
		midText,
		product,
		buttonText,
		image,
		desc,
	},
}) => {
	return (
		<div className='footer-banner-container'>
			<div className='banner-desc'>
				<div className='left'>
					<p>{discount}</p>
					<h3>{largeText1}</h3>
					<h3>{largeText2}</h3>
					<p>{saleTime}</p>
				</div>
				<div className='right'>
					<p className="small-text">{smallText}</p>
					<h3 className="mid-text">{midText}</h3>
					<p>{desc}</p>
					<Link href={`/product/${product}`}>
						<button type='button'>{buttonText}</button>
					</Link>
					<img src={urlFor(image)} className='footer-banner-image' />
				</div>
			</div>
		</div>
	);
};

export default FooterBanner;
