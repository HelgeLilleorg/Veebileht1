$(document).ready(function () {
    $.getJSON("https://api.npoint.io/0bd057e435718d31b7c3", function (posts) {


        $.each(posts, function (index, value) {



            $.each(value, function (index, value) {
               
                let div2 = $('<section class= "content">');
                let div = $('<article class= "unit">');

                let headerimage = $('<img>', { class: 'header-image', src: 'postit2.jpg' })

                $(headerimage).addClass("header-section");
                $(headerimage).addClass("header-section-1");

                let datetime = $('<div class="header-section-2">').text(value.datetime);

                $(datetime).addClass("header-section");
                $(datetime).addClass("header-section-2");

                let image = $('<img>').text(value.image.src);
                let content = $('<h4>').text(value.content);

                let like = $('<img>', { class: 'my-image', src: 'like1.png' });
                $(like).addClass("bottom-part");
                $(like).addClass("post-like");




                $(div).append(datetime);
                $(div).append(headerimage);
                $(div).append(content);
                $(div).append(image);
                $(div).append(like)               

                $(div2).append(datetime);
                $(div2).append(headerimage);
                $(div2).append(content);
                $(div2).append(image);
                $(div2).append(like);


         
                $('body').append(div);

                $('body').append(div2);





            });











        });



    });

})


//datetime, content ? image ? 