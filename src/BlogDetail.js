import { useParams } from "react-router-dom";
const BlogDetail = () => {
    const {id} = useParams();
    return ( 
        <div>{id}</div>
     );
}
export default BlogDetail;