import React from 'react'
//template's content of body tag is returned by home
function Home(){

return(
<div id="top" oncontextmenu="return false">


	{/* <!-- header 
   ================================================== --> */}
   <header>   	
   	<div class="row">

   		<div class="top-bar1">
   			<button class="menu-toggle"><span>Menu</span></button>

	   		<div class="logo">
		         <a href="index.html">Akash</a>
		      </div>		      

		   	<nav id="main-nav-wrap">
					<ul class="main-navigation">
						<li class="current"><a class="smoothscroll1"  href="#intro" title="">Home</a></li>
						<li><a class="smoothscroll1"  href="#about" title="">About</a></li>
						<li><a class="smoothscroll1"  href="#resume" title="">Resume</a></li>
						{/* 	<!--
						<li><a class="smoothscroll"  href="#portfolio" title="">Portfolio</a></li>
						
						<li><a class="smoothscroll"  href="#services" title="">Services</a></li>		
						-->	 */}		
						<li><a class="smoothscroll1"  href="#contact" title="">Contact</a></li>	
						{/* <!--
						<li><a href="styles.html" title="">Style Demo</a></li>	
						--> */}			
					</ul>
				</nav>    		
   		</div> {/* <!-- /top-bar --> 
   		 */}
   	</div> {/* <!-- /row --> 		 */}
   </header> {/* <!-- /header --> */}

	{/* <!-- intro section
   ================================================== -->
    */}<section id="intro">   

   	<div class="intro-overlay"></div>	

   	<div class="intro-content">
   		<div class="row">

   			<div class="col-twelve">

	   			<h5>Hello, World.</h5>
	   			<h1>I'm Akash Gopalkrishnan.</h1>

	   			<p class="intro-position">
	   				<span>Software Engineer</span>
	   				<span>Front-end, Back-end, Systems, Algorithms, Databases</span> 
	   			</p>

	   			<a class="button stroke smoothscroll" href="#about" title="">More About Me</a>

	   		</div>  
   			
   		</div>   		 		
   	</div>{/*  <!-- /intro-content --> */} 

   	<ul class="intro-social">        
		 <li><button href="#"><i class="fa fa-facebook"></i></button></li>
		{/*  <!--
         <li><a href="#"><i class="fa fa-behance"></i></a></li>
         <li><a href="#"><i class="fa fa-twitter"></i></a></li>
		 <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
		 
		 <li><a href="#"><i class="fa fa-instagram"></i></a></li>
		 --> */}
		<li><button href="#"><i class="fa fa-github"></i></button></li>
	
      </ul>{/*  <!-- /intro-social -->  */}     	

   </section> {/* <!-- /intro -->


   <!-- about section
   ================================================== -->
    */}<section id="about">  

   	<div class="row section-intro">
   		<div class="col-twelve">

   			<h5>About</h5>
   			<h1>Let me introduce myself.</h1>

   			<div class="intro-info">

   				<img src="images/profile-pic1.jpg" alt=""/>

   				<p class="lead">• Bachelor of Science in Mechanical Engineering from Rutgers University, The State University of New Jersey.
				• Skilled in JavaScript, ReactJS, HTML, CSS, Java, C++, MySQL, Microsoft Excel, and Microsoft Word.
				• Keen interest is in Software Engineering and programming.
				• Authorized to work in the U.S., U.S. Citizen</p>
   			</div>   			

   		</div>   		
   	</div>{/*  <!-- /section-intro --> */}

   	<div class="row about-content">

   		<div class="col-six tab-full">

   			<h3>Profile</h3>
   			<p>I enjoy computer science and systems design.  I aim to use my technical skills and apply algorithms to applications across several industries.</p>

   			<ul class="info-list">
				 {/*   <!--
   				<li>
   					<strong>Fullname:</strong>
   					<span>Juan Dela Cruz</span>
   				</li>
   				<li>
   					<strong>Birth Date:</strong>
   					<span>September 28, 1987</span>
				   </li>
				--> */}
   				<li>
   					<strong>Job:</strong>
   					<span>Software Engineer</span>
				   </li>
					<li>
						<strong>Industries:</strong>
						<span>Manufacturing, Energy, Financial Services  </span>
					</li>
   				<li>
   					<strong>Github:</strong>
   					<span>https://github.com/AGprofessional</span>
   				</li>
   				<li>
   					<strong>Email:</strong>
   					<span>akash.gop3@gmail.com</span>
   				</li>

   			</ul>{/*  <!-- /info-list -->

   */} 		</div>

   		<div class="col-six tab-full">

   			<h3>Skills</h3>
   			<p>Some of my top skills are listed below, along with percentages of proficiency.</p>

				<ul class="skill-bars">
				   <li>
				   	<div class="progress percent90"><span>90%</span></div>
				   	<strong>HTML5/JavaScript/CSS3</strong>
				   </li>
				   <li>
				   	<div class="progress percent80"><span>80%</span></div>
				   	<strong>Java</strong>
				   </li>
				   <li>
				   	<div class="progress percent100"><span>100%</span></div>
				   	<strong>SQL</strong>
				   </li>
				   <li>
				   	<div class="progress percent65"><span>65%</span></div>
				   	<strong>C++</strong>
				   </li>
				   <li>

				   	<div class="progress percent50"><span>50%</span></div>
				   	<strong>Python</strong>
				   </li>
      
				</ul> {/* <!-- /skill-bars -->		

 */}   		</div>

   	</div>

   	<div class="row button-section">
   		<div class="col-twelve">
   			<a href="#contact" title="Hire Me" class="button stroke smoothscroll">Contact Me</a>
   			<a href="#resume" title="Download CV" class="button button-primary">View Resume</a>
   		</div>   		
   	</div>

   </section> {/* <!-- /process-->    


  */} {/*  <!-- resume Section
   ================================================== -->
	 */}
     <section id="resume" class="grey-section">

		<div class="row section-intro">
   		    <div class="col-twelve">

   			<h5>Resume</h5>
   			<h1>More of my credentials.</h1>

   			<p class="lead"></p>

   		    </div>   		
    	</div>{/*  <!-- /section-intro-->  */}

   	    <div class="row resume-timeline">

   		    <div class="col-twelve resume-header">

   			    <h2>Work Experience</h2>

   		    </div>{/*  <!-- /resume-header --> */}

   		<div class="col-twelve">

   			<div class="timeline-wrap">

   				<div class="timeline-block">

	   				<div class="timeline-ico">
							<i class="fa fa-briefcase"></i>
	   				</div>

	   				<div class="timeline-header">
	   					<h3>Mechanical Design Engineer</h3>
	   					<p>January 2019 - July 2019</p>
	   				</div>

	   				<div class="timeline-content">
	   					<h4>Princeton Engineering Services, Plainsboro, NJ</h4>
	   					<p>
							   <ul>
								   <li>
									Streamlined the process of conducting Facility Condition Assessments which led to a 50% decrease in time needed to
									conduct the assessment and led to hiring more engineers.
								   </li>
								   <li>
									Managed multiple projects with the Senior Project Manager and composed technical proposals, brochures, scope of work
									documents, design reports, cost estimates, and AutoCAD drawing plans to win client projects and contracts.
								   </li>
							   </ul>
							  </p>
	   				</div>

	   			</div> {/* <!-- /timeline-block --> */}

	   			<div class="timeline-block">

	   				<div class="timeline-ico">
							<i class="fa fa-briefcase"></i>
	   				</div>

	   				<div class="timeline-header">
	   					<h3>Engineering CAD Operator</h3>
	   					<p>April 2018 – August 2018</p>
	   				</div>

	   				<div class="timeline-content">
	   					<h4>Byers Engineering Company, Somerset, NJ</h4>
						<p>

							<ul>
								<li>
									Increased project turnover by 30% measured in minutes to completion by optimizing the use of Microsoft Visio, Google
									Earth, and the Verizon CAD IDDS/ICGS drafting system.
								</li>
								<li>
								Developed an understanding of all project documentation standards, including land base maps, accessor maps, Verizon
								OSP records, and FTTP standards.
								</li>
							</ul>

						</p></div>

	   			</div> {/* <!-- /timeline-block --> */}

	   			<div class="timeline-block">

	   				<div class="timeline-ico">
							<i class="fa fa-briefcase"></i>
	   				</div>

	   				<div class="timeline-header">
	   					<h3>Garmin Assisted Sales Representative</h3>
	   					<p>November 2016 – August 2018</p>
	   				</div>

	   				<div class="timeline-content">
	   					<h4>BDS Marketing, LLC., Princeton, NJ</h4>
						<p>

						<ul>
							<li>
								Implemented successful sales strategies to exceed sales goals which led to a 160% increase of the BestBuy’s Garmin
								Wearables international ranking.
							</li>
							<li>
								Collaborated with sales staff to increase product awareness which led to a four-week first-place ranking of the
								Wearables department across BestBuy stores company-wide.
							</li>
						</ul>

						</p>	   				
                        </div>

	   			</div> {/* <!-- /timeline-block --> */}
   			</div>{/*  <!-- /timeline-wrap -->  */}  			

   		</div> {/* <!-- /col-twelve --> */}	
   	</div> {/* <!-- /resume-timeline --> */}
   	
   	<div class="row resume-timeline">

   		<div class="col-twelve resume-header">

   			<h2>Education</h2>

   		</div>{/*  <!-- /resume-header -->
                */}
   		<div class="col-twelve">

   			<div class="timeline-wrap">

   				<div class="timeline-block">

	   				<div class="timeline-ico">
				
						<i class="fa fa-graduation-cap"></i>
	   				</div>

	   				<div class="timeline-header">
	   					<h3>Bachelor of Arts, Computer Science, Post-Baccalaureate</h3>
	   					<p>September 2018 - May 2020</p>
	   				</div>

	   				<div class="timeline-content">
	   					<h4>Rutgers University, School of Arts and Sciences, New Brunswick, New Jersey</h4>
	   					<p>
							<ul>   
							<li>Coursework in Introduction to Computer Science, Data Structures, Introduction to Mechatronics, Biology I
							</li>
						</ul>
                        </p>	
							</div>

	   			</div> {/* <!-- /timeline-block --> */}
                
	   			<div class="timeline-block">

	   				<div class="timeline-ico">
						 
						<i class="fa fa-graduation-cap"></i>
	   				</div>

	   				<div class="timeline-header" id="extra-room">
	   					<h3>Bachelor of Science, Mechanical Engineering</h3>
	   					<p>September 2012 - August 2017</p>
	   				</div>

	   				<div class="timeline-content">
	   					<h4>Rutgers University, The State University of New Jersey, School of Engineering, New Brunswick, New Jersey</h4>
	   					<p>
                            <ul>
							   <li>Concentration in Energy Systems, Coursework in Alternative Energy Systems and Internal Combustion Engines 
							    </li>
								
							    <li>Relevant Coursework: Programming Methodology (C++)</li>
                      
							</ul>
                              </p>
							</div>

	   			    </div> 
                   {/* <!-- /timeline-block -->
                                            <!--
	   			<div class="timeline-block">

	   				<div class="timeline-ico">
	   					<i class="fa fa-briefcase"></i>
	   				</div>

	   				<div class="timeline-header">
	   					<h3>Bachelor Degree</h3>
	   					<p>May 2013 - June 2014</p>
	   				</div>

	   				<div class="timeline-content">
	   					<h4>Design College</h4>
	   					<p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi incididunt.</p>
	   				</div>

	   			</div> {/* <!~~ /timeline-block --> 
		
   			</div> {/* <!-- /timeline-wrap -->  */}
   		</div> {/* <!-- /col-twelve --> */}
   		
    	</div> {/* <!-- /resume-timeline --> */}
        </div>
	</section> {/* <!-- /features --> */}
{/* 
<div style="display:none">
	<!-- Portfolio Section
   ================================================== -->
	<section id="portfolio">

		<div class="row section-intro">
   		<div class="col-twelve">

   			<h5>Project Portfolio</h5>
   			<h1>Check Out Some of My Projects.  You can also check them out at my Github!</h1>

   			<p class="lead">Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem ipsum Consectetur ut in in eu do.</p>

   		</div>   		
   	</div> <!-- /section-intro--> 

   	<div class="row portfolio-content">

   		<div class="col-twelve">

   			<!-- portfolio-wrapper -->
	         <div id="folio-wrapper" class="block-1-2 block-mob-full stack">

	         	<div class="bgrid folio-item">
	               <div class="item-wrap">
	               	<img src="images/portfolio/liberty.jpg" alt="Liberty">
	                  <a href="#modal-01" class="overlay">	                  	           
	                     <div class="folio-item-table">
	                     	<div class="folio-item-cell">
		     					       <h3 class="folio-title">Liberty</h3>	     					    
		     					    	 <span class="folio-types">
		     					       	  Graphic Design
		     					       </span>
		     					   </div>	                      	
	                     </div>                    
	                  </a>
	               </div>	               
	        		</div> <!-- /folio-item -->

	        		<div class="bgrid folio-item">
	               <div class="item-wrap">
	               	<img src="images/portfolio/shutterbug.jpg" alt="Shutterbug">
	               	<a href="#modal-02" class="overlay">              		                  
	                     <div class="folio-item-table">
	                     	<div class="folio-item-cell">
	                     		<h3 class="folio-title">Shutterbug</h3>	     					    
		     					    	<span class="folio-types">
		     					       	  Web Design
		     					      </span>		     		
		     					   </div> 	                      	
	                     </div>                    
	                  </a>
	               </div>
	        		</div> <!-- /folio-item -->

	            <div class="bgrid folio-item">
	               <div class="item-wrap">
	               	<img src="images/portfolio/clouds.jpg"alt="Clouds">
	                  <a href="#modal-03" class="overlay">             		                  
	                     <div class="folio-item-table">
	                     	<div class="folio-item-cell">
	                     		<h3 class="folio-title">Clouds</h3>	     					    
		     					    	<span class="folio-types">
		     					       	  Web Design
		     					      </span>		     		
		     					   </div> 	                      	
	                     </div>                    
	                  </a>
	               </div>
	        		</div> <!-- /folio-item -->

	            <div class="bgrid folio-item">
	               <div class="item-wrap">
	               	<img src="images/portfolio/beetle.jpg" alt="Beetle">
	                  <a href="#modal-04" class="overlay">                  	                 
	                     <div class="folio-item-table">
	                     	<div class="folio-item-cell">
	                     		<h3 class="folio-title">Beetle</h3>	     					    
		     					    	<span class="folio-types">
		     					       	  Branding
		     					      </span>		     		
		     					   </div>  	                      	
	                     </div>                    
	                  </a>
	               </div>
	        		</div> <!-- /folio-item -->     

	        		<div class="bgrid folio-item">
	               <div class="item-wrap">
	               	<img src="images/portfolio/lighthouse.jpg" alt="Lighthouse">
	                  <a href="#modal-05" class="overlay">             		                  
	                     <div class="folio-item-table">
	                     	<div class="folio-item-cell">
	                     		<h3 class="folio-title">Lighthouse</h3>	     					    
		     					    	<span class="folio-types">
		     					       	  Web Development
		     					      </span>		     		
		     					   </div> 	                      	
	                     </div>                    
	                  </a>
	               </div>
	        		</div> <!-- /folio-item -->

	            <div class="bgrid folio-item">
	               <div class="item-wrap">
	               	<img src="images/portfolio/salad.jpg" alt="Salad">
	                  <a href="#modal-06" class="overlay">
	                     <div class="folio-item-table">
	                     	<div class="folio-item-cell">
	                     		<h3 class="folio-title">Salad</h3>	     					    
		     					    	<span class="folio-types">
		     					       	  Branding
		     					      </span>		     		
		     					   </div>	                      	
	                     </div>                    
	                  </a>
	               </div>
	        		</div> <!-- /folio-item -->   

	            <!-- modal popups - begin
	            ============================================================= -->
	            <div id="modal-01" class="popup-modal slider mfp-hide">	

				     	<div class="media">
				     		<img src="images/portfolio/modals/m-liberty.jpg" alt="" />
				     	</div>      	

					   <div class="description-box">
					      <h4>Liberty</h4>		      
					      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>

					      <div class="categories">Web Development</div>			               
					   </div>

			         <div class="link-box">
			            <a href="http://www.behance.net">Details</a>
					      <a href="#" class="popup-modal-dismiss">Close</a>
			         </div>		      

				   </div> <!-- /modal-01 -->

				   <div id="modal-02" class="popup-modal slider mfp-hide">	

				     	<div class="media">
				     		<img src="images/portfolio/modals/m-shutterbug.jpg" alt="" />
				     	</div>      	

					   <div class="description-box">
					      <h4>Shutterbug</h4>		      
					      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>

					      <div class="categories">Web Design</div>			               
					   </div>

			         <div class="link-box">
			            <a href="http://www.behance.net">Details</a>
					      <a href="#" class="popup-modal-dismiss">Close</a>
			         </div>		      

				   </div> <!-- /modal-02 -->

				   <div id="modal-03" class="popup-modal slider mfp-hide">	

				     	<div class="media">
				     		<img src="images/portfolio/modals/m-clouds.jpg" alt="" />
				     	</div>      	

					   <div class="description-box">
					      <h4>Clouds</h4>		      
					      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>

					      <div class="categories">Web Design</div>			               
					   </div>

			         <div class="link-box">
			            <a href="http://www.behance.net">Details</a>
					      <a href="#" class="popup-modal-dismiss">Close</a>
			         </div>		      

				   </div> <!-- /modal-03 -->

				   <div id="modal-04" class="popup-modal slider mfp-hide">	

				     	<div class="media">
				     		<img src="images/portfolio/modals/m-beetle.jpg" alt="" />
				     	</div>      	

					   <div class="description-box">
					      <h4>Beetle</h4>		      
					      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>

					      <div class="categories">Branding</div>			               
					   </div>

			         <div class="link-box">
			            <a href="http://www.behance.net">Details</a>
					      <a href="#" class="popup-modal-dismiss">Close</a>
			         </div>		      

				   </div> <!-- /modal-04 -->

				   <div id="modal-05" class="popup-modal slider mfp-hide">	

				     	<div class="media">
				     		<img src="images/portfolio/modals/m-lighthouse.jpg" alt="" />
				     	</div>      	

					   <div class="description-box">
					      <h4>Lighthouse</h4>		      
					      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>

					      <div class="categories">Web Development</div>			               
					   </div>

			         <div class="link-box">
			            <a href="http://www.behance.net">Details</a>
					      <a href="#" class="popup-modal-dismiss">Close</a>
			         </div>		      

				   </div> <!-- /modal-05 -->

				   <div id="modal-06" class="popup-modal slider mfp-hide">	

				     	<div class="media">
				     		<img src="images/portfolio/modals/m-salad.jpg" alt="" />
				     	</div>      	

					   <div class="description-box">
					      <h4>Salad</h4>		      
					      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>

					      <div class="categories">Branding</div>			               
					   </div>

			         <div class="link-box">
			            <a href="http://www.behance.net">Details</a>
					      <a href="#" class="popup-modal-dismiss">Close</a>
			         </div>		      

				   </div> <!-- /modal-06 -->


				   <!-- modal popups - end
	            ============================================================= -->

	         </div> <!-- /portfolio-wrapper --> 

   		</div>  <!-- /twelve -->   

   	</div> <!-- /portfolio-content --> 
		
	</section> <!-- /portfolio --> 


 	<!-- CTA Section
   ================================================== -->
	

	<!-- services Section
   ================================================== -->
    
	   	<section id="services">

		<div class="overlay"></div>

		<div class="row section-intro">
   		<div class="col-twelve">

   			<h5>Services</h5>
   			<h1>What Can I Do For You?</h1>

   			<p class="lead">Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem ipsum Consectetur ut in in eu do.</p>

   		</div>   		
	   </div> 
	   
	  <!-- /section-intro -->

   	<div class="row services-content">

   		<div id="owl-slider" class="owl-carousel services-list">

	      	<div class="service">	

	      		<span class="icon"><i class="icon-earth"></i></span>            

	            <div class="service-content">	

	            	 <h3>Webdesign</h3>

		            <p class="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
	         		</p>
	         		
	         	</div> 	         	 

				</div> <!-- /service -->

				<div class="service">	

					<span class="icon"><i class="icon-window"></i></span>                          

	            <div class="service-content">	

	            	<h3>Web Development</h3>  

		            <p class="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
	         		</p>

	            </div>	                          

			   </div> <!-- /service -->

			   <div class="service">

			   	<span class="icon"><i class="icon-paint-brush"></i></span>		            

	            <div class="service-content">

	            	<h3>Branding</h3>

		            <p class="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
	        			</p> 

	            </div> 	            	               

			   </div> <!-- /service -->

				<div class="service">

					<span class="icon"><i class="icon-toggles"></i></span>	              

	            <div class="service-content">

	            	<h3>UI/UX Design</h3>

		            <p class="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
	         		</p> 
	         		
	            </div>                

				</div> <!-- /service -->

			   <div class="service">

			   	<span class="icon"><i class="icon-image"></i></span>	            

	            <div class="service-content">

	            	<h3>Graphics Design</h3>

		            <p class="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
	        			</p> 

	            </div>	               

			   </div> <!-- /service -->

			   <div class="service">

			   	<span class="icon"><i class="icon-chat"></i></span>	   	           

	            <div class="service-content">

	            	 <h3>Consultancy</h3>

		            <p class="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
	        			</p> 
	        			
	            </div>	               

			   </div> <!-- /service -->

	      </div> <!-- /services-list -->
   		
   	</div> <!-- /services-content -->
		
	</section> <!-- /services -->	


	<!-- stats Section
   ================================================== -->
	 <section id="stats" class="count-up">

		<div class="row">
			<div class="col-twelve">

				<div class="block-1-6 block-s-1-3 block-tab-1-2 block-mob-full stats-list">

					<div class="bgrid stat">

						<div class="icon-part">
							<i class="icon-pencil-ruler"></i>
						</div>

						<h3 class="stat-count">
							1500
						</h3>

						<h5 class="stat-title">
							Projects Completed
						</h5>

					</div> <!-- /stat -->	 				

					<div class="bgrid stat">

						<div class="icon-part">
							<i class="icon-users"></i>
						</div>

						<h3 class="stat-count">
							900
						</h3>

						<h5 class="stat-title">
							Happy Clients
						</h5>

					</div>  <!-- /stat --> 

					<div class="bgrid stat">

						<div class="icon-part">
							<i class="icon-badge"></i>
						</div>

						<h3 class="stat-count">
							200
						</h3>

						<h5 class="stat-title">
							Awards Received
						</h5>

					</div>  <!-- /stat -->	 								

					<div class="bgrid stat">

						<div class="icon-part">
							<i class="icon-light-bulb"></i>
						</div>

						<h3 class="stat-count">
							120
						</h3>

						<h5 class="stat-title">
							Crazy Ideas
						</h5>

					</div>  <!-- /stat --> 

					<div class="bgrid stat">

						<div class="icon-part">
							<i class="icon-cup"></i>
						</div>

						<h3 class="stat-count">
							1500
						</h3>

						<h5 class="stat-title">
							Coffee Cups
						</h5>

					</div>  <!-- /stat --> 

					<div class="bgrid stat">

						<div class="icon-part">
							<i class="icon-clock"></i>
						</div>

						<h3 class="stat-count">
							7200
						</h3>

						<h5 class="stat-title">
							Hours
						</h5>

					</div>  <!-- /stat --> 

				</div> {/* <!-- /stats-list --> 

			</div> {/* <!-- /twelve --> 
		</div> {/* <!-- /row --> 

	</section> {/* <!-- /stats --> 

</div> */}


{/* 
   <!-- contact
   ================================================== --> */}
	<section id="contact">

		<div class="row section-intro">
   		<div class="col-twelve">

   			<h5>Contact</h5>
   			<h1>I'd Love To Hear From You.</h1>

   			<p class="lead"></p>

   		</div> 
   	    </div> {/* <!-- /section-intro --> */}

    	<div class="row contact-form">

   		    <div class="col-twelve">

{/*             <!-- form -->

 */}            
 <form name="contactForm" id="contactForm" method="post" action="">
      			
                  <fieldset>

                  <div class="form-field">
 						   <input name="contactName" type="text" id="contactName" placeholder="Name" value="" minlength="2" required=""/>
                  </div>
                  <div class="form-field">
	      			   <input name="contactEmail" type="email" id="contactEmail" placeholder="Email" value="" required=""/>
	               </div>
                  <div class="form-field">
	     				   <input name="contactSubject" type="text" id="contactSubject" placeholder="Subject" value=""/>
	               </div>                       
                  <div class="form-field">
	                 	<textarea name="contactMessage" id="contactMessage" placeholder="message" rows="10" cols="50" required=""></textarea>
	               </div>                      
                 <div class="form-field">
                     <button class="submitform">Submit</button>
                     <div id="submit-loader">
                        <div class="text-loader">Sending...</div>                             
       				      <div class="s-loader">
								  	<div class="bounce1"></div>
								  	<div class="bounce2"></div>
								  	<div class="bounce3"></div>
								</div>
							</div>
                  </div>

      			</fieldset>
      		</form> {/* <!-- Form End --> */}

{/*             <!-- contact-warning -->
 */}            <div id="message-warning">            	
            </div>            
{/*             <!-- contact-success -->
 */}      		<div id="message-success">
               <i class="fa fa-check"></i>Your message was sent, thank you!<br/>
      		</div>

         </div> 
         {/* <!-- /col-twelve -->
   		 */}
   	</div>
       {/*  <!-- /contact-form -->
 */}
   	<div class="row contact-info">

   		<div class="col-four tab-full">

   			<div class="icon">
   				<i class="icon-pin"></i>
   			</div>

   			<h5>Where to find me</h5>

   			<p>
           West Windsor, NJ<br/>
           
            </p>

   		</div>

   		<div class="col-four tab-full collapse">

   			<div class="icon">
   				<i class="icon-mail"></i>
   			</div>

   			<h5>Email Me At</h5>

   			<p>akash.gop3@gmail.com<br/>			     
			   </p>

   		</div>

   		<div class="col-four tab-full">

   			<div class="icon">
   				<i class="icon-phone"></i>
   			</div>

   			<h5>Call Me At</h5>

   			<p>Phone: (+1) 717-710-1775<br/>
			   	<br/>
			    
			   </p>

   		</div>
   		
   	</div> {/* <!-- /contact-info --> */}
		
	</section> {/* <!-- /contact --> */}


{/*    <!-- footer
   ================================================== -->
 */}

   <footer>
     	<div class="row">

     		<div class="col-six tab-full pull-right social">

     			<ul class="footer-social">        
				  <li><button href="#"><i class="fa fa-facebook"></i></button></li>
						<li><button href="#"><i class="fa fa-github"></i></button></li>
{/* <!--
			      <li><a href="#"><i class="fa fa-behance"></i></a></li>
			      <li><a href="#"><i class="fa fa-twitter"></i></a></li>
			      <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
				  <li><a href="#"><i class="fa fa-instagram"></i></a></li>
-->
 */}			   </ul> 
	      		
	      </div>

      	<div class="col-six tab-full">
	      	<div class="copyright">
		        	<span>© Copyright Kards 2016.</span> 
					<span>Design by <a href="http://www.styleshout.com/">styleshout</a></span>	
					
		         </div>		                  
	      	</div>

	      	<div id="go-top">
		         <a class="smoothscroll" title="Back to Top" href="#top"><i class="fa fa-long-arrow-up"></i></a>
		      </div>

      	</div> {/* <!-- /row --> */}     	
   </footer>  

   <div id="preloader"> 
    	<div id="loader"></div>
   </div> 

   {/* <!-- Java Script
   ================================================== -->  */}
   <script src="assets/js/jquery-2.1.3.min.js"></script>
   <script src="assets/js/plugins.js"></script>
   <script src="assets/js/main.js"></script>
  
</div>
)


}

export default Home;