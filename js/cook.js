var canvasContainer = document.getElementById('drawing-area');
var foodButtons = document.getElementsByClassName('recipeselect');
for (var i = 0; i < foodButtons.length; i++){
    foodButtons[i].addEventListener('click', selectRecipe);
}

//selecting random arrow for user to input

function numbercount(){
    var number = 0;
    while (number < 4){
        number = number + 1
        console.log(number)
        random_arrow();
    }
}

function random_arrow(){
    var arrows = Math.floor((Math.random() * 4) + 1); // 1 = up arrow, 2 = down arrow, 3 = left arrow, 4 = right arrow
    if (arrows == '1'){
        console.log('up arrow')
        if (upArrow == true)
            numbercount();
    }
    if (arrows == '2'){
        console.log('down arrow')
        if (downArrow == true)
            numbercount();
    }
    if (arrows == '3'){
        console.log('left arrow')
        if (leftArrow == true)
            numbercount();
    }
    if (arrows == '4'){
        console.log('right arrow')
        if (rightArrow == true)
            numbercount();
    }
}


//key listeners
var arrow = {}
arrowInput();
arrow.keyCodes(40, 38, 37, 39, 32);//
addInputListeners();

function addInputListeners(){
    window.addEventListener("keyup", keyUpHandler);
    window.addEventListener("keydown", keyDownHandler);
}

function keyDownHandler(event){
    if (event.keyCode == arrow.leftKey){
        arrow.leftArrow = true
        //left arrow
    }
    if (event.keyCode == arrow.rightKey){
        arrow.rightArrow = true

        //right arrow
    }
    if (event.keyCode == arrow.upKey){
        arrow.upArrow = true
        //up arrow
    }
    if (event.keyCode == arrow.downKey){
        arrow.downArrow = true
        //down arrow
    }
    if (event.keyCode == arrow.spaceKey){
        arrow.spaceBar = true
        random_arrow();
    }
}

function keyUpHandler(event){
    if (event.keyCode == arrow.leftKey){
        arrow.leftArrow = false
        //left arrow
    }
    if (event.keyCode == arrow.rightKey){
        arrow.rightArrow = false
        //right arrow
    }
    if (event.keyCode == arrow.upKey){
        arrow.upArrow = false
        //up arrow
    }
    if (event.keyCode == arrow.downKey){
        arrow.downArrow = false
        //down arrow
    }
    if (event.keyCode == arrow.spaceKey){
        arrow.spaceBar = false
    }

}

function arrowInput(){
    arrow.keyCodes = function(D, U, L, R, S){
        this.leftKey = L;
        this.rightKey = R;
        this.upKey = U;
        this.downKey = D;
        this.spaceKey = S;
    }
}

//smoothie stuff - smoothie hud

function selectRecipe(event){
    console.log(event);
    food = event.target.parentElement.dataset.food;
    cooking(food)
}

function cooking(food){
    switch(food){
        case 'smoothie':
            console.log('smoothie clicked');
            break;
        case 'steak':
            console.log('steak clicked');
            break;
        case 'pie':
            console.log('pie clicked');
            break;
    }
        
}
