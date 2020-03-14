let i = 1;

function selector(){
    switch(i){
        case 1:
            get1(i);
            break;
        case 2:
            get2(i);
            break;
        case 3:
            get3(i);
            break;
        case 4:
            get4(i);
            break;
        case 5:
            get5(i);
            break;
        default:
            get1();
    }
}

function get1() {
  fetch("./data/article-1.json")
    .then(function (response){
          return response.json();
    })
    .then(function(data){
        console.log(data);
        return display(data);
    })
    .catch(function (err){
        console.log(err);
    });
}

function get2() {

    fetch("./data/article-2.json")
        .then(function (response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            return display(data);
        })
        .catch(function (err){
            console.log(err);
        });
}
function get3() {

    fetch("./data/article-3.json")
        .then(function (response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            return display(data);
        })
        .catch(function (err){
            console.log(err);
        });
}

function get4() {

    fetch("./data/article-4.json")
        .then(function (response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            return display(data);
        })
        .catch(function (err){
            console.log(err);
        });
}

function get5() {

    fetch("./data/article-4.json")
        .then(function (response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            return display(data);
        })
        .catch(function (err){
            console.log(err);
        });
}

function final() {

}



function display(data){
    let identifier = 0;
    const main = document.getElementById("myData");
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const ul = document.createElement("ul");
    let img = "";
    let paras = [];
    let list = [];
    let taggedlist = [];
    for(let i=0; i<data.body.length; i++ ) {
        if (data.body[i]["type"] === "heading") {
            let count = data.body[i]["model"]["text"];
            h1.innerHTML = count;
            console.log(count)
        } else if (data.body[i]["type"] === "paragraph") {
            let count = data.body[i]["model"]["text"];
            paras.push(count);
            console.log(count);
        } else if (data.body[i]["type"] === "image") {
            div.innerHTML = '<img src = " ' + data.body[i]["model"]["url"] + '"'
            + ' alt= " ' + data.body[i]["model"]["altText"] + '"'
            + " height=" + '"' + data.body[i]["model"]["height"] + '"'
            + ' width="' + data.body[i]["model"]["width"] + '">' ;
            console.log();
        } else if (data.body[i]["type"] === "list") {
            for(let u = 0; u < data.body[i]["model"].items.length; u++){
                list.push(data.body[i]["model"].items[u]);
                taggedlist.push('<li>' + list[u] + '</li>');
            }
            console.log(taggedlist);
            ul.innerHTML = '<ul>' + taggedlist + '</ul>';
            console.log(list);
        }
    }

    //console.log("array: " + paras);
    let cparas = paras.toString();
    //console.log("collated: " + cparas);
    p.innerHTML = cparas;
    main.appendChild(h1);
    main.appendChild(p);
    main.appendChild(div);
    main.appendChild(ul);
}


function clearJSON(){
    const main = document.getElementById("myData");
    main.innerHTML="";
}