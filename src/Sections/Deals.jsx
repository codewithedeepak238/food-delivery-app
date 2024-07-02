import img1 from "../assets/combo/img1.png"
import img2 from "../assets/combo/img2.png"
import img3 from "../assets/combo/img3.png"
import img4 from "../assets/combo/img4.png"
import img5 from "../assets/combo/img5.png"
import img6 from "../assets/combo/img6.png"
import { DealCard } from "../Components"

export const Deals = () => {
    const dealList = [
        {
            item: "Crispy Fry Burger",
            desc: "Howdy Special, A well-seasoned, crispy fried chicken fillet slathered with a",
            before_price: 690.00,
            after_price: 600.00,
            source_img: img1
        },
        {
            item: "Fandango Burger",
            desc: "Potato skins, chicken strips, toasted ravioli and mozzarella sticks served with",
            before_price: 890.00,
            after_price: 700.00,
            source_img: img2
        },
        {
            item: "Wrangler Burger",
            desc: "Blackened chicken, sauteed onions and peppers smothered with pepper jack and",
            before_price: 999.00,
            after_price: 899.00,
            source_img: img3
        },
        {
            item: "Double Cheese Burger",
            desc: "Special Burger, deep-fried beef ravioli served with marinara sauce and topped",
            before_price: 270.00,
            after_price: 199.00,
            source_img: img4
        },
        {
            item: "Cheddar Cheese Burger",
            desc: "Hot & Grilled nachos smothered in cheddar cheese, beef, black olives, onions,",
            before_price: 790.00,
            after_price: 699.00,
            source_img: img5
        },
        {
            item: "Howdy Hamburger",
            desc: "Double Breast Of A Chicken Burger With Spicy Red Sauce Try this new arrival to",
            before_price: 690.00,
            after_price: 500.00,
            source_img: img6
        },
    ]
  return (
    <div className="text-black bg-[#f2f2f2] w-[100%] mt-[2%] block relative py-[2%]">
        <div className="text-center">
            <h2 className="text-[#ffcc00] font-[700]">SUPER DELICIOUS</h2>
            <p className="text-4xl font-[700] mt-[0.7%] underline_text relative">Super Delicious Deals</p>
            <div>
                <div className="grid grid-box2 px-[8%] mt-[7%]">
                    {
                        dealList && dealList.map((item, i)=>(
                            <DealCard key={i} item={item}/>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
