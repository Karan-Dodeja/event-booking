import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";

function Header() {
    const logo = "/";
    return (
        <div className="border-b">
            <div className="flex flex-col lg:flex-row items-center gap-4 p-4">
                <div className="flex items-center justify-between w-full lg:w-auto">
                    <Link href="/" className="font-bold shrink-0">
                        <Image
                            src={logo}
                            alt="logo"
                            width={100}
                            height={100}
                            className="w-24 lg:w-28"
                        />
                    </Link>
                    <div className="lg:hidden">
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                        <SignedOut>
                            <SignInButton mode="modal">
                                <button className="bg-gray-100 
                                text-gray-800 
                                px-3 py-1.5 text-sm 
                                rounded-lg hover:bg-gray-200 
                                transition border border-gray-300">
                                    Sign In
                                </button>
                            </SignInButton>
                        </SignedOut>
                    </div>
                </div>
                <div className="w-full lg:max-2xl">
                    <SearchBar />
                </div>
                {/* Desktop Action Buttons */}
                <div className="hidden lg:block ml-auto">
                    <SignedIn>
                        <div className="flex items-center gap-3">
                            <Link href="/seller">
                                <button className="bg-blue-600 text-white px-3 
                                py-1.5 text-sm rounded-lg hover:bg-gray-200 transition">
                                    Seller
                                </button>
                            </Link>

                            <Link href="/tickets">
                                <button className="bg-gray-100 text-gray-800 px-3 
                                py-1.5 text-sm rounded-lg hover:bg-gray-200 
                                transition border border-gray-300">
                                    My Tickets
                                </button>
                            </Link>
                            <UserButton />
                        </div>
                    </SignedIn>

                    <SignedOut>
                        <SignInButton mode="modal">
                            <button className="bg-gray-100 text-gray-800 px-3 
                            py-1.5 text-sm rounded-lg hover:bg-gray-200 transition 
                            border bordergray-300">
                                Sign Out
                            </button>
                        </SignInButton>
                    </SignedOut>
                </div>

                {/* Mobile Action Buttons */}
                <div className="lg:hidden w-full flex justify-center gap-3 ">
                    <SignedIn>
                        <div className="flex items-center gap-3">
                            <Link href="/seller">
                                <button className="bg-blue-600 text-white px-3 
                                py-1.5 text-sm rounded-lg hover:bg-gray-200 transition">
                                    Seller
                                </button>
                            </Link>

                            <Link href="/tickets">
                                <button className="bg-gray-100 text-gray-800 px-3 
                                py-1.5 text-sm rounded-lg hover:bg-gray-200 
                                transition border border-gray-300">
                                    My Tickets
                                </button>
                            </Link>
                            <UserButton />
                        </div>
                    </SignedIn>
                </div>
            </div>
        </div>
    )
}

export default Header;