import "./Design.css";
import {illustrationEditorMobile} from "../../assets"

const Design = () => (
	<section className= "section-light">
		<div className= "container">
			<h2 className= "container-title title-dark">
			Designed for the future
			</h2>
			<div className= "content-two-columns">
				<div className= "content__image">
					<img src= {illustrationEditorMobile}/>
				</div>

				<div className= "content-info column-center column-md-left">
					<h3 className= "title title-dark">
						Introducing an extensible editor	
					</h3>
					<p className= "text text-dark">
						Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.
					</p>	

					<h3 className= "title title-dark">
						Robust content management
					</h3>
					<p className= "text text-dark">
						Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
					</p>
				</div>
			</div>	
		</div>	
	</section>	
);

export default Design;