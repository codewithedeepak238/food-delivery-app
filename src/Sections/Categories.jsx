import pizza from "../assets/categories/pizza.png"
import cupcake from "../assets/categories/cupcake.png"
import icecream from "../assets/categories/icecream.png"
import burger from "../assets/categories/burger.png"
import shake from "../assets/categories/shake.png"
import sandwich from "../assets/categories/sandwich.png"
import pasta from "../assets/categories/pasta.png"
import desert from "../assets/categories/desert.png"
import { Link } from "react-router-dom"

export const Categories = () => {
    const categoryList = [
        {
            item: "Pizza",
            img_source: pizza,
            category: "pizza"
        },
        {
            item: "Cupcakes",
            img_source: cupcake,
            category: "cupcake"
        },
        {
            item: "Icecream",
            img_source: icecream,
            category: "icecream"
        },
        {
            item: "Burgers",
            img_source: burger,
            category: "burger"
        },
        {
            item: "Shake",
            img_source: shake,
            category: "shake"
        },
        {
            item: "Sandwiches",
            img_source: sandwich,
            category: "sandwich"
        },
        {
            item: "Pasta",
            img_source: pasta,
            category: "pasta"
        },
        {
            item: "Deserts",
            img_source: desert,
            category: "desert"
        }
    ]

  return (
    <div className="text-black w-[100%] mt-[2%] block relative pt-[2%]">
        <div className="text-center">
            <h2 className="text-[#ffcc00] font-[700]">TOP FOODS</h2>
            <p className="text-4xl font-[700] mt-[0.7%] underline_text relative">Our Categories</p>
            <div>
                <div className="grid grid-box px-[8%] mt-[7%]">
                    {
                        categoryList && categoryList.map((item, i)=>(
                            <Link key={i} className="mb-[20%]">
                                <div className="flex items-center justify-center">
                                    <img className="w-[300px] h-[200px] object-contain" src={item.img_source} alt={item.item} />
                                </div>
                                <p className="mt-[5%] font-[600] text-xl">{item.item}</p>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
