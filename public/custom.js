/*Utworzenie posta i nadanie elementom treści, oraz odpowiednich klas i id*/

function createPost(data) {
    var s = document.createElement("section"),
        a = document.createElement("article"),
        id = document.createElement("h1"),
        h2 = document.createElement("h2"),
        h3 = document.createElement("h3"),
        p = document.createElement("p"),
        b = document.createElement("div");
    
    id.innerText = data.id;
    h2.innerText = data.title;
    h3.innerText = "Autor: " + data.author;
    p.innerText = data.content;
    b.innerText = "Przeczytaj";

    p.setAttribute("class", "unactive");
    b.setAttribute("class", "readMore"); 
    id.setAttribute("id", data.id);

    document.body.appendChild(s);
    s.appendChild(id);
    s.appendChild(a);
    a.appendChild(h2);
    a.appendChild(h3);
    a.appendChild(b);
    a.appendChild(p);
};

/*Dodanie wszystkich postów.
  Pokazanie zawartości posta po kliku w button "Przeczytaj", schowanie po kolejnym kliku.
*/

function success(data) {
  for (var i = 0; i < data.length; i++) {
    var post = data[i];
    var postElem = createPost(post);
    
  };

  $(".readMore").click(function(){
      $(this).next("p").toggleClass("active");
  });

};


$.ajax({
  url: "/posts",
  success: success
});


/*Pokazanie formularzy po kliku w buttony*/
$("#newPost").click(function(){
  $("#newPostForm").slideDown("500");
});

$("#deletePost").click(function(){
  $("#deletePostForm").slideDown("500");
});

/*Schowanie formularza po kliku "Wyślij"
  Zapisanie dodanego postu
*/


$('#sendPost').click(function(){

  $("#newPostForm").hide();

  var formularz = $("#newPostForm");
  var data = formularz.serialize();

  $.ajax({
      url: "/posts",
      method: "POST",
      data: data,
      success: createPost
    });

});

/*Schowanie formularza po kliku w "Usuń"
  Usunięcie postu z bazy.
  Usunięciu postu ze strony.
*/

$('#deletePostID').click(function(){

  $("#deletePostForm").hide();

  var formularz = $("#deletePostForm").serializeArray();
  var data = formularz[0].value;
  
  $.ajax({
      url: "/posts/" + data,
      method: "DELETE",
      data: data,
      success: function() {

  var data = formularz[0].value;
  var idElement = document.getElementById(data);
  var parent = idElement.parentElement;
  parent.remove();

    }

  });

});





