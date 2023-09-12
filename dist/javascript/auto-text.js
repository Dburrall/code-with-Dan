var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('HTML')
    .pauseFor(500)
    .deleteAll()
    .typeString('CSS')
    .pauseFor(500)
    .deleteAll()
    .typeString('Javascript')
    .pauseFor(500)
    .deleteAll()
    .typeString('or React')
    .pauseFor(2000)
    .start();