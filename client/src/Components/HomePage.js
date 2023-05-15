import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer'
import './Style.css'
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

function HomePage (){
    return (
        <>
 <NavBar />
 <SignUpForm />
 <LoginForm />
       
    <div
  className="home-container"
  style={{
    backgroundImage: `url('https://cdn.pixabay.com/photo/2017/11/12/19/17/vegetables-landscape-2943500_640.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '500px',
  }}
>
  <h1>Welcome to Ukulima Hub!</h1>
  <p>This is the best place to get fresh food stuff and have them delivered to your location.</p>
  <button>Get Started</button>


</div>
<Footer />
        </>
    )

}

export default HomePage;