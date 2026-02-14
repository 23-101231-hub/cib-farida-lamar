import React from 'react';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Text1 from '../components/Text1';
import "../components/Section.css"
import Title from '../components/Title';
import Slogan from '../components/Slogan';
import Card1 from '../components/Card1';

const Home = () => {
    return ( 
        <>
     <Nav />
     <Hero />
  

     <section class="section">

<div class="mini-nav">
<Text1 />
  <Text1 />
  <Text1 />
  <Text1 />
  <Text1 />
  <Text1 />
</div>

<div class="title-wrap">
  <Title />
 <Slogan />
</div>

<div class="cards">
 <Card1 />

 <Card1 />

 <Card1 />
</div>

</section>

        </>
     );
}
 
export default Home;
