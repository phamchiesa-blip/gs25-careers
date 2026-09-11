import Drink from './Drink'

const DrinkPage = () => {
  return (
    <>
        {/* Banner */}
        <div className="w-full h-[500px] relative">
            <img src="/drink.jpg" alt="drink banner" className="w-full h-full object-cover" />
            <h1 className="absolute top-3/5 lg:left-1/8 left-1/2 text-white lg:text-5xl text-2xl font-bold bg-[#4482ffc9] lg:p-6 p-3 rounded-xl">Nước uống</h1>
        </div>

        {/* Content */}
        <Drink />
    </>
  )
}

export default DrinkPage