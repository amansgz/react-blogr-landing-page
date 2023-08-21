import {useState} from "react";
import "./Navbar.css";
import { logo, iconHamburger, iconClose } from "../../assets";
import {menuItems} from "../constants";
import MenuItems from "../MenuItems/MenuItems";
import {SignUpButton} from "../shared/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
    
  return (
    <nav className= "nav">
      <div className= "navbar">
        <figure>
          <img src= {logo} alt="" />
        </figure>

        <figure className= "navbar__hamburger">
					<img src= {isOpen ? iconClose : iconHamburger}
					alt=""
					onClick= {() => setIsOpen((prev) => !prev)}
					/>
				</figure>
      </div>

      <ul className= {`${isOpen ? "hidden" : "flex"} nav__menu`}>
          {menuItems.map((menu, index) => {
          return <MenuItems items={menu} key={index} />;
        })}
        <li>
          <a href="">Login</a>
        </li>
        <li>
          <SignUpButton />
        </li>
			</ul>    
      
    </nav>
  )
};

export default Navbar;