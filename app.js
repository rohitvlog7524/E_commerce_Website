let slide = document.querySelectorAll(".slideCard");
let card = document.querySelectorAll(".card");




let count = 0;

slide.forEach(function(slides, index){
    slides.style.left=`${index *100}%`
})

function myFun(){
    slide.forEach(function(curVal){
        curVal.style.transform=`translateX(-${count *100}%)`
    
    })

}

setInterval(function(){
    count++;
    if(count == slide.length){
        count=0;
    }
    myFun()
},2000)











// card.forEach(function(cards){
//     cards.addEventListener("click",function(){
//         console.log(cards.firstElementsChild.src);
//         document.querySelector(".container").style.display="none";

//         let div = document.createElement("div");
//         div.classList.add("cardDetail");
//         div.innerHTML=`
//         <img src=${cards.firstElementsChild.src} alt="">
//         <div class="cardText">
//           <h2>Top Trending Wears</h2>
//           <p>Upto 30% of Harry..</p>
//           <p> Lorem ipsum dolor sit amet consectetur adipisicing</p>
//           <p> Lorem ipsum dolor sit amet consectetur adipisicing</p>
//           <p> Lorem ipsum dolor sit amet consectetur adipisicing</p>
//           <p> Lorem ipsum dolor sit amet consectetur adipisicing</p>
//           <button>Buy Now</button>
//           <button>Add to Cart</button>
//           <a href="">Back</a>
//         </div>`


//         document.querySelector("body").appendChild(div)
//     })
// })

card.forEach(function(cards){
    cards.addEventListener("click",function(){
        console.log(cards.firstElementChild.src);
        document.querySelector(".container").style.display="none";


        let div = document.createElement("div");
        div.classList.add("cardDetail");
        div.innerHTML=`

        <div>
        <a href="index.html">
        <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </a>
      
        </div>
      
        <div>
        <img src=${cards.firstElementChild.src} alt="">
        </div>
         
        
         <div class="cardText">
           <h2>Top Trending Wears</h2>
           <p>Upto 30% of Harry..</p>
           <p> SBI Credit will we use 30% off</p>
           <p> HDFC Credit will we use 20% off</p>
           <p> PNB Credit will we use 40% off</p>
           <p> KCC Credit will we use 10% off</p>
           <div class="abcde">
           <button>Buy Now</button>
           <button>Add to Cart</button>
         
           </div>
         </div>`

         document.querySelector("body").appendChild(div)


    })
})