var names = [];
var prices = [];
var categories = [];
var images = [];

var edit = -1;

function add() {

    var n = document.getElementById("name").value;
    var p = document.getElementById("price").value;
    var c = document.getElementById("category").value;
    var im = document.getElementById("img").value;

    if (n == "" || p == "" || c == "" || im == "") {
        alert("Enter All Details");
    }
    else {

        if (edit == -1) {

            names[names.length] = n;
            prices[prices.length] = p;
            categories[categories.length] = c;
            images[images.length] = im;

        }
        else {

            names[edit] = n;
            prices[edit] = p;
            categories[edit] = c;
            images[edit] = im;

            edit = -1;

            document.getElementById("btn").innerHTML = "Add Product";
        }

        document.getElementById("name").value = "";
        document.getElementById("price").value = "";
        document.getElementById("category").value = "";
        document.getElementById("img").value = "";

        show();
    }
}

function show() {

    var data = "";

    for (var i = 0; i < names.length; i++) {

        data += "<h3>" + names[i] + "</h3>";

        data += "<p>Price: " + prices[i] + "</p>";

        data += "<p>Category: " + categories[i] + "</p>";

        data += "<img src='" + images[i] + "' width='150' height='150'>";

        data += "<br><br>";

        data += "<button onclick='editProduct(" + i + ")'>Edit</button> ";

        data += "<button onclick='deleteProduct(" + i + ")'>Delete</button>";

        data += "<hr>";
    }

    document.getElementById("output").innerHTML = data;
}

function editProduct(i) {

    document.getElementById("name").value = names[i];

    document.getElementById("price").value = prices[i];

    document.getElementById("category").value = categories[i];

    document.getElementById("img").value = images[i];

    edit = i;

    document.getElementById("btn").innerHTML = "Update Product";
}

function deleteProduct(i) {

    names.splice(i, 1);
    prices.splice(i, 1);
    categories.splice(i, 1);
    images.splice(i, 1);

    show();
}