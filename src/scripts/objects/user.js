const user = {
    avatarUrl:'',
    name:'',
    bio:'' ,
    userName: '',
    followers:0 ,
    following:0 ,
    repositories : [],
    forks:0 ,
    language:'' ,
    star:0 ,
    watchers:0 ,
    stargazers_count:0,
    events : [],

    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url;
        this.name = gitHubUser.name;
        this.bio =gitHubUser.bio;
        this.userName = gitHubUser.login;
        this.followers = gitHubUser.followers;
        this.following = gitHubUser.following;      
     },

     setRepositories (repositories){
        this.repositories = repositories
             },

     setEvents (events){
         this.events = events

     }
   
}

export {user}