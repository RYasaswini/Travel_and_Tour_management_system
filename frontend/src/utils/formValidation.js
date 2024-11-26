// utils/formValidation.js

/**
 * Validate login form inputs.
 * @param {Object} data - The login form data.
 * @returns {Object} Errors object. Empty if no errors.
 */
export const validateLogin = (data) => {
    const errors = {};
  
    // Email validation: must contain only lowercase letters and follow email format
    if (!data.email) {
      errors.email = 'Email is required';
    } else if (!/^[a-z]+@[a-z]+\.[a-z]{2,}$/.test(data.email)) {
      errors.email = 'Email must contain only lowercase letters and follow proper format';
    }
  
    // Password validation: one special character, one uppercase letter, one lowercase letter, one number, minimum 6 characters
    if (!data.password) {
      errors.password = 'Password is required';
    } else if (
      !/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}/.test(data.password)
    ) {
      errors.password =
        'Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 6 characters long';
    }
  
    return errors;
  };
  
  /**
   * Validate register form inputs.
   * @param {Object} data - The register form data.
   * @returns {Object} Errors object. Empty if no errors.
   */
  export const validateRegister = (data) => {
    const errors = {};
  
    // Username validation: only uppercase and lowercase letters
    if (!data.userName) {
      errors.userName = 'Username is required';
    } else if (!/^[a-zA-Z]+$/.test(data.username)) {
      errors.userName = 'Username must contain only uppercase and lowercase letters';
    }
  
    // Email validation: must contain only lowercase letters and follow email format
    if (!data.email) {
      errors.email = 'Email is required';
    } else if (!/^[a-z]+@[a-z]+\.[a-z]{2,}$/.test(data.email)) {
      errors.email = 'Email must contain only lowercase letters and follow proper format';
    }
  
    // Password validation: one special character, one uppercase letter, one lowercase letter, one number, minimum 6 characters
    if (!data.password) {
      errors.password = 'Password is required';
    } else if (
      !/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}/.test(data.password)
    ) {
      errors.password =
        'Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 6 characters long';
    }
  
    return errors;
  };
  