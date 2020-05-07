const users = [];

//join user to chat
function userJoin(id, username, room){
    const user = {id, username, room};

    users.push(user);

    return user;
}
//get current user
function getCurrentUser(id){
    return users.find(user => user.id === id);
}

//user leave chat
function userLeave(id){
    const quitter = users.findIndex(user => user.id === id);

    if(quitter !== -1){
        return users.splice(quitter, 1)[0];
    }
}
//get room users
function getRoomUsers(room)
{
    return users.filter(user => user.room === room);
}

module.exports = {
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers
};


