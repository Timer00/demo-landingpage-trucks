function load() {
    /*window.mobilecheck = function () {
        var check = false;
        (function (a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    };
    var mobile = mobilecheck();
    alert("Is mobile? "+mobile);

    var menuButtons = document.getElementsByClassName('menuButton');
    if (mobile){
        for (var i of menuButtons){
            i.style.fontSize = "100%";
        }
    }

    window.addEventListener('scroll', function (event) {
        var header = document.getElementById('header');
        var rect = header.getBoundingClientRect();
        if (window.scrollY > rect.top){
            if (mobile){
                if (window.scrollY < 400 && scrollY > 100) {
                    header.style.width = "100%";
                    header.style.height = (30 / window.scrollY) * 100 + "%";
                    header.style.position = "fixed";
                    header.style.zIndex = "3";
                    header.style.backgroundColor = "white";
                }
            } else {
                if (window.scrollY < 200 && scrollY > 100) {
                    header.style.width = "100%";
                    header.style.height = (30 / window.scrollY) * 100 + "%";
                    header.style.position = "fixed";
                    header.style.zIndex = "3";
                    header.style.backgroundColor = "white";
                }
            }
        }
        if (window.scrollY < 50){
            header.style.width = "100%";
            header.style.height = "30%";
            header.style.position = "relative";
            header.style.float = "left";
            header.style.zIndex = "3";
            header.style.backgroundColor = "white";
        }
        console.log(window.scrollY);
    });*/

    var slides = document.getElementsByClassName('slider')[0].getElementsByClassName('slide');
    var counter = 0;

    var buttons = document.getElementsByClassName('slider')[0].getElementsByClassName('horizontalCenter')[0].getElementsByTagName('div');

    for (var i = 0;i < slides.length; i++){
        slides[i].style.display = "none";

    }
    buttons[counter].style.border= "0.5vw solid gray";
    slides[counter].style.display = "block";
    counter++;
    if (counter == slides.length){
        counter = 0;
    }

    setInterval(()=>{
        for (var i = 0;i < slides.length; i++){
            slides[i].style.display = "none";
            buttons[i].style.border= "0.5vw solid white";
        }
        slides[counter].style.display = "block";
        buttons[counter].style.border= "0.5vw solid gray";
        counter++;
        if (counter == slides.length){
            counter = 0;
        }
    },3000);

     scrollToId = function(id){
         window.location.href="#"+id;
    };
    slide = function(number) {
        for (var i = 0;i < slides.length; i++){
            slides[i].style.display = "none";
            buttons[i].style.border= "0.5vw solid white";
        }
        slides[number].style.display = "block";
        buttons[number].style.border= "0.5vw solid gray";
    }

    let box = document.getElementsByClassName('box');
    Array.from(box).forEach(function(element) {
        element.sw = true;
        element.getElementsByClassName('title')[0].addEventListener('mouseover', function () {
            if (element.sw){
                element.sw = false;
                element.style.height = "200%";
                element.getElementsByClassName('title')[0].style.height = "13%";
                element.getElementsByClassName('form')[0].style.display = "block";
                console.log('ué');
            } else {
                element.sw = true;
                element.style.height = "100%";
                element.getElementsByClassName('title')[0].style.height = "100%";
                element.getElementsByClassName('form')[0].style.display = "none";
                console.log('ué2');
            }
        });
    });
}
