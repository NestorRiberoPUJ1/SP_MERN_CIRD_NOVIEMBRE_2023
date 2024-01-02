var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("https://dog.ceo/api/breed/hound/afghan/images/random", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));