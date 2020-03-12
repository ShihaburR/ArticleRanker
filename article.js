let request = new XMLHttpRequest();

function GET() {
  fetch("./data/article-1.json")
    .then(data => {
        return display();
    })
    .then(response =>{
        console.log(response);
    })
    .catch(function (err){
        console.log(err);
    });
}

function display(){
    const main = document.getElementById("myData");
    const obj = JSON.parse('./data/article-1.json');
    document.getElementById("title").innerHTML = obj.title;

}
