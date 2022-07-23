import { useState } from "react";
import styles from "../styles/rateus.module.css";
import Image from "next/image";
import cn from "classnames";
import { motion } from "framer-motion";

export default function RateUs({ handleRatingSubmit, variant, controls }) {
	const [selectedRating, setSelectedRating] = useState(false);

	function handleRatingSelection(rating) {
		setSelectedRating(rating);
	}

	return (
		<motion.div 
			animate={controls} 
			variants={variant} 
			className="p-5 md:p-7 h-full w-full flex flex-col flex-wrap font_overpass"
		>
			{/* Star Thing on top left */}
			<div
				className={`h-9 w-9 md:h-11 md:w-11 rounded-full abstract_grey_background flex justify-center items-center`}
			>
				<Image
					src="/icon-star.svg"
					alt="star icon"
					height="15px"
					width="15px"
				/>
			</div>

			<p className={`pt-5 md:pt-8 text-white font-bold text-xl md:text-2xl`}>How did we do?</p>

			<p className="pt-3 text-gray-500 font-semibold text-xs md:text-sm">
				Plese let up know how we did with your support request. All feedback is
				appreciated to help us imporve our offering!
			</p>

			<div className="pt-3 md:pt-5 flex justify-around">
				{[1, 2, 3, 4, 5].map((rating, idx) => {
					return (
						<RatingButton
							key={idx}
							rating={rating}
							handleRatingSelection={handleRatingSelection}
							selectedRating={selectedRating}
						/>
					);
				})}
			</div>

			<motion.div
				onClick={() => {
					handleRatingSubmit(selectedRating);
				}}
				whileTap={{ scale: 0.8 }}
				className={`
					flex justify-center items-center p-2 mt-4 md:mt-10 
					text-white font-semibold md:font-bold text-sm rounded-3xl ${styles.btn_submit} hover:cursor-pointer
				`}
			>
				SUBMIT
			</motion.div>
		</motion.div>
	);
}

function RatingButton({ rating, handleRatingSelection, selectedRating }) {
	return (
		<motion.div
			whileHover={{ scale: 1.2 }}
			whileTap={{ scale: 0.8 }}
			onClick={() => {
				handleRatingSelection(rating);
			}}
			className={
				`
					grid place-items-center h-9 w-9 md:h-11 md:w-11 rounded-full font-semibold md:font-bold text-xs md:text-sm abstract_grey_background
					${styles.btn_rating_count} ${styles.font_light_grey}
				` +
				cn({
					[styles.btn_rating_selected]: rating === selectedRating,
				})
			}
		>
			{rating}
		</motion.div>
	);
}
