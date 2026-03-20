

// // $("#slider-range").slider({
// //     range: true,
// //     min: 0,
// //     max: 200,
// //     values: [0, 200],

// //     slide: function(event, ui) {
// //         $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
// //     },

// //     change: function(){
// //         filterProducts();
// //     }
// // });

// // $("#amount").val(
// // "$" + $("#slider-range").slider("values",0) +
// // " - $" + $("#slider-range").slider("values",1)
// // );


$(document).ready(function(){

function filterProducts(){

let selectedBrands = [];

$(".brand-filter:checked").each(function(){
    selectedBrands.push($(this).val());
});

$(".product-card").each(function(){

    let brand = $(this).data("brand");

    if(selectedBrands.length === 0 || selectedBrands.includes(brand)){
        $(this).show();
    }else{
        $(this).hide();
    }

});
    // if(typeof AOS !== "undefined"){
    //     AOS.refreshHard();
    // }

    setTimeout(function(){
        if(typeof AOS !== "undefined"){
            AOS.refreshHard();
        }
    },200);
}



$(".brand-filter").on("change", function(){
    filterProducts();
});

});