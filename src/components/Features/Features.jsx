import "./Features.css";
import { illustrationLaptopMobile,illustrationLaptopDesktop } from "../../assets";

const Features = () => (
	<section>
		<div className= "container">
			<div className= "content-two-columns">
				<picture className= "content__image">
					<source srcSet= {illustrationLaptopDesktop}
					media= "(min-width: 50em)"/>
					<source srcSet= {illustrationLaptopMobile}
					media= "(max-width: 50em)"/>
					<img src= {illustrationLaptopMobile} alt= "Laptop"/>
				</picture>

				<div className= "content-info column-center column-md-left">
					<h2 className= "title title-dark">
						Free, open, simple
					</h2>
					<p className= "text text-dark">	
					Blogr is a free and open source application backed by a large community of helpful developers. It supports 
					features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
					and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
					</p>
					<h2 className= "title title-dark">
						Powerful tooling
					</h2>
					<p className= "text text-dark"> 	
						Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
						capable of producing even the most complicated sites.
					</p>
				</div>
			</div>
		</div>
	</section>
);

export default Features;