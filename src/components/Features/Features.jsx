import "./Features.css";
import "../../index.css";

const Features = () => (
	<section  className= "container">
		<div className= "content-features">
			<div className= "content__image"></div>

			<div className= "content-info">
				<h2 className= "content-info__title content-info__title--dark">
			  	Free, open, simple
			  </h2>
			  <p className= "content-info__text content-info__text--dark">	
			  Blogr is a free and open source application backed by a large community of helpful developers. It supports 
			  features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
			  and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
			  </p>
			  <h2 className= "content-info__title content-info__title--dark">
			  	Powerful tooling
			  </h2>
			  <p className= "content-info__text content-info__text--dark"> 	
			  Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
			  capable of producing even the most complicated sites.
			  </p>
			</div>
		</div>	

  </section>
);

export default Features;