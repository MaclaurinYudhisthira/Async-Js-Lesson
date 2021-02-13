document.getElementById('btn1').addEventListener('click',loadData1);

const XHR=new XMLHttpRequest();

function loadData1(e){
    // const XHR=new XMLHttpRequest();

    XHR.open('GET','data.txt',true);

    XHR.onload=function(){
        if(this.status===200)
        {
            document.getElementById('data1').innerHTML=this.responseText;
        }
    }

    XHR.send();
}

document.getElementById('btn2').addEventListener('click',loadData2);

function loadData2(e){
    // const XHR=new XMLHttpRequest();

    XHR.open('GET','data1.json',true);

    XHR.onload=function(){
        if(this.status===200)
        {
            const user= JSON.parse(this.responseText)

            const output=`
            <ul>
                <li>Id: ${user.id}</li>
                <li>Full Name: ${user.full_name}</li>
                <li>Email: ${user.email}</li>
                <li>Gender: ${user.gender}</li>
            </ul>
            `
            document.getElementById('data2').innerHTML=output;
        }
    }

    XHR.send();
}

document.getElementById('btn3').addEventListener('click',loadData3);

function loadData3(e){
    // const XHR=new XMLHttpRequest();

    XHR.open('GET','data2.json',true);

    XHR.onload=function(){
        if(this.status===200)
        {
            const users= JSON.parse(this.responseText)

            const before=`<table class="u-full-width">
                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Location</th>
                                </tr>
                            </thead>
                            <tbody>`

            const after=`   </tbody>
                        </table>`

            let output=''
            console.log(users)
            users.forEach(element => {
                output+=`<tr>
                            <td>${element.id}</td>
                            <td>${element.full_name}</td>
                            <td>${element.email}</td>
                            <td>${element.gender}</td>
                        </tr>`
            });
    
            document.getElementById('data3').innerHTML=before+output+after;
        }
    }

    XHR.send();
}