import "./Footer.css";
import {logo} from "../../assets" ;
import { footerLinks } from "../constants";

const Footer = () => (
	<footer className= "footer">
		<div className= "footer__logo">
			<img src= {logo} alt="logo"/>
		</div>
		
			{footerLinks.map((footerLink) => (
				<div key= {footerLink.title}
					className= "list-container">
					<h2 className= "list-container__title">
						{footerLink.title}
					</h2>
					<ul>
						{footerLink.links.map((link, index) => (
							<li key= {link.name} 
								className= "list__item">

								<a href= {`#${link.name}`}
									className= "list__link">
									{link.name}
								</a>
							</li>
						))}	
					</ul>
				</div>		
			))}
	</footer>
);

export default Footer;