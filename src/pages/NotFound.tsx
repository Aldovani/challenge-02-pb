import { Link } from "react-router-dom"

export function NotFound(){
    return(
    <>
    <div className="bg-[url(/notfound.png)] bg-cover after:absolute after:w-full after:h-full relative after:bg-customRadial after:block after:top-0 after:left-0  after:z-10  flex items-center justify-center w-screen h-screen">
        <div className="relative z-20 flex flex-col gap-10 items-center justify-center">
            <h1 className="lg:text-9xl text-5xl px-4 font-eb-garamond text-white font-bold text-center ">Lost In The Jungle!</h1>
            <Link to={"/"} className="bg-wisper py-4 px-11 font-raleway text-primary-lunar-green hover:bg-primary-lunar-green hover:text-white transition-colors">Back to Home</Link>
        </div>
    </div>
    </>
    )
}