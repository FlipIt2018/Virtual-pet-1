var dog,dogImg, happyDog,happyDogImg, database, foodS, foodStock;
var database;

function preload()
{
  dogImg = loadImage("images/dogImg.png")
  happyDogImg = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(1000,500);
  dog = createSprite(2500,1000,50,50);
database = firebase.database();

foodStock = database.ref('Food');
foodStock.on("value",readStock);
}


function draw() {  



dog.addImage(dogImg);
scale(0.2);

background(46, 139, 87);



if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(happyDogImg)
}




  drawSprites();
  fill(255,255,255);
  stroke("black");
  textSize(200);
  text("Food Remaining"  +foodS,2400,1550);
  text("Press the Up Arrow key to feed Jimmy milk",1000,1750);
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<= 0){
    x = 0
  }

else{
  x = x-1
}
    database.ref("/").update({
    Food:x
  })
}


