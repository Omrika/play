 $(document).ready(function() {
  $('#search').keyup(function() {
    var val = $(this).val().toLowerCase()

    var divs = $('.row-divide div')
    divs.hide()

    divs.each(function(){ 
      var name = $(this).text().toLowerCase()
      if (name.indexOf(val) != -1) {
        $(this).show();
      }
    })
  })
});