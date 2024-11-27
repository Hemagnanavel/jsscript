let form = document.getElementById("form");
const fname = document.getElementById("fname");
const role = document.getElementById("role");
const email = document.getElementById("email");
const dob = document.getElementById("dob");
const std = document.getElementById("std");
const gender = document.getElementById("gender");
const textBox = document.getElementById('textBox');
const male = document.getElementById('male');
const female = document.getElementById('female');
function addStudent() {
    let role = document.sample.rollno.value;
    let name = document.sample.name.value;
    let email = document.sample.email.value;
    let dob = document.sample.dob.value;
    let age = document.sample.age.value;
    let gender = document.sample.gender.value;
    let std = document.sample.std.value;


    let tr = document.createElement('tr');

    let td1 = tr.appendChild(document.createElement('td'));
    let td2 = tr.appendChild(document.createElement('td'));
    let td3 = tr.appendChild(document.createElement('td'));
    let td4 = tr.appendChild(document.createElement('td'));
    let td5 = tr.appendChild(document.createElement('td'));
    let td6 = tr.appendChild(document.createElement('td'));
    let td7 = tr.appendChild(document.createElement('td'));
    td1.innerHTML = name;
    td2.innerHTML = role;
    td3.innerHTML = email;
    td4.innerHTML = dob;
    td5.innerHTML = age;
    td6.innerHTML = gender;
    td7.innerHTML = std;


    document.getElementById("tbl").appendChild(tr);
}

//form validation


//let x = document.forms["myForm"]["fname"].value;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputsvalue = [fname, role, email, dob, std, gender, textBox];
    console.log(inputsvalue);
    let invaildinput = false;
    inputsvalue.forEach(element => {
        if (!element.value){
            invaildinput = true;
        alert(" All Inputs Field are must be filled");
        }
    });
    if (!male.checked &&  !female.checked) {
        alert(" All Inputs Field are must be filled");
        invaildinput = true;
    }
    if (!invaildinput) {
        addStudent();
        form.reset();
    }
})
// word count
const maxWords = 200;

textBox.addEventListener('input', () => {
    const words = textBox.value.trim().split(' ');
    const wordCount = words.length;

    if (wordCount > maxWords) {
        textBox.value = words.slice(0, maxWords).join(' ');
    }

    document.getElementById('wordCount').innerText = `${wordCount} / ${maxWords}`;
});

//age conversation
function ages() {
    const dobInput = document.getElementById("dob").value;
    let x = new Date(dobInput);
    let y = new Date();
    let z = y - x;
    let ms = z / 1000;
    let s = ms / 60;
    let mi = s / 60;
    let hour = mi / 24;
    let day = hour / 1;
    let year = Math.floor(day / 365);
    console.log(year);
    document.getElementById("age").value = year;
}
//email validation
let re = /\S+@\S+\.\S+/;
function emails() {
    console.log(email.value);
    let valemail = document.getElementById("valemail");
    if (!re.test(email.value)) {
        valemail.textContent = "invalid email id";
        valemail.style.color = "red";
        email.style.borderColor = "red";
    }
    else {
        valemail.textContent = "";
        email.style.borderColor = "black";

    }
}
//limited character
function isNumber(event) {
    let keycount = event.keycount;
    if (keycount > 10 && keycount < 30) {
        return true;
    }
    return false;
}


// name 
let reg = /^[a-zA-Z\-'#(),"]*$/;

function strings() {

    let valname = document.getElementById("valname");
    if (!reg.test(fname.value)) {
        valname.textContent = "invalid name";
        valname.style.color = "red";
        fname.style.borderColor = "red";
    }
    else {
        valname.textContent = "";
        fname.style.borderColor = "black";

    }
}
//role
let regs = /^[a-zA-Z\-'#(),"]*$/;

function roles() {

    let valrole = document.getElementById("valrole");
    if (!regs.test(role.value)) {
        valrole.textContent = "invalid name";
        valrole.style.color = "red";
        role.style.borderColor = "red";
    }
    else {
        valrole.textContent = "";
        role.style.borderColor = "black";

    }
}
//dob

function dobs() {
    let today = new Date();
    let daa = new Date(dob.value);
    let valdob = document.getElementById("valdob");

    if (daa > today) {
        valdob.textContent = "invalid DOB";
        valdob.style.color = "red";
        role.style.borderColor = "red";
    }
    else {
        valdob.textContent = "";
        role.style.borderColor = "black";

    }
}