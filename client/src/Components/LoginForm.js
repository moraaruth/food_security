import React from 'react';
import './Style.css'

function LoginForm() {
  return (
    // <div className="signup-container">
    //   <img src="https://cdn.pixabay.com/photo/2017/11/12/19/17/vegetables-landscape-2943500_640.jpg" alt="Sign up" className="signup-image" />
    //   <form className="signup-form">
       
    //     <label htmlFor="email">Email</label>
    //     <input type="email" id="email" name="email" required />

    //     <label htmlFor="password">Password</label>
    //     <input type="password" id="password" name="password" required />

    //     <button type="submit">Log In</button>
    //     <div className="signupf-orm">
    //       <p className="create-account-message">
    //         Need an account? <a href="/usersignup" style={{ color: '#148F77', cursor: 'pointer' }}>Sign Up</a>
    //       </p>
    //     </div>
    //   </form>
    // </div>

    <div style={{ display: 'flex', flexWrap: 'nowrap', marginTop: '100px'}}>
      <form className="form1">
        <h2 className="title">UKULIMA HUB</h2><br /> <br />
        <p> Home for Fresh Products</p>
      </form>

      <form  className="form-container" style={{ margin: '0' }}>
        <h2 className="form-title">Welcome Back!</h2>
        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="form-input"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="form-input"
            placeholder="Enter your password"
            required
          /><br />
          <button type="button" className="button-forgot" >
            Forgot Password?
          </button>
        </div>


        <div className="form-group">
          <button type="submit" className="form-button">
            Log In
          </button>

        </div>
        <div className="form-group">
          <p className="create-account-message">
            Need an account? <a href="/usersignup" style={{ color: '#008000', cursor: 'pointer' }}>Sign Up</a>
          </p>
        </div>

      </form>


    </div>
  );
}

export default LoginForm;
