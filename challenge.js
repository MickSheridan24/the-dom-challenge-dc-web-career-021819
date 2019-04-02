const counter = document.getElementById("counter");

setInterval(() => {
  if (!pausedTimer) {
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
  }
}, 1000);

const pause = document.getElementById("pause");
let pausedTimer = false;

pause.addEventListener("click", e => {
  pausedTimer = !pausedTimer;
  pausedTimer ? (pause.innerHTML = "resume") : (pause.innerHTML = "pause");
  //  e.preventDefault();
});

const plus = document.getElementById("+");
const minus = document.getElementById("-");

plus.addEventListener("click", e => {
  if (!pausedTimer) {
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
  }
});

const likesObj = {};

minus.addEventListener("click", e => {
  if (!pausedTimer) {
    counter.innerHTML = parseInt(counter.innerHTML) - 1;
  }
});

const heart = document.getElementById("<3");
const likes = document.getElementsByClassName("likes")[0];

heart.addEventListener("click", e => {
  const moment = counter.innerHTML;

  if (!pausedTimer) {
    if (!!likesObj[moment]) {
      likesObj[moment] += 1;
    } else {
      likesObj[moment] = 1;
    }
    let li = document.getElementById(`like${moment}`);

    if (!li) {
      li = document.createElement("li");
      li.setAttribute("id", `like${moment}`);
      likes.append(li);
    }
    li.innerHTML =
      `${moment} has been liked ${likesObj[moment]} time` +
      (likesObj[moment] > 1 ? "s" : "");
  }
});

const comments = document.getElementById("list");
const formSubmit = document.getElementById("submit");
const comment = document.querySelector("input");

formSubmit.addEventListener("click", e => {
  let p = document.createElement("p");
  p.innerHTML = comment.value;
  comments.append(p);
  e.preventDefault();
});
