import "./Design.css";
import "../../index.css";

const Design = () => (
	<section className= "container">
		<h2 className= "container__title">
			Designed for the future
		</h2>
		<div className= "content">
		  <div className= "content__image"></div>

			<div className= "content-info">
				<h3 className= "content-info__title content-info__title--dark">
					Introducing an extensible editor	
				</h3>
				<p className= "content-info__text content-info__text--dark">
					Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.
				</p>	

				<h3 className= "content-info__title content-info__title--dark">
			  	Robust content management
			  </h3>
			  <p className= "content-info__text content-info__text--dark">
		  		Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
		  	</p>
	  	</div>
	  </div>	
  </section>	
);

export default Design;