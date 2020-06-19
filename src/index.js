const axios = require('axios');

const PI = 3.1415;

const greet = name => 'Hello '+ name;

const users = async () => {
    const res =await axios.get('https://jsonplaceholder.typicode.com/users?_limit=2')
    //console.log(res)
    return res.data;
}
//users().then(res => console.log(res)); //promesa equivalente al async await

module.exports = {
    users,
    greet,
    PI
}