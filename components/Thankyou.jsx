import styles from "styles/thankyou.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Thankyou({ rating, controls, variant }) {
	return (
	<motion.div 
		animate={controls} 
		variants={variant}
		className="p-5 md:p-7 h-full w-full flex flex-col items-center flex-wrap font_overpass"
	>
		<div className="block mt-2 md:mt-4 h-24 w-36">
			<Image src="/illustration-thank-you.svg" alt="thankyou img" layout="responsive" width="45px" height="30px" />
		</div>
		<div 
			className={`
				abstract_grey_background mt-5 md:mt-9 px-5 py-1 rounded-2xl text-sm content-center
				${styles.orange_font}
			`}
		>
			You selected {rating} out of 5
		</div>

		<p className="mt-3 md:mt-7 text-white text-xl md:text-2xl font-bold">Thank you!</p>

		<p className={`pt-2 text-center text-xs md:text-sm font-medium md:font-semibold ${styles.light_grey_font}`}>
			We appreciate you taking the time to give a rating. If you ever need more support, don&apos;t hesisate to get in touch!
		</p>

	</motion.div>);
}
