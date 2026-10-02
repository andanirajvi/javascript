const arr = [
    "https://static.vecteezy.com/system/resources/thumbnails/070/694/375/small_2x/snowy-mountains-with-pink-sky-and-clouds-photo.jpeg",
    "https://i0.wp.com/picjumbo.com/wp-content/uploads/silhouettes-of-hawaiian-palms-at-a-gorgeous-sunset-free-image.jpeg?w=600&quality=80",
    "https://png.pngtree.com/thumb_back/fh260/background/20240522/pngtree-abstract-cloudy-background-beautiful-natural-streaks-of-sky-and-clouds-red-image_15684333.jpg"
];

let index = 0;

document.getElementById("bg").style.backgroundImage =
    `url(${arr[index]})`;

document.getElementById("btn1").onclick = function () {
    index--;

    if (index < 0) {
        index = arr.length - 1;
    }

    document.getElementById("bg").style.backgroundImage =
        `url(${arr[index]})`;
};

document.getElementById("btn2").onclick = function () {
    index++;

    if (index >= arr.length) {
        index = 0;
    }

    document.getElementById("bg").style.backgroundImage =
        `url(${arr[index]})`;
};