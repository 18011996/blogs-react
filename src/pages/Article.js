import { useParams } from "react-router-dom";
import ArticleImages from "../component/molecules/ArticleImages"
import { BLOGS } from './Main'

const getBlog = (title) => {
    return BLOGS.find(blog => blog.title === title);
}

const Article = () => {
    const { article } = useParams();
    const blog = getBlog(article)
    return (
        <div className='grid justify-center items-center mt-[20px]'>
        <div className='   w-[1000px] rounded-lg '>
            {
                blog &&
                <div className="">
                    <ArticleImages className=' ' src={blog.img} title={blog.title} />
                    <div className="w-[1000px] text-justify text-xl font-normal pt-[20px]">
                        {blog.description}
                    </div>
                </div>
            }
        </div>
        </div>
    )
}
export default Article;