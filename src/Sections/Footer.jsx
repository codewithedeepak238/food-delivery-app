import logo from "../assets/food-logo.png"
import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <div className="px-[8%] pt-[5%] pb-[2%]">
        <div className="grid grid-cols-4 gap-[50px]">
            <div>
                <div>
                    <Link className="flex items-center">
                        <img className="w-[100px] mr-[10px]" src={logo} alt="" />
                        <p className="text-black text-[20px]">ᖴOOᗪOTᗩ</p>
                    </Link>
                </div>
                <p className="mt-[2%]">One is to focus on the quality of your meat. If you can call out organic beef, sustainable farming.</p>
                <p className="my-[3%]"><span className="font-[600]">Phone:</span> +92300-400-2333</p>
                <p className="my-[3%]"><span className="font-[600]">Email:</span> restaurant@gmail.com</p>
                <p className="text-black my-[5%] flex gap-[10px]">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-youtube"></i>
                    <i class="fa-brands fa-instagram"></i>
                </p>
            </div>
            <div>
                <p className="text-xl font-[600]">Our Service</p>
                <p className="py-[3%] mt-[4%]">All Vendors</p>
                <p className="py-[3%]">Blog</p>
                <p className="py-[3%]">Home 1</p>
                <p className="py-[3%]">Home 2</p>
                <p className="py-[3%]">Main Home</p>
            </div>
            <div>
                <p className="text-xl font-[600]">Latest News</p>
                <p className="py-[3%] mt-[4%]">All Vendors</p>
            </div>
            <div>
                <p className="text-xl font-[600]">Useful Links</p>
                <p className="py-[3%] mt-[4%]">All Vendors</p>
                <p className="py-[3%]">Home 1</p>
                <p className="py-[3%]">Home 2</p>
                <p className="py-[3%]">Home 3</p>
                <p className="py-[3%]">Pricing Plan</p>
            </div>
        </div>
        <p className="mt-[5%] text-center">Copyright 2024 © All Rights Reserved. Made with ❤️ by Deepak Saraswat</p>
    </div>
  )
}
