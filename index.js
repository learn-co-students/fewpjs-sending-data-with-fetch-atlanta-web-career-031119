// Add your code here
function submitData(name, email) {
    let postObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({'name': name, 'email': email})
    };
    return fetch('http://localhost:3000/users', postObj)
    .then(resp => resp.json())
    .then(data => document.appendChild(<h1>${data.id}</h1>))
    .catch(error => document.appendChild(<h1>${error.message}</h1>))
};