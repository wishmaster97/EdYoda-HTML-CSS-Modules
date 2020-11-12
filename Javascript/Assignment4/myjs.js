var section_product = document.getElementById('product');

var photoArr = [
    {
      "id": "img0",
      "thumbnail": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      "alt": "Preview Image 1"

    },
    {
      "id": "img1",
      "thumbnail": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
      "alt": "Preview Image 2"

    },
    {
      "id": "img2",
      "thumbnail": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
      "alt": "Preview Image 3"

    },
    {
      "id": "img3",
      "thumbnail": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
      "alt": "Preview Image 4"
      
    },
    {
      "id": "img4",
      "thumbnail":  "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg",
      "alt": "Preview Image 5"

    }
]


function generateImageArr(photo_arr){

    var prev_img = document.createElement('img');
    prev_img.src = photo_arr.thumbnail;
    prev_img.id = photo_arr.id;
    prev_img.alt = photo_arr.alt;

    return prev_img;
    
}

   
 // **************************************LEFT Column *************************************************//
    var left_preview = document.createElement('div');
    left_preview.className = "left-column";
    
    var prev_img = document.createElement('img');
    prev_img.src = "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg";
    prev_img.alt = "Main preview image";

  
   left_preview.appendChild(prev_img);





 // **************************************RIGHT Column *************************************************//

    var right_preview = document.createElement('div');
    right_preview.className = "right-column";

    //new div2 -open-

    var prod_desc = document.createElement('div');
    prod_desc.className = "product-description";

    var title = document.createElement('h1');
    title.id = "name";
    title.innerHTML = "Men Navy Blue Solid Sweatshirt";

    var brand = document.createElement('h4');
    brand.id = "brand";
    brand.innerHTML = "United Colors of Benetton";

    var price = document.createElement('h3');
    brand.innerHTML = "Price: Rs ";

    var price_val = document.createElement('span');
    price_val.id = "price";
    price_val.innerHTML = "2599";

    
    price.appendChild(price_val);
    console.log(price);

    //new div3 -open-
    var desc = document.createElement('div');
    desc.className = "description";

    var h3_desc = document.createElement('h3');
    h3_desc.innerHTML = "Description";

    var p_desc = document.createElement('p');
    p_desc.id = "description";
    p_desc.innerHTML = "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem";

    desc.appendChild(h3_desc);
    desc.appendChild(p_desc);

    console.log(desc);
    //new div3 -close-


    //new div4 -open-
    var prod_previews = document.createElement('div');
    prod_previews.className = "product-preview";

    var h3_prodPrev = document.createElement('h3');
    h3_prodPrev.innerHTML = "Product Preview";

    prod_previews.appendChild(h3_prodPrev);

    //new div5 -open- inside -div4-
    var prevImgs = document.createElement('div');
    prevImgs.className = "previewImg";

    

    for(var i=0;i<photoArr.length;i++){
    
       var small_pic = generateImageArr(photoArr[i]);
       prevImgs.appendChild(small_pic); 
    }

    /*
    var prev_img1 = document.createElement('img');
    prev_img1.src = "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg";
    prev_img1.id = "img0";
    prev_img1.alt = "Preview image 1";

    var prev_img2 = document.createElement('img');
    prev_img2.src = "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg";
    prev_img2.id = "img1";
    prev_img2.alt = "Preview image 2";

    var prev_img3 = document.createElement('img');
    prev_img3.src = "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg";
    prev_img3.id = "img2";
    prev_img3.alt = "Preview image 3";
    
    var prev_img4 = document.createElement('img');
    prev_img4.src = "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg";
    prev_img4.id = "img3";
    prev_img4.alt = "Preview image 4";

    var prev_img5 = document.createElement('img');
    prev_img5.src = "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg";
    prev_img4.id = "img4";
    prev_img5.alt = "Preview image 5";
   
   
    prevImgs.appendChild(prev_img1);
    prevImgs.appendChild(prev_img2);
    prevImgs.appendChild(prev_img3);
    prevImgs.appendChild(prev_img4);
    prevImgs.appendChild(prev_img5);
 */
    console.log(prevImgs);

    //div5 -closed-

    //continue -div4-
    prod_previews.appendChild(h3_prodPrev);
    prod_previews.appendChild(prevImgs);

    console.log(prod_previews);

    //div4 -closed-

    //continue -div2- to append remaining divs
    prod_desc.appendChild(title);
    prod_desc.appendChild(brand);
    prod_desc.appendChild(price);

    prod_desc.appendChild(desc);
    prod_desc.appendChild(prod_previews);

    console.log(prod_desc);

    //div2 -closed-


    //continue with div1
    var div_btn = document.createElement('div');
    div_btn.className = "btn";

    var btn_btn = document.createElement('button');
    btn_btn.id ="add-to-cart";
    btn_btn.innerHTML = "Add To Cart";

    div_btn.appendChild(btn_btn);

    //div1 append

    right_preview.appendChild(prod_desc);
    right_preview.appendChild(div_btn);

    console.log(right_preview);

    //Append all chld divs to section_product

    section_product.appendChild(left_preview);
    section_product.appendChild(right_preview);

    console.log(section_product);



/*for(var i=0; i<videoArr.length; i++) {
  generateVideoCard(videoArr[i], i);
}*/