let lsl = localStorage.length;
if(lsl != 0){
    document.getElementById("no-task").style.display = "none";
}
function save(){
    var key = document.getElementById("title").value;
    let a = document.getElementById("description").value;
    localStorage.setItem(key, a);
    let h= "";
    for (let [a, b] of Object.entries(localStorage)) {
        h += `
        <div class="card mx-3 " style="width: 25rem;">
        <img src="https://www.worketc.com/wp-content/uploads/2016/03/worketc-task-featured-01.png" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${a}</h5>
        <p class="card-text">Description : ${b}.</p>
        <p class="card-text" id="status">Status : Pending...</p>
        <a href="#" id="pending" class="btn btn-primary">Pending</a>
        <a href="#" id="delete" class="btn btn-danger">Delete</a>
        </div> 
        </div>
        `;
        document.getElementById('title').value = '';
        document.getElementById("description").value = '';
        if(key!= "" && a!=""){
            window.location.reload();
        }
}
    // <a href="#" id="completed" class="btn btn-success" onclick="taskcomplete()">Completed</a>
}
function deletekrdo(){
    localStorage.clear();
    let h = " ";  
    console.log("Local Storage Cleared Successfull")
    document.getElementById('todo').innerHTML = h;  
    window.location.reload();
}
function taskcomplete(){
    document.getElementById('status').innerHTML = "Status : Task Completed";  

}
function hatado(){
    console.log(localStorage);
    // localStorage.removeItem(0);

}

let h = " ";    
for (let [a, b] of Object.entries(localStorage)) {
        if(a!="" && b!=""){

            h += `
            <div class="card mx-3 " style="width: 25rem;">
            <img src="https://www.worketc.com/wp-content/uploads/2016/03/worketc-task-featured-01.png" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${a}</h5>
            <p class="card-text">Description : ${b}.</p>
            <p class="card-text" id="status">Status : Pending...</p>
            <a href="#" id="completed" class="btn btn-success" onclick="taskcomplete()">Completed</a>
            <a href="#" id="pending" class="btn btn-primary">Pending</a>
            <a href="#" id="delete" class="btn btn-danger" onclick="hatado()">Delete</a>
            </div> 
            </div>
            `;
        }
    }
document.getElementById('todo').innerHTML = h;
document.getElementById('title').value = '';
document.getElementById("description").value = '';
   