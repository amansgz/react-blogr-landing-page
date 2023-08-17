import "./Hero.css";
import {WhiteButton, TransparentButton} from "../shared/Button";

const Hero = () => (
	<section className= "section-hero">
		<div className= "hero__container">
			<h1 className= "hero__title">
				A modern publishing platform
			</h1>
			<p className= "hero__text">
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