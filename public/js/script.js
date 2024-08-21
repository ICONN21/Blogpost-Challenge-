// // Handle Logout
// const logout = async () => {
//     const response = await fetch('/api/users/logout', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//     });
  
//     if (response.ok) {
//       document.location.replace('/');
//     } else {
//       alert('Failed to log out.');
//     }
//   };
  
//   // Attach event listener to the logout link/button
//   document.querySelector('#logout').addEventListener('click', logout);

  
//   // Show new post form when button is clicked
// document.querySelector('#new-post').addEventListener('click', () => {
//     document.querySelector('#post-form').style.display = 'block';
//   });
document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.querySelector('#logout');
  
    if (logoutButton) {
      logoutButton.addEventListener('click', async () => {
        const response = await fetch('/api/users/logout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert('Failed to log out.');
        }
      });
    }
  
    const newPostButton = document.querySelector('#new-post');
    if (newPostButton) {
      newPostButton.addEventListener('click', () => {
        document.querySelector('#post-form').style.display = 'block';
      });
    }
  });
  