// scripts for page11.html

let i = 0;

function ShowOtherVids1() {
    i++;
    let more = document.getElementById("more-button");
    let more_cont = document.getElementById("more-container")
    let data = [
        `<figure class="figure_video_page9">
            <video preload="auto" controls loop class="basket-video">
                <source type="video/mp4" src="../videos/page11-5.mp4">
            </video>
            <figcaption>&#171; лешина сальтуха &#187;</figcaption>
        </figure>

        <figure class="figure_image_page11">
            <img class="page11_first_img" src="../images/page11-1.jpg">
            <figcaption> я и мои радостные друзья </figcaption>
        </figure>
        <figure class="figure_image_page11">
            <img src="../images/page11-2.jpg">
            <figcaption> я и мои счастливые друзья </figcaption>
        </figure>
        <figure class="figure_image_page11">
            <img src="../images/page11-3.jpg">
            <figcaption> тортик от Насти, Иры и Саши :3 </figcaption>
        </figure>
        <figure class="figure_image_page11">
            <img src="../images/page11-4.jpg">
            <figcaption> веселый женя </figcaption>
        </figure>
        <figure class="figure_image_page11">
            <img src="../images/page11-5.jpg">
            <figcaption> красивый сеня </figcaption>
        </figure>
        <figure class="figure_image_page11">
            <img src="../images/page11-6.jpg">
            <figcaption> я и мои крутые друзья </figcaption>
        </figure>
      `
    ];
    let hide_cont = document.getElementById("hide-vids-container");
    if (i % 2 != 0) {
        more_cont.innerHTML += data;
        more.innerHTML = "Еще видео и фото &#171;";
        hide_cont.innerHTML = `<a class="hide-vids" href="#more-button">Скрыть видео и фото &uarr;</a>`;
    }
    else {
        more_cont.innerHTML = "";
        more.innerHTML = "Еще видео и фото &raquo;"
        hide_cont.innerHTML = "";
    }
    
}

let a = 0;

function ShowOtherVids2() {
    a++;
    let more2 = document.getElementById("more-button2");
    let more_cont2 = document.getElementById("more-container2")
    let data2 = [
        `<figure class="figure_video_page9">
            <video preload="auto" controls loop class="basket-video">
                <source type="video/mp4" src="../videos/page11-10.mp4">
            </video>
            <figcaption>&#171; пацаны в бассейне &#187;</figcaption>
        </figure>
        <figure class="figure_video_page9">
            <video preload="auto" controls loop class="basket-video">
                <source type="video/mp4" src="../videos/page11-11.mp4">
            </video>
            <figcaption>&#171; парень который любит бебру &#187;</figcaption>
        </figure>
        <figure class="figure_video_page9">
            <video preload="auto" controls loop class="basket-video">
                <source type="video/mp4" src="../videos/page11-12.mp4">
            </video>
            <figcaption>&#171; меня кинули на прогиб &#128578; &#187;</figcaption>
        </figure>
        <figure class="figure_video_page9">
            <video preload="auto" controls loop class="basket-video">
                <source type="video/mp4" src="../videos/page11-13.mp4">
            </video>
            <figcaption>&#171; салют да фамилья &#187;</figcaption>
        </figure>
        <figure class="figure_video_page9">
            <video preload="auto" controls loop class="basket-video">
                <source type="video/mp4" src="../videos/page11-14.mp4">
            </video>
            <figcaption>&#171; мужской вальс &#187;</figcaption>
        </figure>
      `
    ];
    let hide_cont2 = document.getElementById("hide-vids-container2");
    if (a % 2 != 0) {
        more_cont2.innerHTML += data2;
        more2.innerHTML = "Еще видео и фото &#171;";
        hide_cont2.innerHTML = `<a class="hide-vids" href="#more-button2">Скрыть видео и фото &uarr;</a>`;
    }
    else {
        more_cont2.innerHTML = "";
        more2.innerHTML = "Еще видео и фото &raquo;"
        hide_cont2.innerHTML = "";
    }
    
}

let b = 0;

