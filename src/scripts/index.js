import { getUser} from '/src/scripts/services/user.js'
import { getRepositories} from '/src/scripts/services/repositories.js'
import { getUserEvents } from '/src/scripts/services/events.js'
import { user } from '/src/scripts/objects/user.js'
import { screen } from '/src/scripts/objects/screen.js'


//pegando dados da pesquisa do usuario
document.getElementById('btn-search').addEventListener('click', ()=>{
    const username = document.getElementById('input-search').value
    if (validateEmptyInput(username)) return
    getUserData(username)

})

// funcao utilizada para pesquisar pela tecla enter
document.getElementById('input-search').addEventListener('keyup', (e)=>{
    const username = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyProssed = key === 13

    if(isEnterKeyProssed){
        if (validateEmptyInput(username)) return
        getUserData(username)
    }

})

function validateEmptyInput(userName) {
    if (userName.length === 0) {
        alert ('Preencha o campo com o nome do usuário do GitHub')
        return true
    }
}

async function getUserData(username) {
        const userResponse = await getUser(username)

        if(userResponse.message === "Not Found"){
            screen.renderNotFound()
            return
        }

        const repositoriesResponse = await getRepositories(username)
        const eventsResponse = await getUserEvents(username)

        user.setInfo(userResponse)
        user.setRepositories(repositoriesResponse)
        user.setEvents(eventsResponse)
        
        screen.renderUser(user)
}


