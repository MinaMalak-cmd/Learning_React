import { useState } from "react";
import { useHistory } from "react-router";

const CreateBlog = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('mina');
    const [isPending,setIsPending] = useState(false);
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);
        const blog= {title, body, author};
        fetch('http://localhost:8002/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/JSON"},
            body: JSON.stringify(blog)
        }).then((response)=>{
            if(!response.ok){
                throw Error('enter data in a right format')
            }
            else{
                setIsPending(false);
                console.log('new blog added')
                history.push('/')
            }
        }).catch((error)=>{
            console.log("please enter right data");
            console.log(error.message)
        })
    }
    return ( 
       <div className="create">
           <h2>Create a new Blog</h2>
           <form onSubmit={(e)=>handleSubmit(e)}>
                <label>Blog Title:</label>
                <input 
                type="text" 
                required
                value={title}
                onChange={e => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea 
                type="text" 
                required
                value={body}
                onChange={e => setBody(e.target.value)}
                ></textarea>                
                <label>Author:</label>
                <select
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="mina">mina</option>
                    <option value="ahmed">ahmed</option>
                </select>
               {!isPending&& <button>Add Blog</button>}
               {isPending && <button disabled>Loading....</button> }
           </form>
       </div>
     );
}
 
export default CreateBlog;