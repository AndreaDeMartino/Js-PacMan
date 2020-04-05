var phantomRose = document.getElementById('phantom-rose__lose');
var phantomRed = document.getElementById('phantom-red__lose');
var phantomGreen = document.getElementById('phantom-green__lose');
var gameScreen = document.getElementById('main-pack');
var packmanMove = document.getElementById('packman');
document.onkeydown = moving;


phantomRose.addEventListener('mouseover',
  function(){
    gameScreen.style.opacity = '0.5';
    gameScreen.style.pointerEvents = 'none'; 
    alert('Ops.... Hai perso!!!');

  }
  )

  phantomRed.addEventListener('mouseover',
  function(){

    gameScreen.style.opacity = '0.5';
    gameScreen.style.pointerEvents = 'none'; 
    alert('Ops.... Hai perso!!!');

  }
  )

  phantomGreen.addEventListener('mouseover',
  function(){

    gameScreen.style.opacity = '0.5';
    gameScreen.style.pointerEvents = 'none'; 
    alert('Ops.... Hai perso!!!');

  }
  )

  function moving(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        packmanMove.className = "pack-top";
    }
    else if (e.keyCode == '40') {
        // down arrow
        packmanMove.className = "pack-down";
         
    }
    else if (e.keyCode == '37') {
       // left arrow
    }
    else if (e.keyCode == '39') {
       // right arrow
       packmanMove.className = "pack-rx";
    }

}
