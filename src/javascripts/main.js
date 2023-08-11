//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

let comments = []

function getComments(){
    if(localStorage.getItem('comments') && localStorage.getItem("comments") != '[]') {
        return JSON.parse(localStorage.getItem('comments'))
    }else{
        return comments
    }
}

function deleteComment()
{
    let comments = getComments()
    comments.splice(-1)
    localStorage.setItem('comments', JSON.stringify(comments))
    displayComments()
}

function addComment(event){
    event.preventDefault()

    let screenName = document.querySelector("#screen").value
    let comment = document.querySelector("#comment").value
    let location = document.querySelector("#location").value


    let comments = getComments()
    if(screenName && comment){
        let add = { screen: screenName, comment: comment, location: location, timestamp: new Date(Date.now()).toString()}
        comments.push(add)
        localStorage.setItem('comments', JSON.stringify(comments))
    }
            

    displayComments()
}

function displayComments(){
    let comments = getComments()
    let html = ''
    let ndx = 0
    for(let c of comments){


        html += `
        <div class="col mb-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${c.screen}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${c.location}</h6>
                    <p class="card-text">${c.timestamp}</p>
                    <p class="card-text">${c.comment}</p>
                </div>
            </div>
        </div>
        `
        ndx++
    }

    document.querySelector("#comments").innerHTML = html 

}

document.querySelector("#submit").onclick = addComment
document.querySelector("#delete").onclick = deleteComment
displayComments();
