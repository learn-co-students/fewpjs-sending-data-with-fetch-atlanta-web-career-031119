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
        let elem=document.createElement('h1').innerHTML(data.id);
        document.appendChild(elem);
    })
    .catch(error => {
        let elem=document.createElement('h1').innerHTML(error.message);
        document.appendChild(elem);
    })
};