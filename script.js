let DATA = {};

function init() {
    fetch('users.json')
        .then((response) =>
            response.json()
        )
        .then(json => {
            DATA.users = json;
        }).catch(err =>  {
        console.log(err )
    })
}
function oneUser(index){
    let users = DATA.users;
        let div = document.getElementById("contentUsers");
        let divItem = document.createElement("div");
        divItem.setAttribute("id", users[index].id);
        div.append(divItem);

        let spanFirstName = document.createElement("span");
        spanFirstName.innerHTML = users[index].first_name;
        divItem.append(spanFirstName);

        let spanLastName = document.createElement("span");
        spanLastName.innerHTML = users[index].last_name;
        divItem.append(spanLastName);

        let spanEmail = document.createElement("span");
        spanEmail.innerHTML = users[index].email;
        divItem.append(spanEmail);

        let spanGender = document.createElement("span");
        spanGender.innerHTML = users[index].gender;
        divItem.append(spanGender);
        let spanIpAddress = document.createElement("span");
        spanIpAddress.innerHTML = users[index].ip_address;
        divItem.append(spanIpAddress);

        let inputDelete = document.createElement("input");
        let br =document.createElement("br");
        inputDelete.setAttribute("type", "button");
        inputDelete.setAttribute("value", "Delete");
        inputDelete.addEventListener("click", function(){
            deleteUser(index);
        }, false);
        divItem.append(inputDelete);

        let inputEdite = document.createElement("input");
        inputEdite.setAttribute("type", "button");
        inputEdite.setAttribute("value", "Edite");
        inputEdite.addEventListener("click", function(){
            editeUser(index);
            div.remove();
        }, false);
        divItem.append(inputEdite);

        divItem.append(br);
}

function showAllUsers() {
    let users = DATA.users;
    for (let i = 0; i < users.length; i++){
        oneUser(i);
    }
}
function createUser(){
    let users = DATA.users;
    let div = document.getElementById("contentEditUser");
    let divItem = document.createElement("div");
    divItem.setAttribute("id",users[users.length-1].id+1);
    div.append(divItem);
    let divNewUser = document.createElement("div");
    div.append(divNewUser);

    let form = document.createElement("form");
    divItem.append(form);
    let inputFirstName = document.createElement("input");
    inputFirstName.value = ``;
    form.append(inputFirstName);
    inputFirstName.addEventListener('change', updateValue);
    function updateValue(e) {
        divNewUser.textContent = e.target.value;
    }



    let inputLastName = document.createElement("input");
    inputLastName.value = ``;
    form.append(inputLastName);

    let inputEmail = document.createElement("input");
    inputEmail.value = ``;
    form.append(inputEmail);

    let inputGender1 = document.createElement("input");
    inputGender1.setAttribute("type", "radio");
    let inputGender2 = document.createElement("input");
    inputGender2.setAttribute("type", "radio");
    /*if (users[i].gender == "Male"){
        inputGender1.value = "checked"
    } else inputGender2.value = "checked"
     */
    form.append(inputGender1);
    form.append(inputGender2);

    let inputIpAddress = document.createElement("input");
    inputIpAddress.value = ``;
    form.append(inputIpAddress);

    let button = document.createElement("button");
    button.innerText = "Save";
    form.append(button);
    button.addEventListener("click", function() {
        console.log("you clicked region number " );
    })

}

function deleteUser(deleteId) {
    let users = DATA.users;
    let div =   document.getElementById(users[deleteId].id);
    console.log(div);
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}
function editeUser(id) {
    let users = DATA.users;
    for (let i = 0; i < users.length; i++) {
        if (i == id){
            let div = document.getElementById("contentEditUser");
            let divItem = document.createElement("div");
            divItem.setAttribute("id", users.length);
            div.append(divItem);
            let form = document.createElement("form");
            div.append(form);
            let inputFirstName = document.createElement("input");
            inputFirstName.value = `${users[i].first_name}`;
            form.append(inputFirstName);

            let inputLastName = document.createElement("input");
            console.log(users[i].last_name);
            inputLastName.value = `${users[i].last_name}`;
            form.append(inputLastName);

            let inputEmail = document.createElement("input");
            console.log(users[i].email);
            inputEmail.value = `${users[i].email}`;
            form.append(inputEmail);

            let inputGender1 = document.createElement("input");
            inputGender1.setAttribute("type", "radio");
            let inputGender2 = document.createElement("input");
            inputGender2.setAttribute("type", "radio");
            /*if (users[i].gender == "Male"){
                inputGender1.value = "checked"
            } else inputGender2.value = "checked"
             */
            form.append(inputGender1);
            form.append(inputGender2);

            let inputIpAddress = document.createElement("input");
            inputIpAddress.value = `${users[i].ip_address}`;
            form.append(inputIpAddress);

            let button = document.createElement("button");
            button.innerText = "Save";
            button.onclick = console.log("Saved");
            form.append(button);
        }
    }
}

