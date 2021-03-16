fetch('http://localhost:3000/try-uuid')
  .then((r) => r.json())
  .then((obj) => {
    document.querySelector('#info').innerHTML = JSON.stringify(obj);
  });
//--------------------------------------------------------//

fetch('http://localhost:3000/try-session', {
  credentials: 'include',
})
  .then((r) => r.json())
  .then((obj) => {
    document.querySelector('#info').innerHTML = JSON.stringify(obj);
  });
