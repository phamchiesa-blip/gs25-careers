import youus from "../../assets/youus-header-banner.jpg";
import Youus from "./Youus";
import YouusBanner from "../../components/YouusBanner";

const YouusPage = () => {
  return (
   <>
   {/* Banner */}
   <div className="w-full h-[500px] relative">
    <img src={youus} alt="Youus Banner" className="w-full h-full object-cover" />
    <h1 className="absolute top-1/2 lg:left-1/8 left-1/2 text-white lg:text-5xl text-2xl font-bold bg-[#4482ff5f] lg:p-6 p-3 rounded-xl">YOUUS</h1>
   </div>

   <Youus />
   <YouusBanner />
   </>
  )
}

export default YouusPage