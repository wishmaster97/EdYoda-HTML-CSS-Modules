 
 var section1 = document.getElementById("clothing");


 var card_grid = document.createElement('div');
 card_grid.className = "card-conatiner";
 card_grid.id = "clothingCards";

 var card = document.createElement('div');
 card.className = "card";
 card.id = 1;

 var thumbnail = document.createElement('img');
 thumbnail.src = "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg";

 thumbnail.className = "img";

 var titles = document.createElement('div');
 titles.className = "details";


 var titleh3 = document.createElement('h3');
 titleh3.innerHTML = "Men Navy Blue Solid Sweatshirt";

 var titleh4 = document.createElement('h4');
 titleh4.innerHTML = "xyz";

 var titleh5 = document.createElement('h5');
 titleh5.innerHTML = "1234";

 titles.appendChild(titleh3);
 titles.appendChild(titleh4);
 titles.appendChild(titleh5);

 card.appendChild(thumbnail);
 card.appendChild(titles);

 console.log(card);
 card_grid.appendChild(card);
 section1.appendChild(card_grid);


 