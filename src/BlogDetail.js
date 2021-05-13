import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetail = () => {
    const {id} = useParams();
    const {data:blog, isLoading, isError} = useFetch('http://localhost:8002/blogs/'+id ,"sorry Id doesn't exist")
    const history = useHistory();
    const handleDelete = ()=>{
        fetch('http://localhost:8002/blogs/'+blog.id,{
            method:'DELETE'
        }).then((res)=>{
            if(!res.ok){
                throw Error('enter data in a right format');
            }
            else{
               history.push('/');
            }
        }).catch((error)=>{
            console.log("please enter right data");
            console.log(error.message)
        })
   }
    return (
        <div className="blog-details">
            {isLoading && <div>Loading ....</div> }
            {isError && <div>{isError}</div> }
            {blog && 
                <section>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={() =>handleDelete()}>delete blog</button>
                </section> 
            }

        </div>

     );
}
export default BlogDetail;