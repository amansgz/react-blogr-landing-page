import "./Hero.css";
import {WhiteButton, TransparentButton} from "../shared/Button";

const Hero = () => (
	<section className= "section-hero">
		<div className= "container-hero container">
			<h1 className= "title title-light">
				A modern publishing platform
			</h1>
			<p className= "text text-light">
				Grow your audience and build your online brand
			</p>	

			<div>	
				<WhiteButton/>
				<TransparentButton/>
			</div>
		</div>	
	</section>
);

export default Hero;