// Packman Move

var packImg = $('#packman');
console.log('Start position', packImg.position());

document.onkeydown = moving;
function moving(e) {
  
  e = e || window.event;

  if (e.keyCode == '38') {
      // up arrow
      packImg.animate({ top: "-=50px" }, 500 ).css('transform',
      'rotate(-90deg)')
      console.log(packImg.position());
      
  }
  else if (e.keyCode == '40') {
      // down arrow
      packImg.animate({ top: "+=53px" }, 500 ).css('transform',
      'rotate(90deg)');
      console.log(packImg.position());
        
  }
  else if (e.keyCode == '37') {
      // left arrow
      packImg.animate({ left: "-=100px" }, 500 ).css('transform',
      'scale(-1, 1)');
      console.log(packImg.position());
  }
  else if (e.keyCode == '39') {
      // right arrow
      packImg.animate({ left: "+=100px" }, 500 ).css('transform',
      'rotate(0deg)');
      console.log(packImg.position());   
  }
}

// Phantoms
var phantomRose = $('.phantom-rose');
var phantomRed = $('.phantom-red');
var phantomGreen = $('.phantom-green');

setInterval(function(){ 
  if(collision(packImg,phantomRose) || collision(packImg,phantomRed) || collision(packImg,phantomGreen)){
    $('#main-pack').hide(500);
    $('.lose').fadeIn(4000);  
  };
  
}, 30);
  

function collision($div1, $div2) {
  var x1 = $div1.offset().left;
  var y1 = $div1.offset().top;
  var h1 = $div1.outerHeight(true);
  var w1 = $div1.outerWidth(true);
  var b1 = y1 + h1;
  var r1 = x1 + w1;
  var x2 = $div2.offset().left;
  var y2 = $div2.offset().top;
  var h2 = $div2.outerHeight(true);
  var w2 = $div2.outerWidth(true);
  var b2 = y2 + h2;
  var r2 = x2 + w2;

  if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
  return true;
  
}