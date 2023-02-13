import {baseUrl} from '/src/scripts/variables.js'


//solicitar APi do gitHub juntamente com o usuario
async function getUser(username){
    const response = await fetch(`${baseUrl}/${username}`);
    return await response.json()
}

export {getUser}