const fetch = require('node-fetch');

function checkPostcode(postcode) {
  if(valid_postcode(postcode))
    console.log('')
};

function valid_postcode(postcode) {
    const regex = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;
    return regex.test(postcode);
}

fetch(`https://`, {
  headers: {
    'Authorization': ''
  }
})
.then(checkStatus)
.then(response => response.json())
.then(data => {
  console.log(JSON.stringify(data));
})
.catch((error) => {
  console.log('There was an error', error);
});


function checkStatus(response) {
  if (response.ok) {
    return response;
  }

  let error = new Error(response.statusText);
  error.response = response;
  return Promise.reject(error);
}

