let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Bill_Belichick.jpg') {
      myImage.setAttribute ('src','images/Bill_Thumbs_Up.jpg');
    } else {
      myImage.setAttribute ('src','images/Bill_Belichick.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Enter your name here to become part of the Belichick Fan Club:');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Bill is the coolest ' + myName;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Bill is the coolest ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }
