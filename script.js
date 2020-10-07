//paralax hero
var scene = document.getElementById('posterParallax');
var parallax = new Parallax(scene, {
    selector: '.layer'
});

//paralax webdesign
var scene = document.getElementById('designParallax');
var parallax = new Parallax(scene, {
    selector: '.layer'
});

//paralax model 3d
var scene = document.getElementById('modelParallax');
var parallax = new Parallax(scene, {
    selector: '.layer'
});

//paralax intégration
var scene = document.getElementById('devParallax');
var parallax = new Parallax(scene, {
    selector: '.layer'
});


//lottie
LottieInteractivity.create({
    player: '#mouseMove',
    mode: 'cursor',
    actions: [{
        position: {
            x: [0, 1],
            y: [0, 1]
        },
        type: 'seek',
        frames: [-100, 250],
    }, ],
});


LottieInteractivity.create({
    mode: "scroll",
    player: '#lotscroll',
    actions: [{
        visibility: [0, 1],
        type: "seek",
        frames: [-50, 250],
    }, ]
});