const add_input = document.getElementById("add");
const form = document.querySelector("form");
// var del_input = document.getElementById("del")

var n = 0;
add_input.addEventListener("click", function () {
    let div = document.createElement("div");
    div.innerHTML = `
        <input class="form-control" type="text">
        `;
    // console.log('child created')
    form.appendChild(div);
    n++;
    // console.log('child appended');

    // console.log(n)
    if (n==1){
        make_del();
    };

});

function make_del(){
    // console.log('make_del called')
    controller = document.getElementById("subcon");
    let div = document.createElement("div");
    div.innerHTML = `
        <button class="btn btn-sm btn-danger" id="del2">-</button>
    `;
    controller.appendChild(div);

    let del_btn = document.getElementById("del2");
    del_btn.addEventListener("click", () => {
        if (n > 0) {
            del_child();
            n--;
        };
        if (n==0){
            remove_del();
        };
    });
};

function remove_del(){
    // console.log('remove_del called')
    controller = document.getElementById("subcon");
    controller.removeChild(controller.lastElementChild);
};

function del_child(){
    // console.log('del clicked');
    // const form = document.querySelector("form");
    last_input = form.lastElementChild;
    form.removeChild(last_input);
};


// del_input.addEventListener("click", () => {
//     if (n > 0) {
//         del_child();
//         n--;
//     };
// });