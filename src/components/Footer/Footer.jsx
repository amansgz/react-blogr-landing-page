import "./Footer.css";
import {logo} from "../../assets" ;
import { footerLinks } from "../constants";

const Footer = () => (
	<footer className= "footer">
		<div className= "container-footer">
			<div className= "flex-sm-column-center grid-md-four-columns">
				<div className= "footer__logo">
					<img src= {logo} alt="logo"/>
				</div>
				
					{footerLinks.map((footerLink) => (
						<div key= {footerLink.title}
							className= "list">
							<h2 className= "list__title">
								{footerLink.title}
							</h2>
							<ul>
								{footerLink.links.map((link) => (
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
			</div>		
		</div>		
	</footer>
);

export default Footer;