import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import PlaylistSkeleton from "@/components/skeletons/PlaylistSkeleton";
import { HomeIcon, Library, MessageCircle } from "lucide-react";
import { useMusicStore } from "@/stores/useMusicStore";
import { SignedIn } from "@clerk/clerk-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect } from "react";
import { Link } from "react-router-dom";


const LeftSidebar = () => {

  // const isLoading=false;

  // const albums = [
  //   {
  //     _id: "1",
  //     title: "Chill Vibes",
  //     artist: "Various Artists",
  //     imageUrl: "https://via.placeholder.com/150/8e44ad/FFFFFF?text=Chill+Vibes",
  //   },
  //   {
  //     _id: "2",
  //     title: "Rock Classics",
  //     artist: "Rock Legends",
  //     imageUrl: "https://via.placeholder.com/150/2980b9/FFFFFF?text=Rock+Classics",
  //   },
  //   {
  //     _id: "3",
  //     title: "Top Hits 2023",
  //     artist: "Various Artists",
  //     imageUrl: "https://via.placeholder.com/150/e67e22/FFFFFF?text=Top+Hits+2023",
  //   },
  //   {
  //     _id: "4",
  //     title: "Lo-Fi Beats",
  //     artist: "Chillhop",
  //     imageUrl: "https://via.placeholder.com/150/2ecc71/FFFFFF?text=Lo-Fi+Beats",
  //   },
  //   {
  //     _id: "5",
  //     title: "Classical Essentials",
  //     artist: "Great Composers",
  //     imageUrl: "https://via.placeholder.com/150/c0392b/FFFFFF?text=Classical",
  //   },
  // ];


  const { albums, fetchAlbums, isLoading } = useMusicStore();
	useEffect(() => {
		fetchAlbums();
	}, [fetchAlbums]);

	console.log({ albums });


  return (
    <div className='h-full flex flex-col gap-2'>
    {/* Navigation menu */}

    <div className='rounded-lg bg-zinc-900 p-4'>
      <div className='space-y-2'>
        <Link
          to={"/"}
          className={cn(
            buttonVariants({
              variant: "ghost",
              className: "w-full justify-start text-white hover:bg-zinc-800",
            })
          )}
        >
          <HomeIcon className='mr-2 size-5' />
          <span className='hidden md:inline'>Home</span>
        </Link>

        <SignedIn>
          <Link
            to={"/chat"}
            className={cn(
              buttonVariants({
                variant: "ghost",
                className: "w-full justify-start text-white hover:bg-zinc-800",
              })
            )}
          >
            <MessageCircle className='mr-2 size-5' />
            <span className='hidden md:inline'>Messages</span>
          </Link>
        </SignedIn>
      </div>
    </div>

            {/* Library section */}
			<div className='flex-1 rounded-lg bg-zinc-900 p-4'>
				<div className='flex items-center justify-between mb-4'>
					<div className='flex items-center text-white px-2'>
						<Library className='size-5 mr-2' />
						<span className='hidden md:inline'>Playlists</span>
					</div>
				</div>

				<ScrollArea className='h-[calc(100vh-300px)]'>
					<div className='space-y-2'>
						{isLoading ? (
							<PlaylistSkeleton />
						) : (
							albums.map((album) => (
								<Link
									to={`/albums/${album._id}`}
									key={album._id}
									className='p-2 hover:bg-zinc-800 rounded-md flex items-center gap-3 group cursor-pointer'
								>
									<img
										src={album.imageUrl}
										alt='Playlist img'
										className='size-12 rounded-md flex-shrink-0 object-cover'
									/>

									<div className='flex-1 min-w-0 hidden md:block'>
										<p className='font-medium truncate'>{album.title}</p>
										<p className='text-sm text-zinc-400 truncate'>Album • {album.artist}</p>
									</div>
								</Link>
							))
						)}
					</div>
				</ScrollArea>
			</div>


    </div>
  )
}

export default LeftSidebar