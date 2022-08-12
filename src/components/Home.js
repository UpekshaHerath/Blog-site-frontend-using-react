import { useState, useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {
    //This hook is use to two way data binding like process. We can provide a default value. And we can update and render later in the DOM
    const [blogs, setBlogs] = useState(null);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    // use effect hook executes after each rander of the application
    // but when we pass a empty array as a parameter then it only renders when the first time this page renders
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data);
                setBlogs(data);
            })
    }, []);

    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />}
            {blogs && <BlogList blogs={blogs.filter(blog => blog.author === "Upeksha")} title="Upeksha Blogs" handleDelete={handleDelete}/>}
        </div>
    );
}

export default Home;