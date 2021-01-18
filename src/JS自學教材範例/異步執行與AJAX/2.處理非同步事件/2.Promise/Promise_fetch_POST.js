// eslint-disable-next-line no-unused-vars
function sendDataToSever() {
  const currentData = {
    email: document.form1.email.value,
    password: document.form1.password.value,
  };
  const url = 'http://...';
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(currentData),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  })
    .then((r) => r.json())
    .then((o) => console.log(o));
}
