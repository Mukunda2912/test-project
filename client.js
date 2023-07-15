function makeCORSRequest() {
    const url = 'http://localhost:3000/data';

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log('Response:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  let counter = 1; // Initialize the counter

  function storeUsername() {
    const usernameInput = document.getElementById('username');
    const username = usernameInput.value;
    const key = `username_${counter}`; 
    counter++; 
    localStorage.setItem(key, username);
    console.log('Username stored in localStorage:', username);
    sessionStorage.setItem(key, username);
    console.log('Username stored in sessionStorage:', username);
  
  }

  function retrieveUsername() {
    const username = localStorage.getItem('username');
    if (username) {
      console.log('Retrieved Username:', username);
    } else {
      console.log('No username found in localStorage');
    }
  }

  function removeUsername() {
    localStorage.removeItem('username');
    console.log('Username removed from localStorage');
  }

  function clearLocalStorage() {
    localStorage.clear();
    console.log('localStorage cleared');
  }

