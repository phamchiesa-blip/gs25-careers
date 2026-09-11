import Food from './Food'

const FoodPage = () => {
  return (
    <>
        {/* Banner */}
        <div className="w-full h-[500px] relative">
            <img src="/food-banner.jpg" alt="food banner" className="w-full h-full object-cover" />
            <h1 className="absolute top-1/2 lg:left-1/8 left-1/2 text-white lg:text-5xl text-2xl font-bold bg-[#4482ffc9] lg:p-6 p-3 rounded-xl">Đồ ăn</h1>
        </div>

        {/* Content */}
        <Food />
    </>
  )
}

export default FoodPage