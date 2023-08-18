import "./Infrastructure.css";
import "../../index.css";
import {illustrationPhones} from "../../assets";

const Infrastructure = () => (
	<section className= "section-infrastructure">
		<div className= "container-infrastructure flex-md-two-columns">
		<div className= "images">
				<picture>
					<img src= {illustrationPhones} alt= "Phones"/>
				</picture>
			</div>	
			<div className= "content">
				<h2 className= "content__title">
					State of the Art Infrastructure
				</h2>
				<p className= "content__text">
					With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
					This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
				</p>
			</div>
		
		</div>
	
	</section>
);

export default Infrastructure;