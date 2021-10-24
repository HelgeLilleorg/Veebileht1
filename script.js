/* Getting JSON from online

$(document).ready(function() {
    $.getJSON("https://api.npoint.io/899c5a275ac71bce941b", function(posts) {
        $(posts).each(function(index, value) {

            let div = $('<article class= "unit">');

            let headerimage = $('<img>', { class: "header-image", src: value.user.src });
            let headerSec = $('<div class="header-section">');
            let headerSec1 = $('<div class="header-section-1">');
            let siteLogo = $('<div class="site-logo">');
            let headerSec2 = $('<div class="header-section-2">');
            let middle = $('<div class="middlepart">');
            let bottom = $('<div class="bottom-part">');
            let postLike = $('<div class="post-like">');

            let datetime = $('<div>').text(value.datetime);
            let image = $('<img>', { src: value.image.src });
            let content = $('<h5>').text(value.content);
            let like = $('<img>', { class: 'myimage', src: 'like1.png' });

            $('section').append(div);
            $(div).append(headerSec);
            $(div).append(middle);
            $(div).append(bottom);
            $(headerSec).append(headerSec1);
            $(headerSec).append(headerSec2);
            $(headerSec1).append(siteLogo);

            $(siteLogo).append(headerimage);
            $(headerSec2).append(datetime);
            $(middle).append(image);
            $(middle).append(content);
            $(bottom).append(postLike);
            $(postLike).append(like);
        });
    });

})*/

var stop = false;

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    stop = true;
}

// JSON from file

$(function() {
    $.getJSON('posts.json', function(data) {
        $(data).each(function(index, value) {
            let div = $('<article class= "unit">');

            let headerimage = $('<img>', { class: "header-image", src: value.user.src });
            let headerSec = $('<div class="header-section">');
            let headerSec1 = $('<div class="header-section-1">');
            let siteLogo = $('<div class="site-logo">');
            let headerSec2 = $('<div class="header-section-2">');
            let middle = $('<div class="middlepart">');
            let bottom = $('<div class="bottom-part">');
            let postLike = $('<div class="post-like">');

            let datetime = $('<div>').text(value.datetime);
            let image = $('<img>', { src: value.image.src });
            let content = $('<h5>').text(value.content);
            let like = $('<img>', { class: 'myimage', src: 'like1.png' });

            $('section').append(div);
            $(div).append(headerSec);
            $(div).append(middle);
            $(div).append(bottom);
            $(headerSec).append(headerSec1);
            $(headerSec).append(headerSec2);
            $(headerSec1).append(siteLogo);

            $(siteLogo).append(headerimage);
            $(headerSec2).append(datetime);
            $(middle).append(image);
            $(middle).append(content);
            $(bottom).append(postLike);
            $(postLike).append(like);
        })
    })

});