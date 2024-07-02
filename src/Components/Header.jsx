import {Link} from "react-router-dom"
import logo from "../assets/food-logo.png"

export const Header = () => {
  return (
    <div className="absolute w-[100%] top-[0%] left-[0%]">
        <header className="flex items-center justify-between px-[5%] py-[1%]">
            <div className="logo">
                <Link className="flex items-center">
                    <img className="w-[100px] mr-[10px]" src={logo} alt="" />
                    <p className="text-white text-[40px]">ᖴOOᗪOTᗩ</p>
                </Link>
            </div>
            <div className="user">
                <Link to={"/"} className="flex items-center justify-between font-[500] px-[10%] text-[17px] h-[45px] w-[200px] bg-[#ffcc00]">
                    <p className="font-[Montserrat]">Login or Signup</p>
                    <i class="fa-solid fa-user"></i>
                </Link>
            </div>
        </header>
    </div>
  )
}
