import "./Features.css";
import { illustrationLaptopMobile,illustrationLaptopDesktop } from "../../assets";

const Features = () => (
	<section className= "section-features">
			<div className= "container-features flex-sm-column-center flex-md-two-columns">
				<div className= "images">
					<picture>
						<source srcSet= {illustrationLaptopDesktop}
						media= "(min-width: 767px)"/>
						<source srcSet= {illustrationLaptopMobile}
						media= "(max-width: 767px)"/>
						<img src= {illustrationLaptopMobile} alt= "Laptop"/>
					</picture>
				</div>

				<div className= "content">
					<h2 className= "content__title">
						Free, open, simple
					</h2>
					<p className= "content__text">	
					Blogr is a free and open source application backed by a large community of helpful developers. It supports 
					features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
					and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
					</p>

					<h2 className= "content__title md-heading">
						Powerful tooling
					</h2>
					<p className= "content__text"> 	
						Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
						capable of producing even the most complicated sites.
					</p>
				</div>
			</div>
	</section>
);

export default Features;