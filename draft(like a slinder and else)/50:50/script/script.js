let counter = 0; // declared in global scope
document.querySelector('button').addEventListener('click', function () {
   counter++; // increment this instead of rand int so it's 0,1,2 etc
   buildimg = `TG-img-${counter}.jpg`;
   document.querySelector('#imageID').setAttribute('src', buildimg);
   document.querySelector('div').innerHTML = buildimg;
});