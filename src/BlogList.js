import {Link} from 'react-router-dom';
const BlogList = ({blogs_content,title}) => {
    // const BlogList = () => {
    //     const{data, isLoading, isError}  = useFetch( 'http://localhost:8001/blogs','error from second comp')
   return ( 
        <div className="blog-list">
            <h2 className="">{title}</h2>
            <hr></hr>
             {blogs_content.map(blog =>(
                // {isError && <div>{isError}</div>}
            //    { blogs_content.map(blog =>(
                 <div className="blog-preview" key={blog.id} >
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>  
                    <Link to={`/blogDetail/${blog.id}`}>Get details</Link>
                    {/* <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>                 */}
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;