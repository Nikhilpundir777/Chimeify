import Topbar from "@/components/Topbar";
import { useMusicStore } from "@/stores/useMusicStore";
import { useEffect } from "react";
import FeaturedSection from "./components/FeaturedSection";
import { ScrollArea } from "@/components/ui/scroll-area";
import SectionGrid from "./components/SectionGrid";
import { usePlayerStore } from "@/stores/usePlayerStore";
import CuratedPlaylistCard from "./components/CuratedPlaylist";



const HomePage = () => {
  // Mock Data
	// const isLoading = false; // Simulate loading state
	// const madeForYouSongs = [
	// 	{
	// 		_id: "1",
	// 		title: "Someone Like You",
	// 		artist: "Adele",
	// 		imageUrl: "https://via.placeholder.com/150/2ecc71/FFFFFF?text=Someone+Like+You",
	// 	},
	// 	{
	// 		_id: "2",
	// 		title: "Smells Like Teen Spirit",
	// 		artist: "Nirvana",
	// 		imageUrl: "https://via.placeholder.com/150/3498db/FFFFFF?text=Smells+Like+Teen+Spirit",
	// 	},
	// 	{
	// 		_id: "3",
	// 		title: "Uptown Funk",
	// 		artist: "Bruno Mars",
	// 		imageUrl: "https://via.placeholder.com/150/e74c3c/FFFFFF?text=Uptown+Funk",
	// 	},
    // {
	// 		_id: "4",
	// 		title: "Despacito",
	// 		artist: "Luis Fonsi",
	// 		imageUrl: "https://via.placeholder.com/150/9b59b6/FFFFFF?text=Despacito",
	// 	},
	// ];

	// const trendingSongs = [
	// 	{
	// 		_id: "4",
	// 		title: "Despacito",
	// 		artist: "Luis Fonsi",
	// 		imageUrl: "https://via.placeholder.com/150/9b59b6/FFFFFF?text=Despacito",
	// 	},
	// 	{
	// 		_id: "5",
	// 		title: "Hello",
	// 		artist: "Adele",
	// 		imageUrl: "https://via.placeholder.com/150/f1c40f/FFFFFF?text=Hello",
	// 	},
	// 	{
	// 		_id: "6",
	// 		title: "Bad Guy",
	// 		artist: "Billie Eilish",
	// 		imageUrl: "https://via.placeholder.com/150/2ecc71/FFFFFF?text=Bad+Guy",
	// 	},
    // {
	// 		_id: "3",
	// 		title: "Uptown Funk",
	// 		artist: "Bruno Mars",
	// 		imageUrl: "https://via.placeholder.com/150/e74c3c/FFFFFF?text=Uptown+Funk",
	// 	},
	// ];



  const {
		fetchFeaturedSongs,
		fetchMadeForYouSongs,
		fetchTrendingSongs,
		isLoading,
		madeForYouSongs,
		featuredSongs,
		trendingSongs,
	} = useMusicStore();

	const { initializeQueue } = usePlayerStore();

	useEffect(() => {
		fetchFeaturedSongs();
		fetchMadeForYouSongs();
		fetchTrendingSongs();
	}, [fetchFeaturedSongs, fetchMadeForYouSongs, fetchTrendingSongs]);

	useEffect(() => {
		if (madeForYouSongs.length > 0 && featuredSongs.length > 0 && trendingSongs.length > 0) {
			const allSongs = [...featuredSongs, ...madeForYouSongs, ...trendingSongs];
			initializeQueue(allSongs);
		}
	}, [initializeQueue, madeForYouSongs, trendingSongs, featuredSongs]);

  return (
    <main className='rounded-md overflow-hidden h-full bg-gradient-to-b from-zinc-800 to-zinc-900'>
			<Topbar />
      <ScrollArea className='h-[calc(100vh-180px)]'>

      {/* Curated Playlist Card */}
					<div className="space-y-8 p-4 sm:p-6">
							<CuratedPlaylistCard />
					</div>


				<div className='p-4 sm:p-6'>
					<h1 className='text-2xl sm:text-3xl font-bold mb-6'>Good afternoon</h1>
					<FeaturedSection />

					<div className='space-y-8'>
						<SectionGrid title='Made For You' songs={madeForYouSongs} isLoading={isLoading} />
						<SectionGrid title='Trending' songs={trendingSongs} isLoading={isLoading} />
					</div>
				</div>
			</ScrollArea>
    </main>
  )
}

export default HomePage;