import BlogList from "./BlogList"
import useFetch from "./useFetch"
const Home = () => {
   
    const {data:blogs, isError, isLoading} = useFetch('http://localhost:8002/blogs',"please check your network connection") 
    return ( 
        <div className="home" >
           {isLoading && <div>Loading....</div>}
           {isError && <div>{isError}</div>}
           {blogs&& !isError && <BlogList blogs_content={blogs} title='All Blogs' />}
        </div>
     );
}
 
export default Home;