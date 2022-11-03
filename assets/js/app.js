let cl = console.log;

const stdInfo = document.getElementById("stdInfo");
const fnameControl = document.getElementById("fname")
const lnameControl = document.getElementById("lname")
const emailControl = document.getElementById("email")
const contactControl = document.getElementById("contact")
const info = document.getElementById("info");

let stdArray = [];

function uuid(mask = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx') {
    return `${mask}`.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}

const onStdSubmit = (eve) => {
    eve.preventDefault();
    let obj = {
        fname : fnameControl.value,
        lname : lnameControl.value,
        email : emailControl.value,
        contact : contactControl.value,
        id : `js${uuid()}`,
    }
    stdArray.push(obj);
    templating(stdArray);
    eve.target.reset();
}

const templating = (arr)=>{
    arr.forEach((ele,i) => {
        cl(ele);
        arr.forEach((ele,i) => {
            cl(ele);
            let tr =document.createElement("tr");
            tr.innerHTML = `
                            <td>${i+1}</td>
                            <td>${ele.fname}</td>
                            <td>${ele.lname}</td>
                            <td>${ele.email}</td>
                            <td>${ele.contact}</td>
                            <td><button  class="btn btn-info" onClick="onStdEdit(this)">Edit</button></td>
                            <td><button  class="btn btn-danger" onClick="onStdDelete(this)">Delete</button></td>
                          `;
            info.append(tr);
        })
    })
}


stdInfo.addEventListener("submit", onStdSubmit);
