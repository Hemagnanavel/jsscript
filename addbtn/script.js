let form = document.querySelector("form");
const fname = document.getElementsByClassName("name");
const email = document.getElementsByClassName("email");
const role = document.getElementsByClassName("role");
const dob = document.getElementsByClassName("dob");
const age = document.getElementsByClassName("age");
const selectBox = document.getElementsByClassName("selectbox");
const male = document.getElementsByClassName("male");
const female = document.getElementsByClassName("female");
const addbtn = document.getElementsByClassName("addbtn");
let details = document.getElementsByClassName("textarea");
let table = document.querySelector("table");
let re = /\S+@\S+\.\S+/;
let reg = /^[a-zA-Z\-'#(),"]*$/;
let regs = /^[a-zA-Z\-'#(),"]*$/;
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
                <label>Name :
                    <input type="text" id="name" class="name" oninput="strings()">
                    <div>
                        <span class="valname"></span>
                    </div>
                </label>

                <label>Role :
                    <input type="text" id="role" oninput="roles()" class="role">
                    <div>
                        <span class="valrole"></span>
                    </div>
                </label>
                <label>Email
                    <input type="text" class="email" id="email" oninput="emails()">
                    <div>
                        <span class="valemail"></span>
                    </div>    
                </label>
                <label>DOB :
                    <input type="date" id="dob" class="dob" oninput="dobs()" onchange="ages()">
                    <div>
                        <span class="valdob"></span>
                    </div>
                </label>
                <label>Age :
                    <input type="number" id="age" class="age">

                </label>
                <label>Class :
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
                <label>Gender:
                    <input type="radio" name="gender${count}" id="female" class="female" value="female">
                    <label for="female">Female</label>
                    <input type="radio" name="gender${count}" id="male" class="male" value="male">
                    <label for="male">Male</label><br>

                </label>
                <label>
                    <textarea name=""  id="textarea" placeholder="Write About Yourself" class="textarea" oninput="checkDetail(this)"></textarea>
                    <p class="valid"> </p>
                </label>

            </div>
            <div class="submitact">
                <label><button type="button" class="addbtn disabled">Add</button></label>
            </div>`
        ;
    container.appendChild(newdata);
}

//validations 
//name
function strings() {

    let valname = document.getElementsByClassName("valname");
    // console.log(fname[0].value);
    // console.log(reg,"hjkjh");
    if (!reg.test(fname[count].value)) {
        valname[count].textContent = "invalid name";
        valname[count].style.color = "red";
        fname[count].style.borderColor = "red";
    }
    else {
        valname[count].textContent = "";
        fname[count].style.borderColor = "black";

    }
}
//role
function roles() {

    let valrole = document.getElementsByClassName("valrole");
    if (!regs.test(role[count].value)) {
        valrole[count].textContent = "invalid name";
        valrole[count].style.color = "red";
        role[count].style.borderColor = "red";
    }
    else {
        valrole[count].textContent = "";
        role[count].style.borderColor = "black";

    }
}
//email validation

function emails() {
    // console.log(email[0].value);
    // console.log(re);
    let valemail = document.getElementsByClassName("valemail");
    if (!re.test(email[count].value)) {
        valemail[count].textContent = "invalid email id";
        valemail[count].style.color = "red";
        email[count].style.borderColor = "red";
    }
    else {
        valemail[count].textContent = "";
        email[count].style.borderColor = "black";
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

    }
    else if (((val.value.length < 10) || (val.value.length > 200))) {
        val.nextElementSibling.style.display = "block";
        val.nextElementSibling.style.color = "red";
        val.nextElementSibling.innerHTML = " More than 10 words to less than 200 words";
    }
    else {
        val.nextElementSibling.style.display = "none";
        val.nextElementSibling.innerHTML = "";
    }
    // console.log(details.value.length)
}