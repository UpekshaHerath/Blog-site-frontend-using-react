import BlogList from "./BlogList";
import useFetch from "../useFetch";

const Home = () => {
    //This hook is use to two way data binding like process. We can provide a default value. And we can update and render later in the DOM
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    // use effect hook executes after each rander of the application
    // but when we pass a empty array as a parameter then it only renders when the first time this page renders

    return (
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} title="All Blogs"/> }
        </div>
    );
}

export default Home;