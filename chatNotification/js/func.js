




    $( "#button" ).each(function() {
        $(this).bind("click", function () {

            var li = document.forms['idform'].elements['id'].value;
            if (li != '') {
               var add= $('.notifications').append('<li class="twitt"> <img src="https://pp.vk.me/c6060/v6060369/153d2/z5sF-fiVOi0.jpg" width="30px" height="30px">' + " " + li + '<a href="#" class="removed" ><img src="http://www.iconsearch.ru/uploads/icons/fatcow/32x32/cross.png" style="float: right" class="Cross"></a></li>');
                        var cross=document.getElementsByClassName("removed");
                var liArray = document.getElementsByClassName('twitt');
                var liContainArr = [];
                for(var i=0; i<liArray.length; i++){
                    liContainArr[i] = liArray[i];
                }
                for(var i=0; i<liContainArr.length;i++){
                    (function(i){
                        liContainArr[i].onclick=function(){
                            liContainArr[i].remove();

                        }
                    })(i);
                }
            }

        });

    });



