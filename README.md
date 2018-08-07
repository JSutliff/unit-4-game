<!-- Put the name of the project after the # -->
<!-- the # means h1  -->
# Magic Crystal Game (Recomended assignment)

<!-- Put a description of what the project is -->
Combining HTML and jQuery to build a DOM based game. This game combines several 
concepts from previous projects in my portfolio. The computer generates a random 
number that is compared to the score of the user. The user's score is generated 
clicking four crystals that reveal hidden values upon each click.  

# Link to deployed site
<!-- make a link to the deployed site --> 
<!-- [What the user will see](the link to the deployed site) -->
[Psychic-Game](https://jsutliff.github.io/unit-4-game/)

# Images
<!-- take a picture of the image and add it into the readme  -->
<!-- ![image title](path or link to image) -->
[screen shot of completed assignment](assets/images/screenShot.png)


<img src="assets/images/crystalScreenShot.jpeg">
# technology used
<!-- make a list of technology used -->
<!-- what you used for this web app, like html css -->
- HTML5
- jQuery
- CSS3

<!-- 
1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item. 
-->


# code snippets
<!-- put snippets of code inside ``` ``` so it will look like code -->
<!-- if you want to put blockquotes use a > -->

```javascript
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function initializeGame() {
compScore = getRandomArbitrary(19, 120);
userScore = 0;
crystal1 = getRandomArbitrary(1, 12);
$('#crystal-1').attr('value', crystal1);
crystal2 = getRandomArbitrary(1, 12);
$('#crystal-2').attr('value', crystal2);
crystal3 = getRandomArbitrary(1, 12);
$('#crystal-3').attr('value', crystal3);
crystal4 = getRandomArbitrary(1, 12);
$('#crystal-4').attr('value', crystal4);
}

function updateDom() {
  $('#compScore').text(compScore);
  $('#userScore').text(userScore);
  $('#wins').text(wins);
  $('#losses').text(losses);
}

initializeGame();
updateDom();
```


# Learning points
<!-- Learning points where you would write what you thought was helpful -->
This was a fun and challenging assignment that helped further my understanding of 
click events. Combining HTML5 and jQuery I was able to construct an interactive 
game that users can play by clicking items on the screen. I implented modular 
functions and modern jQuery methods to leverage javaScript in ways that I have not
used before. This was a great learning experience! 

# Author 
<!-- make a link to the deployed site and have your name as the link -->
[Jason P. Sutliff](https://jsutliff.github.io/Basic-Portfolio/)