$(() => {
    let posts = [];
    let comment = [];


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
            let $post = $(`<div class="post">
                <div>___________________________________________________________________________________________</div>
                <div> <b> ${post.title}</b></div>
                <div>${post.body}"></div>
                <div>${post.Likes} Likes</div>
			<button id="comment">Comment</button>
            </div>`);

            $post.appendTo($bloggPosts);
        }
    }

    //nedan följer mitt försök att få kommentarerna att funka, koden är därmed lite virrig och konstig

    $( "button" ).on( "click", "button", function( e ) {

        $.getJSON( "https://jsonplaceholder.typicode.com/posts/1/comments", function( data ) {
            comment = data;
            e.preventDefault();

        })
        renderComments();

    });

    function renderComments() {
        let $comments = $("#comments");
        $comments.empty();
        for (let comment of $comments) {
            let $comments = $(`<div class="comment">
                <div>${comment.title}</div>
            </div>`);

            $post.appendTo($comments);
        }
    }
});


