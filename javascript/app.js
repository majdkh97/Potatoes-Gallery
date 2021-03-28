var favPotato = prompt('Choose your potato!','Cute Potato,Angry Potato,Sad Potato');
console.log('the user choice is');
while(favPotato  !== 'Cute Potato' && favPotato !== 'Angry Potato' && favPotato !== 'Sad Potato'  )
{

    favPotato = prompt('please enter one of the following  Cute Potato , Angry Potato , Sad Potato ');
}
console.log(favPotato);
var PotatoesNum = prompt('How many Potatoes would you like to see?');
var image = ''; 
for(var i = 1 ; i <=PotatoesNum; i++ ){
    if(favPotato === 'Cute Potato'){
        image = image + '<img src="Potatoes/cute potato.png"/>';
    }else if(favPotato === 'Angry Potato'){
        image = image + '<img src="Potatoes/angry potato.jpg"/>';
    }
    else if(favPotato === 'Sad Potato'){
        image = image + '<img src="Potatoes/sad-potato.jpg"/>';
    }
}
console.log('the user chose the following number');
console.log(PotatoesNum);
document.write(image);