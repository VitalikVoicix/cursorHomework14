const playSound = (path) => {
    let sound= new Audio();
     sound.preload = 'auto';
     sound.src = path;
     sound.play();
 };

export{playSound};

