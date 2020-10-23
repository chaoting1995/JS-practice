let url = 'https://hexschool-tutorial.herokuapp.com/api/signup';

fetch(url, {
  method: 'POST',
  body: JSON.stringify({
    email: 'chaoting17@test.com',
    password: '1234567890'
  })
})
  .then((r) => {
    console.log(r);
    return r.json();
  }).then((o) => {
    console.log(o);

  }).catch((err) => {
    console.log('錯誤:', err);
  });