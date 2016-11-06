
// Initialize your app
var myApp = new Framework7();


// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});


// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});


var mySwiper = myApp.swiper('.swiper-container', {
  pagination: '.swiper-pagination',
  paginationHide: false,
  paginationClickable: true,
  nextButton: '.fa-forward',
  speed: 250,
  spaceBetween:50,


 
});                            


$.get('/fact-data/animal.txt',function(data){
    var lines = data.split("~");
    var arraytest = data.split("~").length;
  
   for(var i = arraytest-1 ; i >= 0 ; i--){
 
        var example = 
                    "<div class='swiper-slide'>" +
                            "<span>"+lines[i]+"</span>"+
                        "</div>";
 
        $(".swiper-wrapper").prepend(example);
   }
    
});

//opening the panels
 $$('.open-left-panel').on('click', function (e) {
        // 'left' position to open Left panel
        myApp.openPanel('left');
    });

// closing the panels
  $$('.panel-close').on('click', function (e) {
        myApp.closePanel();
    });
 

// Bottom Bar Icon functionality 




function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

$(".fa-clone").click(function(){
    //copyToClipboard(".swiper-slide-active");
});





