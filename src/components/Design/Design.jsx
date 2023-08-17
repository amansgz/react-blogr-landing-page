import "./Design.css";
import {illustrationEditorMobile, illustrationEditorDesktop} from "../../assets"

const Design = () => (
	<section className= "section-design">
		<div className= "container">
			<h2 className= "container__title">
				Designed for the future
			</h2>
			<div className= "container-design flex-sm-column-center flex-md-two-columns">
				<div className= "images">
					<picture>
						<source srcSet= {illustrationEditorDesktop}
						media= "(min-width: 767px)"/>
						<source srcSet= {illustrationEditorMobile}
						media= "(max-width: 767px)"/>
						<img src= {illustrationEditorMobile} alt= "editor"/>
					</picture>
				</div>	
				
				<div className= "content">
					<h3 className= "content__title">
						Introducing an extensible editor	
					</h3>
					<p className= "content__text">
						Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.
					</p>
					
					<h3 className= "content__title">
						Robust content management
					</h3>
					<p className= "content__text">
						Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
					</p>
				</div>
			</div>	
		</div>	
	</section>	
);

export default Design;