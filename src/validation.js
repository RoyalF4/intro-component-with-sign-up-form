export default function validation(first, last, email, password) {
  let errors = {};

  if (first.validity.valueMissing) {
    errors.first = 'First Name cannot be empty';
  }

  return errors;
}
