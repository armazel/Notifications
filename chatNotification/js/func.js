
    $( "#button" ).each(function() {
        $(this).bind("click", function () {

            var li = document.forms['idform'].elements['id'].value;
            if (li != '') {
                $('.notifications').append('<li class="twitt"> <img src="https://pp.vk.me/c6060/v6060369/153d2/z5sF-fiVOi0.jpg" width="30px" height="30px">' + " " + li + '<a href="#" onclick="var li = this.parentNode; var ul = li.parentNode; ul.removeChild(li)"; ><img src="http://www.iconsearch.ru/uploads/icons/fatcow/32x32/cross.png" style="float: right" class="Cross"></a></li>');
            }
        });

    });
