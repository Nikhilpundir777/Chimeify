import { useState, useEffect } from 'react';

const CuratedPlaylist = () => {
	const [isMobile, setIsMobile] = useState(false);

	// Check if the screen is mobile
	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768); // Define mobile breakpoint
		};

		checkMobile(); // Initial check
		window.addEventListener("resize", checkMobile); // Add event listener for resizing
		return () => window.removeEventListener("resize", checkMobile); // Clean up on unmount
	}, []);

	const playlist = {
		title: "R&B Hits",
		description: "Hot Shot, Confessions, Beyoncé, Usher, The-Dream, Mario, Akif, Princeton Michael...",
		likes: "50,056 Likes",
		totalSongs: "213 Songs",
		duration: "13 hr 7 min",
		imageUrl: "/curated.png", 
	};

	return (
		<div
			className="relative bg-[#e76239] rounded-2xl overflow-hidden flex items-center transition-all hover:bg-[#d73e1f] h-[20.3125rem]"
		>
			{/* Left Text Section */}
			<div className="flex-1 p-6 sm:p-8 lg:p-10">
				<p className="text-sm uppercase text-white tracking-wider">Curated Playlist</p>
				<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{playlist.title}</h2>
				<p className="text-sm sm:text-base text-zinc-300 line-clamp-2">{playlist.description}</p>
				<p className="text-sm sm:text-base text-white">
					<span className="font-semibold">{playlist.likes}</span> &bull; {playlist.totalSongs}, {playlist.duration}
				</p>
			</div>

			{/* Right Image Section (only visible on desktop, hidden on mobile) */}
			{!isMobile && (
				<div className="relative flex-shrink-0 h-full w-[40%]">
					<img
						src={playlist.imageUrl}
						alt={playlist.title}
						className="absolute inset-0 w-full h-full object-cover"
					/>
				</div>
			)}
		</div>
	);
};

export default CuratedPlaylist;
