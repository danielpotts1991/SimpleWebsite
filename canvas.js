
//initialize canvas


var canvas = document.querySelector('canvas'); 

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



//event listener code

var mouse  = {
    x: undefined,
    y:undefined
}

var maxRadius = 40; 
var minRadius = 2;
var colorArray = [
    '#9e2b09',
    '#5b0ac0',
    '#adfc79',
    '#f263c6',
    '#21eba1',
    '#85f8f6'

];

//event listenter Resize

window.addEventListener('resize', 
    function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init()

})

window.addEventListener('mousemove',
    function(event) {
    mouse.x = event.x;
    mouse.y = event.y;   
    console.log(mouse);
    })

//code for circles

var c = canvas.getContext('2d');

function Circle(x, y, dx, dy, radius, color) {
    this.x = x; 
    this.y = y; 
    this.dx = dx; 
    this.dy = dy; 
    this.radius = radius; 
    this.minRadius = radius; 
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false); 
        c.fillStyle = this.color;
        c.fill();

    }

    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy; 
        }

        this.x += this.dx; 
        this.y += this.dy; 

        //interactivity
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50
            && mouse.y - this.y < 50 && mouse.y - this.y > -50
            ) {
            if (this.radius < maxRadius) {
                this.radius += 1;
            }


        } else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }

        this.draw();
    }
}


//initizlizes variables x dx y dy and initializes every time screen changes

var circleArray = [];

function init() {

    circleArray = []; 
    
    for (let i = 0; i < 1000; i++) {
        var x = Math.random()*(innerWidth - radius * 2) + radius;
        var y = Math.random()*(innerHeight - radius * 2) + radius;
        var dx = (Math.random()-.5)*3;
        var dy = (Math.random()-.5)*3;
        var radius = Math.floor(Math.random() * 3 + 1); 
        circleArray.push(new Circle(x, y, dx, dy, radius)); 
    
        
    }

}



function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);

    for (let i = 0; i < circleArray.length; i++) {

    circleArray[i].update();

        
    }


}

animate();
init();













