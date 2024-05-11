import { useState, useRef } from 'react';
import validation from './validation';

export default function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});

  const firstNameInput = useRef(null);
  const lastNameInput = useRef(null);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }

  function handleLastName(e) {
    setLastName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError(
      validation(
        firstNameInput.current,
        lastNameInput.current,
        emailInput.current,
        passwordInput.current
      )
    );
  }

  return (
    <form action="" className="main__form" noValidate onSubmit={handleSubmit}>
      <div className={`form__input ${error.first ? 'border-error' : ''}`}>
        <input
          value={firstName}
          onChange={handleFirstName}
          type="text"
          name="firstName"
          id="firstName"
          className="input-field"
          placeholder="First Name"
          ref={firstNameInput}
          required
        />
        {error.first && (
          <img src="/images/icon-error.svg" alt="" className="icon-error" />
        )}
      </div>
      {error.first && <span className="error-message">{error.first}</span>}
      <div className="form__input">
        <input
          value={lastName}
          onChange={handleLastName}
          type="text"
          name="lastName"
          id="lastName"
          className="input-field"
          placeholder="Last Name"
          ref={lastNameInput}
          required
        />
        <img src="/images/icon-error.svg" alt="" className="icon-error" />
      </div>
      <div className="form__input">
        <input
          value={email}
          onChange={handleEmail}
          type="email"
          name="email"
          id="email"
          className="input-field"
          placeholder="Email"
          ref={emailInput}
          required
        />
        <img src="/images/icon-error.svg" alt="" className="icon-error" />
      </div>
      <div className="form__input">
        <input
          value={password}
          onChange={handlePassword}
          type="password"
          name="password"
          id="password"
          className="input-field"
          placeholder="Password"
          ref={passwordInput}
          required
        />
        <img src="/images/icon-error.svg" alt="" className="icon-error" />
      </div>
      <button className="form__submit">Claim your free trial</button>
      <span className="disclaimer">
        By clicking the button, you are agreeing to our
        <a href="#" className="link-important">
          {` Terms and Services`}
        </a>
      </span>
    </form>
  );
}
