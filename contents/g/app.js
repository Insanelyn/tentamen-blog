$(() => {
    let posts = [];




    $.getJSON( "https://jsonplaceholder.typicode.com/posts", function( data ) {
        posts = data;

        for (let post of posts) {
            post.Likes = Math.floor((Math.random() * 100));
        }

        renderBlogPosts();

    });

    function renderBlogPosts() {
        let $bloggPosts = $("#bloggPosts");
        $bloggPosts.empty();
        for (let post of posts) {
            let $post = $(`<div class="product">
                <div>___________________________________________________________________________________________</div>
                <div>${post.id}</div>
                <div>${post.title}</div>
                <div>${post.body}"></div>
                <div>${post.Likes} Likes</div>
                <button id="commentButton">Comment</button>
            </div>`);

            $post.appendTo($bloggPosts);
        }
    }


});


