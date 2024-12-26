const password = document.getElementById("password");
const power = document.getElementById("power-point");
const passwordvalid = [/[0-9]/, /[a-z]/, /[A-Z]/, /[^0-9a-zA-Z]/];
function passwordcheck () {
    let index = 0;
    let value = password.value;
    let widthPower = ["1%","25%","50%","75%","100%"];
    let colorPower = ["red","orange","yellow","#3ba62f","green"];
    if (value.length >= 6) {
        passwordvalid.forEach((check) => {
            if (check.test(value)) {
                index += 1;
                // console.log(check.test(value));
                //console.log(check);
                //console.log(index);
            }
        });
    }
    power.style.width = widthPower[index];
    power.style.backgroundColor = colorPower[index];
};