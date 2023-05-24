import React from 'react';

function SignUpForm() {
  return (
    <div className="signup-container">
      <img src="https://cdn.pixabay.com/photo/2017/11/12/19/17/vegetables-landscape-2943500_640.jpg" alt="Sign up" className="signup-image" />
      <form className="signup-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Sign Up</button>
        <div className="form-group">
          <p className="create-account-message">
            Have an account? <a href="/login" style={{ color: '#008000', cursor: 'pointer' }}>Log In</a>
          </p>
        </div>
   
      </form>
    </div>
  );
}

export default SignUpForm;
