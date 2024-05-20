import React from 'react'
 import "./App.css";

function Home() {
  return (
   <>
  <div className='main_div'>

      <section className='heading'>
      <div class="logo-container">
        <img src='./images/lif.png' alt='leaf logo' class="logo"></img>
        <span class="envato-market">
            <span class="envato">envato</span>
            <span class="market">market</span>
         
        </span>
    </div>
         
          <button className='heading_btn'>Buy now</button>
         
   

      </section>
     { /* 2nd part */}
      <section className='header'>
        <div className='header_1'>
          <img src='./images/img2.png' alt='' className='img_2'></img>
        </div>
          <button className='btn'>Purchase now</button>
      </section>
     { /* 3rd part */}

      <section className='header_2'> 
      <div className='txt'>
        <span class='txt_1'>Trans</span><span class='form'>form</span>
        <p><span class="orange">Your Website</span></p>
        <p class="ong">With Motion Art Effect</p>
    </div>
        <div>
            <span className='p1'>Attract Your </span>
            <p className='p2'>Visitor Attention </p>
            <p className='p4'>With Colorful</p>
            <p className='p3'>Motion Art Effect </p>
          <p className='p5'>Unleash the power of creativity with Motion Art for Elementor - 

</p>
<p className='p7'>your ultimate solution for seamlessly integrating captivating animations into <br></br>your website. </p>
   <div className='txt_cntr'> <p className='p6'>Trusted by thousands of users around the world</p></div>

          </div>
      </section>
    {  /* 4th part */}
     <section className='header_3'>
     <div class="image-container">
    <img src='./images/leaf.png' alt='Leaf logo' ></img>
    <div>
    <img src="./images/star.png" alt='Star logo' ></img>
    <h4 className='txt_4'>4.5 score, 9 reviews</h4>
    </div>
  
   
  </div>
      <div className='image-container'>
      <img src='./images/G.png' alt='' ></img>
      <div>
      <img src="./images/star.png" alt=''></img>
       <h4 className='txt_4'>4.5 score , 9 reviews</h4>
      </div>
      
      </div>
      <div className='image-container'>
      <img src='./images/W.png' alt=''></img>
      <div>
      <img src="./images/star.png" alt=''></img>
      <h4 className='txt_4'>4.5 score , 9 reviews</h4>
      </div>
      
      </div>
     </section>
     {  /* 5th part */}
     <section className='header_4'>
      <div className='header_4_1'>
        <p className='txt_6'>
        Turn Your Cursor Into A Colorful Magic<br></br> Warm & Charm Your Visitors
        </p>
        <p className='txt_7'>
        Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse <br></br>your website with visually stunning motion art elements.
        </p>
        <button className='btn_2'>
          purchase from envato 
        </button>
      </div>
      <div className='img_7'>
        <img src='./images/design.png' alt=''></img>
      </div>
     </section>
     {  /* 6th part */}

     <section className='header_5'>
      <span className='header_5_1'> Apply On Any Section Or Enable For</span>   
      <p className='header_5_2'>Whole Page</p>
     </section>
     <section className='header_6'>
       <div className='header_6_1'>
        <p className='header_6_1_txt'>
        Apply On Section
        </p>
        <p  className='header_6_2_txt'>
        Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. 
        </p>
        <img src='./images/section.png' alt='' className='img_6'></img>
       </div>
       <div className='header_6_3'>
        <p className='header_6_3_txt'>Apply On Page</p>
        <p className='header_6_4_txt'>
Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.</p>
<img src='./images/page.png' alt='' className='img_7'></img>
       </div>
     </section>
     {  /* 7th part */}
     <section className='header_7'>
      <div className='header_7_txt'>
        <p className='header_7_txt_1'>Supported by All Popular Browsers
         </p>
         <p className='header_7_txt_2' >Rest assured, Motion Art is designed to be compatible<br></br> with all major web browsers.</p>
         <img src='./images/logo.png' alt="" className='header_7_txt_2_img' ></img>
      </div>
     
     </section> 
     {  /* 8th part */}
     <section className='header_8'>
     <div className='header_8_1'>
      <p className='header_8_1_2'>An All-Round Plugin <br></br>With Powerful Features</p>
      <p className='header_8_1_3'>Whether you're a seasoned web designer or just starting out, Motion Art for<br></br> Elementor seamlessly integrates with the Elementor platform, providing you
</p>
<span className='header_8_1_4'> with a seamless and intuitive experience.

</span>
     </div>
     {  /* 9th part */}
     <section className='header_9'>
      <div className='header_9_1'>
        <img src='./images/l1.png' alt=''></img>

        <h4>Light Weight</h4>
        <p>Motion Art for Elementor is designed<br></br> to be lightweight.</p>
      </div>
      <div className='header_9_1'>
      <img src='./images/l2.png' alt=''></img>

<h4>100% Responsive</h4>
<p>Create a consistent visual experience<br></br> across all devices.</p>
      </div>
      <div className='header_9_1'>
      <img src='./images/l3.png' alt=''></img>

<h4>User Friendly Interface</h4>
<p>Ensure a smooth experience for both <br></br>applicants and administrators.</p>
      </div>
     </section>
     {  /* 10th part */}
      <section className='footer'>
        <div>
          <p>© 2023 Copywrite. All rights reserved by QodeMatrix</p>
        </div>
        <div>
          <ul className='footer_1'>
            <li>Documentation</li>
            <li>support</li>

          </ul>
        </div>
      </section>
     </section>
  </div>
   </>







  )
}

export default Home