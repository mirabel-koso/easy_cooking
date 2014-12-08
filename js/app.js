var recipe = {
  buttonClick : function() {
    $('button').click(function(e) {
    e.preventDefault();
    var textentered = $('#textArea').val();
    var url = "http://api.bigoven.com/recipes?title_kw=" + textentered + "&pg=1&rpp=20&api_key=dvx0hom7nq400HGdFUJ164n6U7H9eA2V";
    var callback = function(response) {
      console.log(response);
      foodHTML = '<ul>';
      $.each(response.Results, function(i, list) {
        foodHTML += '<li class="fudList"><a href="'+ list.WebURL +'">';
        foodHTML += '<img src="'+ list.ImageURL +'" class="image"></a><br>'; 
        foodHTML += '<span>Name:"' + list.Title +'"</span><br>';
        foodHTML += '<span>Origination:"' + list.Cuisine +'"</span></li>';
      });
      foodHTML += '</ul>';
      $('#searchResult').html(foodHTML);
    };
    $.getJSON(url, callback);
    })
  }
};
window.onload = recipe.buttonClick();