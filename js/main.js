function render() {
  let container = document.querySelector("#dogs_photo");
  container.innerHTML = "";
  fetch(`https://dog.ceo/api/breeds/image/random/${3}`)
    .then(result => result.json())
    .then(data =>
      data.message.forEach(item => {
        container.innerHTML += `
        <div class="card m-5" style="width: 18rem;">
          <img src="${item}" class="card-img-top" width="300" height="300">
          <div class="card-body">
            <p class="card-text">woof</p>
          </div>
        </div>`;
      })
    );
}
render();

let upload = document.querySelector("#upload_btn");
upload.addEventListener("click", render);

let cookie_btn = document.querySelector("#cookie");
let cookie_div = document.querySelector("#clicker");

let count = 0;

cookie_btn.addEventListener("click", () => {
  (count += 1), (cookie_div.innerText = count);
});
