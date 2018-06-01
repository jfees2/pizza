
/******DELIVERY FORM *****/

$("#deliver").on("click", function () {
    $(".pop-up").show();
    $(this).hide();
});

document.getElementById("close").addEventListener("click", function () {
    this.parentNode.parentNode
        .removeChild(this.parentNode);
    return false;
});

/*******PICK UP ZIP FORM*******/
$("#pick-up").on("click", function () {
    $(".zip-form").show();
    $(this).hide();
});

document.getElementById("close2").addEventListener("click", function () {
    this.parentNode.parentNode
        .removeChild(this.parentNode);
    return false;
});
/*****FORM VALIDATION*****/