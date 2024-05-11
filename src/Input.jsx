import { useState } from 'react';
import PropTypes from 'prop-types';

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
};

export default function Input({ type, name, placeholder, error }) {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <>
      <div className={`form__input ${error ? 'border-error' : ''}`}>
        <input
          value={value}
          onChange={handleChange}
          type={type}
          name={name}
          id={name}
          className="input-field"
          placeholder={placeholder}
          required
        />
        {error && (
          <img src="/images/icon-error.svg" alt="" className="icon-error" />
        )}
      </div>
      {error && <span className="error-message">{error}</span>}
    </>
  );
}
