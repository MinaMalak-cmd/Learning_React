import { useParams } from "react-router-dom";
const BlogDetail = () => {
    const {id} = useParams();
    return ( 
        <div>{id}
        trial
        </div>

     );
}
export default BlogDetail;