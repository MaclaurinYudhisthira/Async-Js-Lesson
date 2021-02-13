

document.getElementById('btn3').addEventListener('click',getJokes);

function getJokes(e){
    const XHR=new XMLHttpRequest();

    let number=document.querySelector('input').value;

    XHR.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);

    XHR.onload=function(){
        if(this.status===200)
        {
            const jokes= JSON.parse(this.responseText)

            const before=`<table class="u-full-width">
                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>Joke</th>
                                </tr>
                            </thead>
                            <tbody>`

            const after=`   </tbody>
                        </table>`

            let output=''
            console.log(jokes)
            jokes.value.forEach(element => {
                output+=`<tr>
                            <td>${element.id}</td>
                            <td>${element.joke}</td>
                        </tr>`
            });
    
            document.getElementById('data3').innerHTML=before+output+after;
        }
    }

    XHR.send();
}