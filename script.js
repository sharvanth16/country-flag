var res = fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json()).then((data1)=>{
    for(var i=0; i<data1.length; i++){
        console.log(data1[i].name);
        var div = document.createElement("div");
        div.innerHTML= `<div class="card" style="width: 18rem;">
        <img src= 
        <div class="card-body">
          <img src=${data1[i].flag} class="card-img-top" alt="...">
          <h5 class="card-title">Country Name</h5>
          <h6 class="card-subtitle mb-2 text-muted">${data1[i].name}</h6>
          <p class="card-text">${data1[i].region}
          ${data1[i].subregion}
          </p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div> `

        document.body.append(div);
        div.style.color
    }
});
