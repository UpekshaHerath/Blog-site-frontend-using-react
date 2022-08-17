import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
                <label>Blog title : </label>
                <input type="text" required/>
                <label>Blog body : </label>
                <textarea required></textarea>
                <label>Blog author : </label>
                <select>
                    <option value="Upeksha">Upeksha</option>
                    <option value="Dilshan">Dilshan</option>
                    <option value="Herath">Herath</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
     );
}
 
export default Create;