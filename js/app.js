// Part 1
document.querySelector('#main-title').textContent = "Welcome to the Cozy Cafe";

// Part 2
document.querySelector('body').style.backgroundColor = "bisque";

// Part 3
document.querySelector('p').textContent = "Life happens, coffee helps.";

// Part 4
document.querySelectorAll('.highlight-title').forEach(element => {
    element.style.fontStyle = "italic";
});

// Part 5
document.querySelector('ul').innerHTML += "<li>Rose Cake</li>";

// Part 6
document.querySelector('ul').innerHTML += "<li>Karak Tea</li>";


// Part 7
const newBlogPost = document.createElement('div');
newBlogPost.className = 'blog-post';
const newBlogPostTitle = document.createElement('h3');
document.querySelector('body').appendChild(newBlogPost);
newBlogPost.appendChild(newBlogPostTitle);
newBlogPostTitle.textContent = "Best Karak competition";
const newBlogPostParagraph = document.createElement('p');
newBlogPostParagraph.textContent = "Compete for the best karak tea award";
newBlogPost.appendChild(newBlogPostParagraph);

// I added this just for fun
const newBlogPostList = document.createElement('ul');
const rewardsObject = {
    firstPrize: "First prize: 500BD",
    secondPrize: "Second prize: 200BD",
    thirdPrize: "Third prize: 100BD"
}
for (const [key, value] of Object.entries(rewardsObject)) {
    const newBlogPostListItem = document.createElement('li');
    newBlogPostListItem.textContent = value;
    newBlogPostList.appendChild(newBlogPostListItem);
}
newBlogPost.appendChild(newBlogPostList);


//part 8
document.querySelector('ul').removeChild(document.querySelector('li:nth-child(3)'));