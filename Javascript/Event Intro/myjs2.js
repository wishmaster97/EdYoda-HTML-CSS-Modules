var cardGrid = document.getElementById('video-grid');

var videoArr = [
    {
      "id": "1",
      "title": "Croissants | Flour and Stone",
      "thumbnail": "https://i.vimeocdn.com/video/600595198_390x220.webp"
    },
    {
      "id": "2",
      "title": "Perfect Mashed Potatoes and Gravy",
      "thumbnail": "https://i.vimeocdn.com/video/604150056_390x220.webp"
    },
    {
      "id": "3",
      "title": "The Heart of Soba",
      "thumbnail": "https://i.vimeocdn.com/video/726986673_390x220.webp"
    },
    {
      "id": "4",
      "title": "Grilled Cheese 9 Ways",
      "thumbnail": "https://i.vimeocdn.com/video/570486309_390x220.webp"
    },
    {
      "id": "5",
      "title": "Pineapple Cheesecake",
      "thumbnail": "https://i.vimeocdn.com/video/602705517_390x220.webp"
    },
    {
      "id": "6",
      "title": "Lemony Chicken Noodle Soup",
      "thumbnail": "https://i.vimeocdn.com/video/537261616_390x220.jpg"
    },
    {
      "id": "7",
      "title": "Pumpkin Roll",
      "thumbnail": "https://i.vimeocdn.com/video/608805594_590x332.jpg"
    },
    {
      "id": "8",
      "title": "How to Brine a Turkey",
      "thumbnail": "https://i.vimeocdn.com/video/601730519_590x332.jpg"
    },
    {
      "id": "9",
      "title": "Stop Motion Dry-Brined Turkey Recipe",
      "thumbnail": "https://i.vimeocdn.com/video/456852083_590x332.jpg"
    },
    {
      "id": "10",
      "title": "Butternut Squash Ravioli",
      "thumbnail": "https://i.vimeocdn.com/video/600328152_590x332.jpg"
    }
]

function generateVideoCard(videoData, index) {
    /* <div class="card">
        <img src="https://i.vimeocdn.com/video/726986673_390x220.webp" alt="Heart of soba" class="img-grid" style="font-size: 24px"/>
				 <i class="fas fa-trash"></i>
        <div class="text">The Heart Of Soba</div>
    </div> */

    var card = document.createElement('div');
    card.className = "card";
    /*card.onclick = function() {
      alert('Card Clicked for => ' + videoData.title);
   
    }*/

    var thumbnail = document.createElement('img');
    thumbnail.src = videoData.thumbnail;
    thumbnail.alt = videoData.title;
    thumbnail.className = "img-grid";
	
	  var deleteIcon = document.createElement('i');
      deleteIcon.className = "fas fa-trash delete-icon";
      
      deleteIcon.onclick = function(){

        var result = confirm('Want to Delete  '+videoData.title + '?');
        
        if(result){

            videoArr.splice(index,1);
            console.log(videoData);
            console.log("*************************************************************************************");
            console.log(videoArr);
           
          }
      }

      

    var title = document.createElement('div');
    title.className = "text";
    title.innerHTML = videoData.title;

    card.appendChild(thumbnail);
	  card.appendChild(deleteIcon);
    card.appendChild(title);

    console.log(card);
    cardGrid.appendChild(card);

    return card;
}


for(var i=0; i<videoArr.length; i++) {
  generateVideoCard(videoArr[i], i);
}