import banner from "../../assets/banner.png"
import bannerMD from "../../assets/bannerMD.png"

const Banner = () => {
    return(
        <div className="w-full flex justify-center">
            <div className="w-full flex flex-col items-center justify-center relative">
                <img src={banner} alt="Banner da promoção" className="md:hidden w-screen"/>
                <img src={bannerMD} alt="Banner da promoção" className="hidden w-screen md:flex"/>
                <button className="absolute bottom-1 bg-orange-500 p-2 w-64 m-2 rounded text-white font-semibold text-base md:bottom-32 md:right-32">Aproveitar Oferta</button>
            </div>
        </div>
    )
}

export default Banner