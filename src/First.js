import './First.css';
import useFetch from "./useFetch";
    // const First = (blogsFirst,title) => {
        const First = () => {
        const{data, isLoading:loadingFirst, isError:errorFirst}  = useFetch( 'http://localhost:8001/blogs','error from second comp')
        // const data = blogsFirst;
        return ( 
            <div className="blog-list">
                {/* <h2 className="">{title}</h2> */}
                <h2>First Blogs</h2>
                <hr></hr>
                 {loadingFirst && <div>Loading....</div>}
                 {errorFirst && <div>{errorFirst}</div>}
                {/* {blogs_content.map(blog =>( */}
                    {/* {isError && <div>{isError}</div>} */}
                {data&& data.map(blog =>(
                    <div className="blog-preview" key={blog.id} >
                        <h2>{blog.title}</h2>
                        <p>written by {blog.author}</p>  
                        {/* <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>                 */}
                    </div>
                ))}
            </div>
        );
}
 
export default First;