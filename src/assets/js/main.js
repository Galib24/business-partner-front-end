

$("#menuToggle").click(function(){
    $(this).toggleClass("toggle-icon");
  });




//   price range 

const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
progress = document.querySelector(".price-slider .progress-bar");

let priceGap = 1000;

rangeInput.forEach( input =>{
	input.addEventListener("input", e => {
        // getting two range value and parsing them to number
	let minVal = parseInt(rangeInput[0].value),
	maxVal = parseInt(rangeInput[1].value); 

    if(maxVal - minVal < priceGap){
        if(e.target.className === "range-min"){ // if slider is mean slider
            rangeInput[0].value = maxVal - priceGap;
        }else{
            rangeInput[1].value = minVal + priceGap;
        }
    }
    else{
        priceInput[0].value = minVal;
        priceInput[1].value = maxVal;
        progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
        progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }

    

    });
});

// 

// video play on hover

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 15) {
        $(".header").addClass("sticky");
    } else {
        $(".header").removeClass("sticky");
    }
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 15) {
        $(".moblie-heder").addClass("sticky");
    } else {
        $(".moblie-heder").removeClass("sticky");
    }
});

// header owl slider

$(document).ready(function(){
    $('.hero-sec-carousel').owlCarousel({
        loop:true,
        margin:30,
        // dots:true,
        mouseDrag: true,
    
        nav:false,
        // navText: [
        //     "<i class='fa fa-angle-left'></i>",
        //     "<i class='fa fa-angle-right'></i>"
        // ],
        dots: false,
        autoplay: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
})


// buy a frenchise carousel

$('.frenchise-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000 ,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

// buy a business overview image carousel

$('.business-overview-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// reuslt page carousel

$('.result-page-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
// 
// business sale profile js
$('.owl-new-result').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$(document).ready(function() {
    $('#imageGallery').lightSlider({
        gallery:true,
        item:1,
        loop:true,
        auto: true,
        nav:true,
        thumbItem:4,
        slideMargin:0,
        enableDrag: true,
        currentPagerPosition:'left',
        onSliderLoad: function(el) {
            el.lightGallery({
                selector: '#imageGallery .lslide'
            });
        }   
    });  
  });

// list show 

const listShow = document.getElementById('show-list');
const hiddenList = document.getElementById('hidden-list');

listShow.addEventListener('click', (e)=>{

hiddenList.classList.toggle('show');
if(listShow.innerText === 'View More'){
    listShow.innerText = 'View Less';
}
else{
    listShow.innerText = 'View More';
}
});
const listShow2 = document.getElementById('show-list-2');
const hiddenList2 = document.getElementById('hidden-list-2');

listShow2.addEventListener('click', (e)=>{
hiddenList2.classList.toggle('show');
if(listShow2.innerText === 'View More'){
    listShow2.innerText = 'View Less';
}
else{
    listShow2.innerText = 'View More';
}
});
const listShow3 = document.getElementById('show-list-3');
const hiddenList3 = document.getElementById('hidden-list-3');

listShow3.addEventListener('click', (e)=>{
hiddenList3.classList.toggle('show');
if(listShow3.innerText === 'View More'){
    listShow3.innerText = 'View Less';
}
else{
    listShow3.innerText = 'View More';
}
});

const listShow4 = document.getElementById('show-list-4');
const hiddenList4 = document.getElementById('hidden-list-4');

listShow4.addEventListener('click', (e)=>{
hiddenList4.classList.toggle('show');
if(listShow4.innerText === 'View More'){
    listShow4.innerText = 'View Less';
}
else{
    listShow4.innerText = 'View More';
}
});

const listShow5 = document.getElementById('show-list-5');
const hiddenList5 = document.getElementById('hidden-list-5');

listShow5.addEventListener('click', (e)=>{
hiddenList5.classList.toggle('show');
if(listShow5.innerText === 'View More'){
    listShow5.innerText = 'View Less';
}
else{
    listShow5.innerText = 'View More';
}
});

const listShow6 = document.getElementById('show-list-6');
const hiddenList6 = document.getElementById('hidden-list-6');

listShow6.addEventListener('click', (e)=>{
hiddenList6.classList.toggle('show');
if(listShow6.innerText === 'View More'){
    listShow6.innerText = 'View Less';
}
else{
    listShow6.innerText = 'View More';
}
});










$('#cate-table').TableSelection({
      status:'multiple'
    });



