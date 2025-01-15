
import React, { useState } from 'react';
import Login1 from '../assets/login.jpg';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [credential, setCredential] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false); // toggle password visibility
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form is submitted');

    const { email, password } = credential;

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const json = await response.json();
      console.log('Response data:', json);

      // Ensure that the backend is returning a valid authToken
      if (json.authToken) {
        // Save token to localStorage
        localStorage.setItem('token', json.authToken);
        console.log('Token saved in localStorage:', json.authToken);
        navigate('/'); 
      } else {
        alert(json.error || 'Invalid credentials or server issue.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Something went wrong! Please try again later.');
    }
  };

  const handleChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img className="login-img" src={Login1} alt="login" />
          </div>

          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={credential.email}
                  onChange={handleChange}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={credential.password}
                    onChange={handleChange}
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: 'absolute',
                      right: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    {showPassword ? '👁️' : '🙈'}
                  </button>
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <Link className="nav-link" to="/signup">
                Don't have an account? Sign up
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
