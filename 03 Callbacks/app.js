let posts=[
    {title:'Post One',body:'This is post one'},
    {title:'Post Two',body:'This is post two'}
]

function createPost(post,callback){
    setTimeout(function(){
        posts.push(post);
        callback();
    },2000);
}

function getPosts(){
    let output=document.createElement('ul');
    
    setTimeout(function(){
        posts.forEach(function(post){
            let li=document.createElement('li');
            li.innerHTML=post.title;
            output.appendChild(li);
        });
        console.log(output);
        document.body.children[0].insertBefore(output,document.body.children[0].childNodes[0]);
    },1000)
    
}

createPost({title:'Post Three',body:'This is post three'},getPosts)

// document.getElementById('btn').addEventListener('click',function(e){
//     let title=document.querySelector('input').value;
//     post={title:title,body:'This is post body'};
//     createPost(post,getPosts);
//     e.preventDefault();
// });
