import { useState, useEffect } from "react";
import Head from "next/head";
import style from "styles/home.module.css";
import RateUs from "../components/RateUs.jsx";
import Thankyou from "../components/Thankyou.jsx";
import { useAnimation } from "framer-motion";

export default function Home() {
	const [rating, setRating] = useState(false);
	const controls = useAnimation();
	const variant = {
		vibrate: {
			x: [20, -20, 20, -20, 20, -20, 20, -20, 0],
			transition: {
				duration: 0.3,
			},
		},
		transition: {
			y: "-100%",
			transition: { duration: 0.5 },
		},
	};

	function handleRatingSubmit(choosenRating) {
		if (!choosenRating) {
			controls.start("vibrate");
		} else {
			setRating(choosenRating);
			controls.start("transition");
		}
	}

	return (
		<div className="relative">
			<Head>
				<title>WASSSUP</title>
				<meta charSet="UTF-8" />
				<meta
					name="keywords"
					content="nextj, frontend mentor, react, tailwind"
				/>
				<meta name="author" content="Uttkarsh Patel" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="description" content="Challenge by FrontEnd Mentor" />
				<meta name="language" content="english" />
				<link rel="icon" href="/favicon.png" />
			</Head>

			<main
				className={`${style.main_background} h-screen w-screen grid place-items-center`}
			>
				<div
					className={`
						h-72 w-72 rounded-3xl ${style.card_background} overflow-hidden
						md:h-96 md:w-96
					`}
				>
					<RateUs
						handleRatingSubmit={handleRatingSubmit}
						controls={controls}
						variant={variant}
					/>
					<Thankyou rating={rating} controls={controls} variant={variant} />
				</div>
			</main>

			<footer className="absolute">

			</footer>
		</div>
	);
}
