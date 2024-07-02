import { Link } from "react-router-dom"

export const DealCard = ({item}) => {
  return (
    <div className="bg-white p-[5%] m-[3%] dealCard rounded-[5px]">
      <Link className="text-left flex flex-col justify-center">
      <div className="flex justify-center">
        <img className="" src={item.source_img} alt={item.item} />
      </div>
        <h2 className="text-xl font-[600] mt-[4%]">{item.item}</h2>
        <p className="text-gray-700 text-[14px] py-[2%]">{item.desc}</p>
        <p><span className="text-black text-[14px] font-[600] line-through mr-[4%]">${item.before_price}</span><span className="text-[#ffcc00] text-[22px] font-[600]">${item.after_price}</span></p>
      </Link>
    </div>
  )
}
