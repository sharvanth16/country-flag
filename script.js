var res = fetch("https://restcountries.com/v2/all");
res.then((data) => data.json()).then((data1) => {
  for (var i = 0; i < data1.length; i++) {
    console.log(data1[i].name);
    var div = document.createElement("div");
    div.innerHTML = `
      <div class="card" style="width: 18rem;">
        <img src="${data1[i].flag}" class="card-img-top" alt="Flag of ${data1[i].name}">
        <div class="card-body">
          <h5 class="card-title">Country Name</h5>
          <h6 class="card-subtitle mb-2 text-muted">${data1[i].name}</h6>
          <p class="card-text">
            <span style="color: black">${data1[i].region}</span><br>
            <span style="color: black">${data1[i].subregion}</span>
          </p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div> 
    `;

    document.body.append(div);
  }
});

