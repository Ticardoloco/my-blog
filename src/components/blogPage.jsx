import useBlog from "../store/useBlog";

const BlogPage = () => {
    const blogs = useBlog((state)=> state.blogs);
    const removeBlog = useBlog((state)=> state.removeBlog);
    return (
        <div className="w-full min-h-screen relative">
            <h1 className="text-3xl sm:text-4xl text-gray-800 text-center mt-10 font-bold">All Blogs</h1>
                {blogs.length === 0 ? <p className="w-full mx-3 sm:max-w-5xl sm:mx-auto pt-5 text-2xl text-gray-800 ">Your blog page is empty. Click on the New blog button to create a blog</p> : ''}
            <div className="max-w-5xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-3 gap-8   mt-10">
                {blogs.map((blog)=>(
                    <div className="  bg-white rounded-2xl text-center flex flex-col items-center" key={blog.id}>
                        <img src={blog.imageURL} alt="image" className="w-full h-65 rounded-t-2xl" />
                        <h2 className="text-center text-lg sm:text-xl text-gray-800 font-medium pt-1">{blog.title}</h2>
                        <p className="text-base sm:text-lg text-center px-2 pb-2 text-gray-800 line-clamp-3 h-1/5">{blog.description}</p>
                        <button className="w-40 h-10 bg-gray-800 mb-4 rounded-3xl text-gray-200 font-medium cursor-pointer" onClick={() => removeBlog(blog.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default BlogPage;