const jokeEle = document.getElementById("joke");
const jokebtn = document.querySelector(".btn");

const createJoke = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.chucknorris.io/jokes/random");

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText);
      jokeEle.innerHTML = `${data.value}`;
    }
  };
  xhr.send();
};

jokebtn.addEventListener("click", createJoke);
