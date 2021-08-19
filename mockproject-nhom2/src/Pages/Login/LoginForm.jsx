import React from 'react';
import './style.css'
import Header from '../../Component/Header/Header'
import Footer from '../../Component/Footer/Footer'
const LoginForm = () =>{
    return(
        <>
        <Header/>
        {
          <div className='loginForm'>
          <div className="container-flud d-block d-lg-flex">
            <div className="left col col-lg-4">
              <div className='text-des d-none d-lg-block'>
                  <p className='des'>Join the millions who trust in us to manage their tournaments. More than 11,448,459 brackets created.</p>
              </div>
            </div>
            <div className="right col col-lg-8">
              <div className='login-main'>
                <h3 className='title-login'>Login</h3>
                <p className='des'>Welcome back! Please enter your details or log in with your social media account.</p>
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" required />
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" required />
                    <label className="form-check-label" htmlFor="exampleCheck1">Remember me!</label>
                  </div>
                  <button type="submit" className="btn btn-submit-form">Submit</button>
                </form>
              </div>
            </div>
          </div>
          </div>
        }
        <Footer/>
     </>
    );
}
export default LoginForm;