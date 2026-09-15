import {MapPin} from 'lucide-react'
import {Link} from 'react-router-dom'

const JobLists = ({name, typeStaff, typeJob}) => {
  return (
    <>
        <section className="mx-auto my-10 px-4 max-w-7xl"> 
          <div className="bg-white rounded-[20px] p-5 sm:p-6 md:px-8 md:py-5 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 
          flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 md:gap-6 hover:shadow-lg hover:border-blue-100 transition-all duration-400 cursor-pointer
          hover:bg-[#0071B9] group">
            {/* Cột 1: Tên công việc & hình thức */}
            <div className="md:w-5/12 group-hover:text-wh">
              <h3 className="text-lg md:text-xl font-bold text-[#2368A2] tracking-wide hover:underline group-hover:text-white line-clamp-1">
                {name}
              </h3>
              <p className="text-sm text-gray-500 mt-1 group-hover:text-white">
                {typeStaff}
              </p>
            </div>

            {/* Cột 2: Khối ngành */}
            <div className="md:w-3/12 md:text-center text-sm font-bold uppercase tracking-wider text-gray-500 group-hover:text-white">
             {typeJob}
            </div>

            {/* Cột 3: Địa điểm */}
            <div className="flex items-center md:justify-end md:w-4/12 gap-1.5 text-sm font-bold uppercase tracking-wider text-gray-500">
              <MapPin className="w-4 h-4 shrink-0 text-gray-400" />
              <Link to='/'><span className='group-hover:text-white'>CÁC CỬA HÀNG GS25</span></Link>
            </div>
          </div>
        </section>
    </>
  )
}

export default JobLists