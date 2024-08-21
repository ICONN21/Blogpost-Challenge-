// document.querySelector('#comment-form').addEventListener('submit', async (event) => {
//     event.preventDefault();

//     const commentText = document.querySelector('#comment-text').value.trim();
//     const postId = document.querySelector('#comment-form').getAttribute('data-post-id');

//     if (commentText) {
//         const response = await fetch('/api/comments', {
//             method: 'POST',
//             body: JSON.stringify({
//                 comment_text: commentText,
//                 post_id: postId,
//             }),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });

//         if (response.ok) {
//             // Reload the page to display the new comment
//             document.location.reload();
//         } else {
//             alert('Failed to post comment');
//         }
//     }
// });
document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.querySelector('#comment-form');
  
    if (commentForm) {
      commentForm.addEventListener('submit', async (event) => {
        event.preventDefault();
  
        const commentText = document.querySelector('#comment-text').value.trim();
        const postId = document.querySelector('#comment-form').getAttribute('data-post-id');
  
        if (commentText) {
          const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
              comment_text: commentText,
              post_id: postId,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
  
          if (response.ok) {
            // Reload the page to display the new comment
            document.location.reload();
          } else {
            alert('Failed to post comment');
          }
        }
      });
    }
  });
  