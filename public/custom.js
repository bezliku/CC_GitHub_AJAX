function createPost(data) {
    var s = document.createElement("section"),
        h2 = document.createElement("h2"),
        h3 = document.createElement("h3"),
        p = document.createElement("p");
    
    h2.innerText = data.title;
    h3.innerText = data.author;
    p.innerText = data.content;

    document.body.appendChild(s);
    s.appendChild(h2);
    s.appendChild(h3);
    s.appendChild(p);

  };

function success(data) {
  for (var i = 0; i < data.length; i++) {
    var post = data[i];
    var postElem = createPost(post);
    
  };
};

$.ajax({
  url: "/posts",
  success: success
});

$("#newPost").click(function(){
  $("#newPostForm").slideDown("500");
});