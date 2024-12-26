let form = document.querySelector("form");
const fname = document.getElementsByClassName("name");
const role = document.getElementsByClassName("role");
const email = document.getElementsByClassName("email");
const dob = document.getElementsByClassName("dob");
const age = document.getElementsByClassName("age");
const selectBox = document.getElementsByClassName("selectbox");
const male = document.getElementsByClassName("male");
const female = document.getElementsByClassName("female");
const addbtn = document.getElementsByClassName("addbtn");
let details = document.getElementsByClassName("textarea");
let table = document.querySelector("table");
let re = /\S+@\S+\.\S+/;
let str = /^[a-zA-Z\-'#(),"]*$/;
let dataArray = [];
let count = 0;


function dataPush(count) {
    dataArray.push(fname[count].value);
    dataArray.push(role[count].value);
    dataArray.push(email[count].value);
    dataArray.push(dob[count].value);
    dataArray.push(age[count].value);
    dataArray.push(checkgender(count));
    dataArray.push(selectBox[count].value);
    dataArray.push(details[count].value);
}

function insertTable(array) {
    //table.style.display = "block";
    table.style.display = "table";
    let arr = array;
    for (let i = 0; i < arr.length; i++) {
        //console.log(array[i])
        if (i % 8 == 0) {
            let tr = table.insertRow(1);
            tr.insertCell(0).innerHTML = `${array[i]}`;
            tr.insertCell(1).innerHTML = `${array[i + 1]}`;
            tr.insertCell(2).innerHTML = `${array[i + 2]}`;
            tr.insertCell(3).innerHTML = `${array[i + 3]}`;
            tr.insertCell(4).innerHTML = `${array[i + 4]}`;
            tr.insertCell(5).innerHTML = `${array[i + 5]}`;
            tr.insertCell(6).innerHTML = `${array[i + 6]}`;
            tr.insertCell(7).innerHTML = `${array[i + 7]}`;
        }

    }
}

form.addEventListener("input", (e) => {
    e.preventDefault();
    if (!valstate(count)) {
        addbtn[count].classList.remove("disabled");
        addbtn[count].setAttribute("onclick", "dynamicForm()");
        //console.log("click");
       

    }
})



form.addEventListener("submit", (e) => {
    e.preventDefault();
   // console.log("outer");
    if (!valstate(count)) {
        dataPush(count);
        //console.log("inner");
        // for(let i=0;i<=count;i++){
        //     dataPush(count);
        // }
        insertTable(dataArray);
        dataArray = [];
        addbtn[count].classList.add("disabled");
        addbtn[count].removeAttribute("onclick", "dynamicForm()");
        let container = document.getElementsByClassName("addmore")[0];
        form.reset();
        container.innerHTML = "";
       // addbtn[count].style.display = "block";
        //console.log(count);
        count = 0;
        // console.log(count);
    } else {
        alert("fill all the input fileds");
    }
})
//validate inputs
function valstate(count) {
    let validate = (!fname[count].value || !role[count].value || !email[count].value || !dob[count].value || !details[count].value);
    //console.log(validate);
    return validate;
}
//add more
function dynamicForm() {
    //addbtn[count].style.display = "none";
    addbtn[count].classList.add("disabled");
    addbtn[count].removeAttribute("onclick", "dynamicForm()");
    dataPush(count);

    count = count + 1;
    //console.log(count);
    let container = document.getElementsByClassName("addmore")[0];
    const newdata = document.createElement('div');
    newdata.className = "container";
    newdata.innerHTML = `
                <div class="container">

                <div class="section1">
                    <label class="style">Name :
                        <input type="text" id="name" class="name" oninput="strings(this)">
                        <p class="valid"> </p>
                    </label>

                    <label class="style">Role :
                        <input type="text" id="role" oninput="roles(this)" class="role">
                        <p class="valid"> </p>
                    </label>
                    <label class="style">Email :
                        <input type="text" class="email" id="email" oninput="emails(this)">
                        <p class="valid"> </p>
                    </label>
                </div>
                <div class="section2">
                    <label class="style">DOB :
                        <input type="date" id="dob" class="dob" oninput="dobs()" onchange="ages()">
                        <p class="valid"> </p>
                    </label>
                    <label class="style">Age :
                        <input type="number" id="age" class="age">

                    </label>
                    <label class="style">Class :
                        <select name="" id="selectbox" class="selectbox">
                            <option class="text" value=" "></option>
                            <option class="text" value="I">I</option>
                            <option class="text" value="II">II</option>
                            <option class="text" value="III">III</option>
                            <option class="text" value="IV">IV</option>
                            <option class="text" value="V">V</option>
                            <option class="text" value="VI">VI</option>
                            <option class="text" value="VII">VII</option>
                            <option class="text" value="VIII">VIII</option>
                            <option class="text" value="IX">IX</option>
                            <option class="text" value="X">X</option>
                            <option class="text" value="XI">XI</option>
                            <option class="text" value="XII">XII</option>
                        </select>
                    </label>

                </div>
                <div class="section3">
                    <label class="style">Gender:
                        <input type="radio" name="gender${count}" id="female" class="female" value="female">
                        <label for="female">Female</label>
                        <input type="radio" name="gender${count}" id="male" class="male" value="male">
                        <label for="male">Male</label><br>

                    </label>
                    <label>
                        <textarea name="" id="textarea" placeholder="Write About Yourself" class="textarea"
                            oninput="checkDetail(this)"></textarea>
                        <p class="valid"> </p>
                    </label>


                    <div class="submitact">
                        <label class="style"><button type="button" class="addbtn disabled">Add</button></label>
                    </div>
                </div>`
        ;
    container.appendChild(newdata);
}

//validations 
//name
function strings(val) {
    if (!val.value) {
        val.nextElementSibling.style.display = "block";
        fname[count].style.borderColor= "red";
        val.nextElementSibling.innerHTML = "Fill name filed";
    } else if (!(str.test(val.value))) {
        val.nextElementSibling.style.display = "block";
        fname[count].style.borderColor= "black";
        val.nextElementSibling.innerHTML = "Strings only allow";
    }
    else {
        val.nextElementSibling.style.display = "none";
        fname[count].style.borderColor= "black";
        val.nextElementSibling.innerHTML = "";
    }
}
//role

function roles(val) {
    if (!val.value) {
        val.nextElementSibling.style.display = "block";
        role[count].style.borderColor= "red";
        val.nextElementSibling.innerHTML = "Fill role filed";
    } else if (!(str.test(val.value))) {
        val.nextElementSibling.style.display = "block";
        role[count].style.borderColor= "black";
        val.nextElementSibling.innerHTML = "Invaild role";
    }
    else {
        val.nextElementSibling.style.display = "none";
        role[count].style.borderColor= "black";
        val.nextElementSibling.innerHTML = "";
    }
}
//email validation
function emails(val) {
    if (!val.value) {
        val.nextElementSibling.style.display = "block";
        email[count].style.borderColor= "red";
        val.nextElementSibling.innerHTML = "Fill email filed";
    } else if (!(re.test(val.value))) {
        val.nextElementSibling.style.display = "block";
        email[count].style.borderColor= "black";
        val.nextElementSibling.innerHTML = "Invaild email";
    }
    else {
        val.nextElementSibling.style.display = "none";
        email[count].style.borderColor= "black";
        val.nextElementSibling.innerHTML = "";
    }
}
//dob
function dobs() {
    let today = new Date();
    let daa = new Date(dob[count].value);
    let valdob = document.getElementsByClassName("valdob");

    if (daa > today) {
        valdob[count].textContent = "invalid DOB";
        valdob[count].style.color = "red";
        role[count].style.borderColor = "red";
    }
    else {
        valdob[count].textContent = "";
        role[count].style.borderColor = "black";

    }
}
//age conversation
function ages() {
    const dobInput = document.getElementsByClassName("dob")[count].value;
    let x = new Date(dobInput);
    let y = new Date();
    let z = y - x;
    let ms = z / 1000;
    let s = ms / 60;
    let mi = s / 60;
    let hour = mi / 24;
    let day = hour / 1;
    let year = Math.floor(day / 365);
    //console.log(year);
    document.getElementsByClassName("age")[count].value = year;
}

// gender
function checkgender(count) {
    if (!((male[count].checked == false) && (female[count].checked == false))) {
        if (male[count].checked == true) {
            return male[count].value
        } else {
            return female[count].value
        }
    }
}




// word count

function checkDetail(val) {
    if (val.value == "") {
        val.nextElementSibling.style.display = "block";
        details[count].style.borderColor= "red";

    }
    else if (((val.value.length < 10) || (val.value.length > 200))) {
        val.nextElementSibling.style.display = "block";
        val.nextElementSibling.style.color = "red";
        details[count].style.borderColor= "black";
        val.nextElementSibling.innerHTML = " More than 10 words to less than 200 words";
    }
    else {
        val.nextElementSibling.style.display = "none";
        details[count].style.borderColor= "black";
        val.nextElementSibling.innerHTML = "";
    }
    // console.log(details.value.length)
}