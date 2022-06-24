const ArticleImages = ({title,src }) => {
    return (
        
        <div className='grid justify-items-center'>
          <img className=' rounded-lg w-[1000px] object-cover h-[320px]' src={src} alt="article image" />

           <h3 className=' pt-[30px] text-2xl font-bold  '>{title}</h3> 
        </div>
        
        
        
    )
}

export default ArticleImages;