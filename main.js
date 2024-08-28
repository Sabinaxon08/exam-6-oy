let input = document.querySelector("input");

fetch("https://raw.githubusercontent.com/diyor011/apibest/master/api.json")
  .then((res) => res.json())
  .then((json) => {
    console.log(json);
    input.addEventListener("input", (e) => {
      let filter = json.filter((item) => item.name.includes(e.target.value));
      updateWrapper(filter);
    });
    updateWrapper(json);
  });

function updateWrapper(data) {
  wrapper.innerHTML = "";
  data.map((item) => {
    let div = document.createElement("div");
    div.className =
      "card bg-base-300 min-w-64 shadow-xl flex-1 shadow-cyan-600  flexjustify-center";
    div.innerHTML = `
              <img
                src="${item.pic}"
                alt="Airdopes" class="size-64 mx-auto"/>
            <div class="card-body">
              <h2 class="card-title inline">
              ${item.name}!</h2>
              <p class="text-accent text-2xl inline">$${item.price}</p>
              <p class="text-xs" >${item.fulldesc}</p>
          </div>
     `;
    wrapper.append(div);
  });
}
