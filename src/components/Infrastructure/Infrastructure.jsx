import "./Infrastructure.css";
import "../../index.css";
import {illustrationPhones} from "../../assets";

const Infrastructure = () => (
	<section className= "section-infrastructure">
		<div className= "container">
			<div className= "content-two-columns">
				<picture className= "content__image">
					<img src= {illustrationPhones} alt= "Phones"/>
				</picture>

				<div className= "content-info column-center column-md-left">
					<h2 className= "title title-light">
						State of the Art Infrastructure
					</h2>
					<p className= "text text-light">
						With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
						This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
					</p>
				</div>
			</div>
		</div>	
	</section>
);

export default Infrastructure;