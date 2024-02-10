var scalar = 2;
var unicorn = confetti.shapeFromText({ text: '💕', scalar });

var defaults = {
  spread: 360,
  ticks: 300, //time
  gravity: 0.2,
  decay: 0.96,
  startVelocity: 20,
  shapes: [unicorn],
  scalar
};

function shoot() {
  confetti({
    ...defaults,
    particleCount: 30
  });

  confetti({
    ...defaults,
    particleCount: 5,
    flat: true
  });

  confetti({
    ...defaults,
    particleCount: 15,
    scalar: scalar / 2,
    shapes: ['circle']
  });
}

$(window).on( 'load', function(){
    setTimeout(shoot, 1300);
    setTimeout(shoot, 1500);
    setTimeout(shoot, 1700);
});