function ShowOtherVids3() {
    b++;
    let more3 = document.getElementById("more-button3");
    let more_cont3 = document.getElementById("more-container3")
    let data3 = [
        `<figure class="figure_video_page9">
            <video preload="auto" controls loop class="basket-video">
                <source type="video/mp4" src="../videos/page11-19.mp4">
            </video>
            <figcaption>&#171; мои арбузы &#187;</figcaption>
        </figure>
        <figure class="figure_video_page9">
            <video preload="auto" controls loop class="basket-video">
                <source type="video/mp4" src="../videos/page11-22.mp4">
            </video>
            <figcaption>&#171; родные барановичи &#187;</figcaption>
        </figure>
        <figure class="figure_video_page9">
            <video preload="auto" controls loop class="basket-video">
                <source type="video/mp4" src="../videos/page11-24.mp4">
            </video>
            <figcaption>&#171; парни пошли купаться 1.0 &#187;</figcaption>
        </figure>
        <figure class="figure_video_page9">
            <video preload="auto" controls loop class="basket-video">
                <source type="video/mp4" src="../videos/page11-25.mp4">
            </video>
            <figcaption>&#171; парни пошли купаться 2.0 &#187;</figcaption>
        </figure>
        <figure class="figure_video_page9">
            <video preload="auto" controls loop class="basket-video">
                <source type="video/mp4" src="../videos/page11-20.mp4">
            </video>
            <figcaption>&#171; man of the year &#187;</figcaption>
        </figure>
        <figure class="figure_video_page9">
            <video preload="auto" controls loop class="basket-video">
                <source type="video/mp4" src="../videos/page11-26.mp4">
            </video>
            <figcaption>&#171; поднял большой куш &#187;</figcaption>
        </figure>
        <figure class="figure_video_page9">
            <video preload="auto" controls loop class="basket-video">
                <source type="video/mp4" src="../videos/page11-21.mp4">
            </video>
            <figcaption>&#171; утренняя красота &#187;</figcaption>
        </figure>
        <figure class="figure_video_page9">
            <video preload="auto" controls loop class="basket-video">
                <source type="video/mp4" src="../videos/page11-27.mp4">
            </video>
            <figcaption>&#171; утренний вид раубичей &#187;</figcaption>
        </figure>

        <figure class="figure_image_page11">
            <img src="../images/page11-7.jpg">
            <figcaption> алексей &#128563; &#128527; </figcaption>
        </figure>
        <figure class="figure_image_page11">
            <img src="../images/page11-8.jpg">
            <figcaption> badass boy &#128526; </figcaption>
        </figure>
        <figure class="figure_image_page11">
            <img src="../images/page11-9.jpg">
            <figcaption> не к селу, не к городу, но красивые лампы у нас в метро </figcaption>
        </figure>
      `
    ];
    let hide_cont3 = document.getElementById("hide-vids-container3");
    if (b % 2 != 0) {
        more_cont3.innerHTML += data3;
        more3.innerHTML = "Еще видео и фото &#171;";
        hide_cont3.innerHTML = `<a class="hide-vids" href="#more-button3">Скрыть видео и фото &uarr;</a>`;
    }
    else {
        more_cont3.innerHTML = "";
        more3.innerHTML = "Еще видео и фото &raquo;"
        hide_cont3.innerHTML = "";
    }
    
}

let v = 0;

function ShowOtherVids4() {
    v++;
    let more4 = document.getElementById("more-button4");
    let more_cont4 = document.getElementById("more-container4")
    let data4 = [
        `<figure class="figure_video_page9">
            <video preload="auto" controls loop class="basket-video">
                <source type="video/mp4" src="../videos/page11-32.mp4">
            </video>
            <figcaption>&#171; живи в кайф, пожалуйста &#128557; &#187;</figcaption>
        </figure>
        <figure class="figure_video_page9">
            <video preload="auto" controls loop class="basket-video">
                <source type="video/mp4" src="../videos/page11-33.mp4">
            </video>
            <figcaption>&#171; опять та же шарманка... &#187;</figcaption>
        </figure>

        <figure class="figure_image_page11">
            <img src="../images/page11-10.jpg">
            <figcaption> мазайка саше </figcaption>
        </figure>
        <figure class="figure_image_page11">
            <img class="page11_first_img" src="../images/page11-11.jpg">
            <figcaption> я и арс </figcaption>
        </figure>
        <figure class="figure_image_page11">
            <img class="page11_first_img" src="../images/page11-12.jpg">
            <figcaption> наш средиземный gang </figcaption>
        </figure>
        <figure class="figure_image_page11">
            <img src="../images/page11-13.jpg">
            <figcaption> рот алексея &#128563; </figcaption>
        </figure>
        <figure class="figure_image_page11">
            <img src="../images/page11-14.jpg">
            <figcaption> женя у лидского замка </figcaption>
        </figure>
        <figure class="figure_image_page11">
            <img src="../images/page11-15.jpg">
            <figcaption> я у филмара </figcaption>
        </figure>
        <figure class="figure_image_page11">
            <img src="../images/page11-16.jpg">
            <figcaption> алексей и сеня &#128527; </figcaption>
        </figure>
      `
    ];
    let hide_cont4 = document.getElementById("hide-vids-container4");
    if (v % 2 != 0) {
        more_cont4.innerHTML += data4;
        more4.innerHTML = "Еще видео и фото &#171;";
        hide_cont4.innerHTML = `<a class="hide-vids" href="#more-button4">Скрыть видео и фото &uarr;</a>`;
    }
    else {
        more_cont4.innerHTML = "";
        more4.innerHTML = "Еще видео и фото &raquo;"
        hide_cont4.innerHTML = "";
    }
    
}

// script for contacts.html

function tempError() {
    let x;
    x = prompt("Instructions/Инструкция\n1. English\n2. Russian");
    if (x == 2) {
        alert(`К сожалению, пока что это поле функционирует неправильно. Для отправки своих данных, пожалуйста, нажмите кнопку 'SUBMIT', 
после чего откроется приложение для отправки писем, в котором введите нужную информацию (Имя, Фамилию, Почту и Комментарий)`);
    }
    if (x == 1) {
        alert(`Unfortunately, this field is currently not functioning properly. To submit your data, please click on the 'SUBMIT' button,
after which the application for sending letters will open, in which enter the required information (First Name, Last Name, Mail and Comment`);
    }
}

function dataTransfer() {
    let sbm_btn = document.getElementById("submit-button");

    let name = document.getElementById("first_name");
    let name_content = name.innerHTML;
    let sec_name = document.getElementById("last_name");
    let sec_name_content = name.innerHTML;
    let email = document.getElementById("email");
    let email_content = name.innerHTML;
    let coms = document.getElementById("comments");
    let coms_content = name.innerHTML;
    
    let data_holder = document.getElementById("data-holder");

    data_holder.innerHTML += name_content + sec_name_content + email_content + coms_content;
}