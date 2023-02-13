import {baseUrl, repositoriesQuantity} from '/src/scripts/variables.js'


async function getUserEvents(username){
    const response = await fetch(`${baseUrl}/${username}/events?per_page=${repositoriesQuantity}`);
    return await response.json()
    
}
export { getUserEvents }




