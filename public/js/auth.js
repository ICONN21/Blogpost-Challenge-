// // Handle Signup
// const signupFormHandler = async (event) => {
//     event.preventDefault();
  
//     const username = document.querySelector('#username-signup').value.trim();
//     const password = document.querySelector('#password-signup').value.trim();
  
//     if (username && password) {
//       const response = await fetch('/api/users/signup', {
//         method: 'POST',
//         body: JSON.stringify({ username, password }),
//         headers: { 'Content-Type': 'application/json' },
//       });
  
//       if (response.ok) {
//         document.location.replace('/dashboard'); // Redirect to dashboard after successful signup
//       } else {
//         alert('Failed to sign up.');
//       }
//     }
//   };
  
//   // Handle Login
//   const loginFormHandler = async (event) => {
//     event.preventDefault();
  
//     const username = document.querySelector('#username-login').value.trim();
//     const password = document.querySelector('#password-login').value.trim();
  
//     if (username && password) {
//       const response = await fetch('/api/users/login', {
//         method: 'POST',
//         body: JSON.stringify({ username, password }),
//         headers: { 'Content-Type': 'application/json' },
//       });
  
//       if (response.ok) {
//         document.location.replace('/dashboard'); // Redirect to dashboard after successful login
//       } else {
//         alert('Failed to log in.');
//       }
//     }
//   };
  
//   // Attach event listeners to forms
//   document
//     .querySelector('#signup-form')
//     .addEventListener('submit', signupFormHandler);
  
//   document
//     .querySelector('#login-form')
//     .addEventListener('submit', loginFormHandler);

document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.querySelector('#signup-form');
    const loginForm = document.querySelector('#login-form');
  
    if (signupForm) {
      signupForm.addEventListener('submit', async (event) => {
        event.preventDefault();
  
        const username = document.querySelector('#username-signup').value.trim();
        const password = document.querySelector('#password-signup').value.trim();
  
        if (username && password) {
          const response = await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
          });
  
          if (response.ok) {
            document.location.replace('/dashboard'); // Redirect to dashboard after successful signup
          } else {
            alert('Failed to sign up.');
          }
        }
      });
    }
  
    if (loginForm) {
      loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
  
        const username = document.querySelector('#username-login').value.trim();
        const password = document.querySelector('#password-login').value.trim();
  
        if (username && password) {
          const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
          });
  
          if (response.ok) {
            document.location.replace('/dashboard'); // Redirect to dashboard after successful login
          } else {
            alert('Failed to log in.');
          }
        }
      });
    }
  });
  