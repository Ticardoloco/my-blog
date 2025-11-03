import BlogPage from "./blogPage";
import Header from "./header";

const Html = () => {
    return (
        <div className="w-full min-h-screen bg-gray-300">
            <Header />
            <BlogPage />
        </div>
    );
}
 
export default Html;