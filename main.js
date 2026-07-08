import {tweetsData} from './data.js'

const tweetBtn = document.getElementById("tweet-btn");
const tweetInput = document.getElementById("tweet-input");

tweetBtn.addEventListener("click", function() {
    console.log(tweetInput.value)
    getFeedHtml()
})

function getFeedHtml() {

    let feedHtml = ``

    tweetsData.forEach(tweet =>  {
        feedHtml += `
            <div class="tweet">
            <div class="tweet-inner">
                <img src="${tweet.profilePic}" class="profile-pic">
                <div>
                    <p class="handle">${tweet.handle}</p>
                    <p class="tweet-text">${tweet.tweetText}</p>
                    <div class="tweet-details">
                        <span class="tweet-detail">
                            ${tweet.replies.length}
                            <i class="fa-regular fa-comment-dots" data-replay="${tweet.uuid}"></i>
                        </span>
                        <span class="tweet-detail">
                        <i class="fa-solid fa-heart" data-likes="${tweet.uuid}"></i>
                            ${tweet.likes}
                        </span>
                        <span class="tweet-detail">
                            <i class="fa-solid fa-retweetj" data-retweets="${tweet.uuid}"></i>
                            ${tweet.retweets}
                        </span>
                    </div>   
                </div>            
            </div>
    </div>
        `
    })
    return feedHtml
}

function render() {
    document.getElementById("feed").innerHTML = getFeedHtml();
}

render()
