import { SignedOut, UserButton } from "@clerk/clerk-react";
import { LayoutDashboardIcon } from "lucide-react";
import { Link } from "react-router-dom";
import SignInOAuthButtons from "./SignInOAuthButtons";
import { useAuthStore } from "@/stores/useAuthStore";



const Topbar = () => {
	// const isAdmin=true
	const { isAdmin } = useAuthStore();
	console.log({ isAdmin });

	

	return (
		<div
			className='flex items-center justify-between p-4 sticky top-0 bg-zinc-900/75 
      backdrop-blur-md z-10
    '
		>
			<div className='flex gap-2 items-center'>
				<img src='/chimeifylogo.jpg' className='size-10' alt='Chimeify logo' />
				<span className="text-[#e76239] font-semibold font-mono">Chimeify</span>
				
			</div>
			<div className='flex items-center gap-4'>
				{isAdmin && (
					<Link to={"/admin"}>
						<LayoutDashboardIcon className='size-4  mr-2' />
						Admin Dashboard
					</Link>
				)}

				<SignedOut>
					<SignInOAuthButtons />
				</SignedOut>

				<UserButton />
			</div>
		</div>
	);
};
export default Topbar;