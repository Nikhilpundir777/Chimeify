// import { useMusicStore } from "@/stores/useMusicStore";
import FeaturedGridSkeleton from "@/components/skeletons/FeaturedGridSkeleton";
import PlayButton from "./PlayButton";
import { Song } from "@/types";
// import { usePlayerStore } from "@/stores/usePlayerStore";


const FeaturedSection = () => {
	// Simulate loading and error state for now
	const error = null;
	const isLoading = false;

	// Sample song data (same as provided, with imageUrl and additional fields)
	const featuredSongs = [
		{
			_id: "1",
			title: "Shape of You",
			artist: "Ed Sheeran",
			imageUrl: "https://via.placeholder.com/100/3498db/FFFFFF?text=Shape+of+You",
			audioUrl: "/songs/11.mp3", 
		},
		{
			_id: "2",
			title: "Blinding Lights",
			artist: "The Weeknd",
			imageUrl: "https://via.placeholder.com/100/2ecc71/FFFFFF?text=Blinding+Lights",
			audioUrl: "/songs/2.mp3", 
		},
		{
			_id: "3",
			title: "Rolling in the Deep",
			artist: "Adele",
			imageUrl: "https://via.placeholder.com/100/e74c3c/FFFFFF?text=Rolling+in+the+Deep",
			audioUrl: "/songs/7.mp3", 
		},
		{
			_id: "4",
			title: "Bohemian Rhapsody",
			artist: "Queen",
			imageUrl: "https://via.placeholder.com/100/9b59b6/FFFFFF?text=Bohemian+Rhapsody",
			audioUrl: "/songs/6.mp3", 
		},
		{
			_id: "5",
			title: "Stay",
			artist: "Justin Bieber",
			imageUrl: "https://via.placeholder.com/100/f1c40f/FFFFFF?text=Stay",
			audioUrl: "/songs/5.mp3", 
		},
	];

	// Handle loading state
	if (isLoading) return <FeaturedGridSkeleton />;

	// Handle error state
	if (error) return <p className="text-red-500 mb-4 text-lg">{error}</p>;

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
			{featuredSongs.map((song) => (
				<div
					key={song._id}
					className="flex items-center bg-zinc-800/50 rounded-md overflow-hidden hover:bg-zinc-700/50 transition-colors group cursor-pointer relative"
				>
					<img
						src={song.imageUrl}
						alt={song.title}
						className="w-16 sm:w-20 h-16 sm:h-20 object-cover flex-shrink-0"
					/>
					<div className="flex-1 p-4">
						<p className="font-medium truncate">{song.title}</p>
						<p className="text-sm text-zinc-400 truncate">{song.artist}</p>
					</div>
					{/* Pass song with audioUrl to the PlayButton */}
					
					<PlayButton song={song as Song} />
				</div>
			))}
		</div>
	);
};

export default FeaturedSection;
