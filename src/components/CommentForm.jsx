import {useState} from 'react' 

const CommentForm = (props) => {
    const {inputs: {title, content, commentType}} = props    

    // handleChange
    const handleSubmit = () => {
        const [newComment, setNewComment] = useState({
            title: "",
            content: "",
            commentType: ""
        })
        
    }
    return (
        <>
            <form onClick={handleSubmit}>
                <input 
                type="text"
                name="title" 
                value={title}
                onChange={handleChange}
                />
                <textarea 
                name="content" 
                value={content}
                onChange={handleChange}
                cols="30" 
                rows="10"/>
                <select>
                    <option value="faction">Faction</option>
                    <option value="creator">Creator</option>
                    <option value="general">General</option>
                </select>
                <button>Submit Comment</button>
            </form>
        </>
    )
}