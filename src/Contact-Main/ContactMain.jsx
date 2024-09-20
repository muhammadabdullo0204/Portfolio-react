import React, { useState } from 'react';
import '../Contact-Main/ContactMain.css';
import { useNavigate } from 'react-router-dom';
import right from '../Images/right-arrow-svgrepo-com.svg';

function ContactMain() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState({});
  const [successMessage, setSuccessMessage] = useState(''); 
  const navigate = useNavigate();

  // const handleEmailChange = (e) => setEmail(e.target.value);

  const validate = () => {
    const error = {};

    if (!name) error.name = 'Name is required';
    if (!email) error.email = 'Email is required';
    else if (!email.includes('@')) error.email = 'Invalid email, @ required';
    if (!message) error.message = 'Message is required';

    setError(error);
    return error;
  };

  const handleSubmit = (e, targetPath = '/') => {
    e.preventDefault(); 

    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log({ name, email, message });

      const button = document.querySelector('.slides-button button.active');
      if (button) {
        button.classList.remove('active');
      }
      const clickedButton = document.activeElement;
      clickedButton.classList.add('active');

      setSuccessMessage('Your message was successfully sent!');

      setTimeout(() => {
        navigate(targetPath);
      }, 2500);
    }
  };

  return (
    <div className='Container'>
      <h1>CONTACT ME</h1>
      <div className='box'>
     
        <form onSubmit={handleSubmit} className="input-wrapper">
          <div className="box-2">
            <div className="input-field">
              <input
                type="text"
                required
                spellCheck="false"
                id="name-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="name-input">Enter your Name</label>
              {error.name && <span className="error">{error.name}</span>}
            </div>

            <div className="input-field">
              <input
                type="text"
                required
                spellCheck="false"
                id="email-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email-input">Enter your Email</label>
              {error.email && <span className="error">{error.email}</span>}
            </div>
          </div>

          <div className="input-field-3">
            <input
              type="text"
              required
              spellCheck="false"
              id="message-input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message-input">Enter your Message</label>
            {error.message && <span className="error">{error.message}</span>}
          </div>

          <div className='slides-button'>
            <button type="submit" onClick={(e) => handleSubmit(e, '/')}>
              <img width="30" height="30" src={right} alt="right-arrow" />
              <span>Send message</span>
            </button>
          </div>
        </form>
        {successMessage && <div className="success-message">{successMessage}</div>}
      </div>
    </div>
  );
}

export default ContactMain;
