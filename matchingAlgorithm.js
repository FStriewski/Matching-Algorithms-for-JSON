
// Sample Data
const users = [
 {
    username: "User0",
    preferences : [
        { breed: "Schnauzer", votes: 3 },
        { breed: "Bloodhound", votes: 3},
        { breed: "Greyhound", votes: 3}
    ]
},{
  username: "User1",
  preferences :[
      { breed: "Akita", votes: 1, perc: 12 },
      { breed: "Bloodhound", votes: 1, perc:55},
      { breed: "Greyhound", votes: 4, perc: 9}
    ]
},{
  username: "User2",
  preferences : [
      { breed: "Akita", votes: 1, perc: 12 },
      { breed: "Bloodhound", votes: 1, perc:55},
      { breed: "Greyhound", votes: 4, perc: 9}
    ]
  }
]

// Matching Algoritm

function compareUsers(ourUser, otherUser){
    if (ourUser !== otherUser){

      let sumDogs = function (){
        return ourUser.preferences.reduce((sum, breed) =>
           sum + breed.votes , 0)
      }();

      function perc(vote){
        let percentage = Math.floor((vote / sumDogs ) * 100)
        return percentage
      }

      let whichDogs = ourUser.preferences
                    .map(x => otherUser.preferences.filter(y => y.breed == x.breed))
                    .reduce((a,b) => a.concat(b))
                    .map(x => x.breed)

      let likescore = ourUser.preferences
                      .filter(x => whichDogs.indexOf(x.breed) >= 0 )
                    //  .map(x => perc(x.votes))
                      .reduce((sum, x) =>  {return sum + perc(x.votes)},0 )
      let result = []
      result.push(likescore)
      result.push(ourUser.username)
      return result
  }
}

compareUsers(users[0], users[1])
