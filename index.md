<script src="{{ '/js/carousel.js?v=' | append: site.github.build_revision | relative_url }}"></script>
<div id="root">
	<div id="drilling">
		<!-- Slideshow container -->
		<div class="slideshow-container">

		<!-- Full-width images with number and caption text -->

		<div class="mySlides fade">
			<video muted playsInLine src="{{ '/images/ColcordFast.mov' | relative_url }}" style="width:100%; object-fit: fill; height: calc(100vw * .4);"></video>
		</div>

		<div class="mySlides fade">
			<img src="{{ '/images/wellBumblebee.jpg?v=' | append: site.github.build_revision | relative_url }}" style="width:100%; height: calc(100vw * .4);">
		</div>

		<div class="mySlides fade">
			<img src="{{ '/images/wellPeanut.jpg?v=' | append: site.github.build_revision | relative_url }}" style="width:100%; height: calc(100vw * .4);">
		</div>

		<!-- Next and previous buttons -->
		<a class="prev" onclick="goBack()">&#10094;</a>
		<a class="next" onclick="autoSlide()">&#10095;</a>

		</div>
		<div class="mid-page-lists">
			<span class="mid-page-list-border">
				<h2>Well Drilling Solutions</h2>
				<div class="mid-page-info">
					Offering drilling solutions for residential, commercial and agricultural projects.
				</div>
			</span>
			<span id="hideWhenSmall" class="mid-page-list-border mid-page-additional-section">
				<h2>Free Estimates</h2>
				<div class="mid-page-info">
					Give us a call for a free estimate and consultation on well drilling and pump services.
					<a href="http://www.summerswelldrilling.com/contactUs">Contact Us</a>
				</div>
			</span>
			<span id="hideWhenSmall" class="mid-page-additional-section">
				<h2>Local Service</h2>
				<div class="mid-page-info">
					ARKANSAS, OKLAHOMA, MISSOURI – LICENSED, BONDED, INSURED
				</div>
			</span>
		</div>


		<!-- <div style="width:100%; display: inline; background-color: #BFC0C0">
		<div style="display: inline-block">

		</div>
		<div style="display: inline-block"> -->
		<div class="content">
			<div class="content-left">
				<div class="content-left-header">
					<h2>3rd Generation, Family Owned and Operated</h2>
				</div>
				<div class="content-left-body">
					Summers Well Drilling and Pumps is a family business and we treat our customers like family.
					We operate three drill rigs to ensure a complete job in a timely manor. We pride ourselves in giving our customers the best service available from the first phone call all the way through putting the cap on your new well.<br /><br />
					We work hard to make sure you get the best quality work at an affordable price. Our experienced staff can solve almost any water problem and eliminate common issues such as hardness and sulfur. We only use products that are made in the U.S. and source locally when available.<br /> <br />
					Give us a call today to see what we can do for you.
				</div>
			</div>
			<div class="content-right">
				<img src="{{ '/images/Yellow rig1.jpg' | relative_url }}">
			</div>
		</div>

		<div class="bottom-block-links">
					<div class="bottom-block-link">
						<h2 class="bottom-block-link-header">
							Have an old unused well?
						</h2>
						<div class="bottom-block-link-content">
							Please refer to the "Plugging Abandoned Wells" page.
						</div>
							<a  href="{{ 'abandonedWells' | relative_url }}"><button>More Info</button></a>
					</div>
					<div class="bottom-block-link">
						<h2 class="bottom-block-link-header">
							Looking for well drilling regulations?
						</h2>
						<div class="bottom-block-link-content">
							Please refer to these rules posted by the Arkansas Natural Resources Commission.
						</div>
							<button target="_blank" rel="noreferrer noopener" href="http://170.94.37.152/REGS/138.00.05-008F-8208.pdf">More Info</button>
					</div>
					<div class="bottom-block-link">
						<h2 class="bottom-block-link-header">
							Have more questions?
						</h2>
						<div class="bottom-block-link-content">
							Please refer to the "FAQ" page.
						</div>
							<button href="{{ 'faq' | relative_url }}">More Info</button>
					</div>
				</div>
	</div>
</div>