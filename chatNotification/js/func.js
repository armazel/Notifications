$( "#button" ).each(function() {
    $(this).bind("click", function () {

        var li = document.forms['idform'].elements['id'].value;
        if (li != '') {
            var add=$('<li class="twitt"> <img src="https://pp.vk.me/c6060/v6060369/153d2/z5sF-fiVOi0.jpg" width="30px" height="30px">' + " " + li + '<a href="#" class="removed" ><img src="http://www.iconsearch.ru/uploads/icons/fatcow/32x32/cross.png" style="float: right" class="cross"></a></li>');
            $('.notifications').append(add);

           add.find('.cross').click(function(){
              add.remove();
           });
        }

    });

});





   

