 $(function() {
    $.get("posts.json", function(posts) {
   // $.get("https://jsonplaceholder.typicode.com/posts", function(posts) 

    for (post of posts) {
        let div = $('<article class= "unit">');
        let user = $('<div class="site-logo">').text(post.user);
        let datetime = $('<div class="header-section-2">').text(post.datetime);
       // let content = $('<div class="middlepart">').text(post.content);
        
        
       let content = $('<h4>').text(post.content);
       let image = $('<img>').text(post.image);
       let bottom = $('<div class="bottom-part"></div>').text(post.bottom);

        div.append(user);
        div.append(datetime);
        div.append(content);
        div.append(image);
        div.append(bottom);

        $('body').append(div)
    }

})

}); 