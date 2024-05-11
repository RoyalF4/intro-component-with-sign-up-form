import { useState, useRef } from 'react';
import Input from './Input';

export default function Form() {
  const [error, setError] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const formRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    const inputs = [
      formRef.current.querySelector('#firstName'),
      formRef.current.querySelector('#lastName'),
      formRef.current.querySelector('#email'),
      formRef.current.querySelector('#password'),
    ];

    inputs.forEach((input) => {
      let errorString = '';

      if (input.validity.valueMissing) {
        errorString = `${input.placeholder} cannon be empty`;
      } else if (input.name === 'email' && input.validity.typeMismatch) {
        errorString = `Must be a valid email`;
      } else if (input.name === 'password' && input.value.length < 8) {
        errorString = 'Must be at least 8 characters long';
      }

      setError((error) => {
        return { ...error, [input.name]: errorString };
      });
    });
  }

  return (
    <form
      ref={formRef}
      className="main__form"
      noValidate
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        name="firstName"
        placeholder="First Name"
        error={error.firstName}
      />
      <Input
        type="text"
        name="lastName"
        placeholder="Last Name"
        error={error.lastName}
      />
      <Input
        type="email"
        name="email"
        placeholder="Email"
        error={error.email}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        error={error.password}
      />
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
