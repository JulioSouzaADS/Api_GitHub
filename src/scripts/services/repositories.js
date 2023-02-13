import {baseUrl, repositoriesQuantity} from '../variables.js'


//solicitar APi do gitHub juntamente com o repositorio de usuario
async function getRepositories(username){
    const response = await fetch(`${baseUrl}/${username}/repos?per_page=${repositoriesQuantity}`);
    return await response.json()
}


export {getRepositories}