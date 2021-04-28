import BlogList from "./BlogList"
import useFetch from "./useFetch"
import First from "./First";
const Home = () => {
   
    const {data:blogs, isError, isLoading} = useFetch('http://localhost:8000/blogs',"please check your network connection") 
    // const{data:blogsFirst, isLoading:loadingFirst, isError:errorFirst}  = useFetch( 'http://localhost:8001/blogs','error from second comp')
    //     [
    //     {title:"Sports",body:"hello this is first article", author:"Mina", id:1},
    //     {title:"Economy",body:"hello this is second article", author:"Mario", id:2},
    //     {title:"Politics",body:"hello this is third article", author:"Ahmed", id:3},
    //     {title:"Journalism",body:"hello this is fourth article", author:"Mina", id:4}      
     
    // ])
    // const dates =[
    //     {date:"2/4/2010"},
    //     {date:"4/4/2020"},
    //     {date:"5/4/2030"}
    // ]
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id!==id);
    //     setBlog(newBlogs)
    // }
   
    return ( 
        <div className="home" >
           {/* <BlogList blogs_content={blogs} title={dates}/> */}
           {isLoading && <div>Loading....</div>}
           {isError && <div>{isError}</div>}
           {blogs&& !isError && <BlogList blogs_content={blogs} title='All Blogs' />}
           {/* <BlogList blogs_content={blogs.filter(blog => blog.author==="Mina")} title='Mina Blogs' handleDelete={handleDelete} /> */}
           {/* {loadingFirst && <div>Loading....</div>}
           {errorFirst && <div>{errorFirst}</div>} */}
           {/* {blogsFirst&& !errorFirst && <First blogsFirst={blogsFirst} title='First Blogs' />} */}
           {<First />}
        </div>
     );
}
 
export default Home;