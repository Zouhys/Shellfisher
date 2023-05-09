const cup1 = document.getElementsByClassName("cup1")[0];
const cup2 = document.getElementsByClassName("cup2")[0];
const cup3 = document.getElementsByClassName("cup3")[0];

const cup = document.getElementsByClassName("cup");
const howmuch = document.getElementById("howmuch");
const again = document.getElementById("again");
const marbleChild = document.getElementById("marblechild");
const marbleChild2 = document.getElementById("marblechild2")
const marbleChild3 = document.getElementById("marblechild3")

/*function marble(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }*/

let marble = Math.floor(Math.random() * (3 - 1 + 1) ) + 1;


cup1.onclick = () => {
    console.log(marble)

    if (marble == 1) {
        howmuch.innerHTML = "Vyhrál jsi";
        marbleChild.style.opacity = 1;
    }
    if (marble == 2) {
        howmuch.innerHTML = "Prohrál jsi";
    }
    if (marble == 3) {
        howmuch.innerHTML = "Prohrál jsi";
    }
}

cup2.onclick = () => {
    console.log(marble)
    
    if (marble == 1) {
        howmuch.innerHTML = "Prohrál jsi";
    }
    if (marble == 2) {
        howmuch.innerHTML = "Vyhrál jsi";
        marbleChild2.style.opacity = 1;
    }
    if (marble == 3) {
        howmuch.innerHTML = "Prohrál jsi";
    }
}

cup3.onclick = () => {
    console.log(marble)
    
    if (marble == 1) {
        howmuch.innerHTML = "Prohrál jsi";
    }
    if (marble == 2) {
        howmuch.innerHTML = "Prohrál jsi";
    }
    if (marble == 3) {
        howmuch.innerHTML = "Vyhrál jsi";
        marbleChild3.style.opacity = 3;
    }
}

again.onclick = () => {
    window.location.reload();
}

document.getElementById("cupup").addEventListener('click', () => {
    const element = document.getElementById("cupup");
    element.animate(
      [
        { transform: 'translateY(0px)' },
        { transform: 'translateY(-75px)' }
      ],
      {
        duration: 750,
        iterations: 1
      }
    );
  });

  document.getElementById("cupup2").addEventListener('click', () => {
    const element = document.getElementById("cupup2");
    element.animate(
      [
        { transform: 'translateY(0px)' },
        { transform: 'translateY(-75px)' }
      ],
      {
        duration: 750,
        iterations: 1
      }
    );
  });

  document.getElementById("cupup3").addEventListener('click', () => {
    const element = document.getElementById("cupup3");
    element.animate(
      [
        { transform: 'translateY(0px)' },
        { transform: 'translateY(-75px)' }
      ],
      {
        duration: 750,
        iterations: 1
      }
    );
  });