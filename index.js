// Add your code here
function submitData(name, email) {
    let postObj = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify({'name': name, 'email': email})
    };
    return fetch('http://localhost:3000/users', postObj)
    .then(resp => resp.json())
    .then(data => {
        document.body.innerHTML= data.id;
    })
    .catch(error => {
        document.body.innerHTML= error.message;
    })
};