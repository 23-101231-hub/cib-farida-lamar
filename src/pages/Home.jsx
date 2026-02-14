import React from 'react';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Text1 from '../components/Text1';
import "../components/Section.css"
import Title from '../components/Title';
import Slogan from '../components/Slogan';
import Card1 from '../components/Card1';
import Card2 from '../components/Card2';
import Viewbtn from '../components/Viewbtn';
import Card3 from '../components/Card3';
import img5 from "../assets/Picture [lozad].png"
import Card4 from '../components/Card4';
import Card5 from '../components/Card5';
import Card6 from '../components/Card6';
import Footer from '../components/Footer';




const Home = () => {
    return ( 
        <>
     <Nav />
     <Hero />
  

     <section className="section">

<div className="mini-nav">
<Text1 />
  <Text1 />
  <Text1 />
  <Text1 />
  <Text1 />
  <Text1 />
</div>

<div className="title-wrap">
  <Title />
 <Slogan />
</div>

<div className="cards">
 <Card1 />

 <Card1 />

 <Card1 />
</div>

</section>


<section class="learning-section">
  <h2>Learning Center</h2>
  <p className="subtitle">Learn more about banking and your finances</p>

  <div className="cards2">

    <Card2 />
    <Card2 />
    <Card2 />

  </div>

  <Viewbtn />

</section>




<section className="news-section">
  <h2 className="news-title">News</h2>

  <div className="news-container">

  <Card3 />

  <Card3 />

  <Card3 />

  </div>

  <Viewbtn />

</section>



<section className="international-section">

  <div className="card-wrapper2">

    <div className="card-image2">
       <img src={img5} />
    </div>

    <div className="card-content2">
      <h3>CIB on an international scale</h3>
      <p>Learn more about CIB's presence outside of Egypt</p>
      <Viewbtn />
    </div>

  </div>

</section>




<section className="sustainability-section">

  <Title />

  <Slogan />

  <div className="logos">

   <Card4 />
   <Card4 />
   <Card4 />

  </div>

 <Viewbtn />

</section>



<section className="awards">

  <Title />
  <Slogan />


  <div className="awards-row">
 
   <Card5 />
   <Card5 />
   <Card5 />

  </div>

  <Viewbtn />
</section>





<section class="wecare">

  <Title />
  <Slogan />

  <div class="wecare-row">

  <Card6 />
  <Card6 />
  <Card6 />

  </div>
</section>


<Footer />






        </>
     );
}
 
export default Home;
