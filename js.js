function loading() {
    var len = $(".loading-content").text().length;
    var str = [];

    for (i = 0; i < len; i++) {
        str[i] = '<span class="e' + i + '">' + $(".loading-content").text().charAt(i) + '</span>';
    }
    $(".loading-content").remove();
    $(".loading-main").append('<div class="loading-content"></div>');

    for (i = 0; i < len; i++) {
        $(".loading-content").append(str[i]);;
    }
}

var no=0;
function chng() {
    $(".loading-content").children().removeClass("f1");
    if ($(".e" + no).text() == " ")
        no++;
    $(".loading-content").addClass("f2");
    $(".e" + no).addClass("f1");
    if (no == $(".loading-content").text().length - 1)
        no = 0;
    else
        no++;
}

$(document).ready(function() {
    loading();
    window.setInterval(function() { chng(); }, 500);
});