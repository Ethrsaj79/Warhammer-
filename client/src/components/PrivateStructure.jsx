import { Link, Navigate, useNavigate } from "react-router-dom"
import { CommentAndDataContext } from "./context/CommentAndDataContext"
import { useContext } from "react"
import { AuthPage } from "./AuthPage"
import { useState } from "react"

const initValue = {
    commentType: "",
    title: "",
    content: "",
    user: ""
}

const Footer = () => {
    const navigate = useNavigate()
    return(
        <>
            <div className="page--footer">
                <div className="navigation--buttons">
                    <button onClick={() => navigate(-1)}>Back</button>
                    <button onClick={() => navigate(1)}>Forward</button>
                </div>
            </div>
        </>
    )
}
const Masthead = () => {
    return (
        <>
            <div className="site--masthead">
                <h1>Warhammer + </h1>
                <div className="masthead--nav" style={{display: "flex"}}>
                    <div className="nav--link">
                        <a href="http://" style={{padding: 15}}>Gamesworkshop | ForgeWorld</a>
                    </div>
                    <div className="nav--link">
                        <Link to={'/'} style={{padding: 15}}>Home</Link>
                    </div>
                    <div className="nav--link">
                        <a href="http://" style={{padding: 15}}>Black Library</a>
                    </div>
                </div>
            </div>

        </>
    )
}

const NewCommentForm = () => {
    const { newComment } = useContext(CommentAndDataContext)
    
    const storedUser = JSON.parse(localStorage.getItem("user")) 

    const [userComment, setUserComment] = useState(initValue)

    const handleChange = (e) => {
        const {name, value} = e.target
        setUserComment(prevData => ({
            ...prevData,
            // Token user parameter
            // user: storedUser.username,
            // Non-token user parameter
            user: '',
            [name]: value
        }))
        // console.log(value)
        
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userComment)
        newComment(userComment)
        setUserComment(initValue)
    }
    return(
        <form className="comment--form" onSubmit={handleSubmit}>
            <div style={{padding: 10}}className="comment--headers">
                {/* Comment Type Checkbox */}
                <select 
                    style={{margin: 5, fontFamily:'Brush Script MT', fontStyle: 'oblique'}}
                    onChange={handleChange}
                    name="commentType"
                    value={userComment.commentType.value}
                >
                    <option style={{fontFamily:'Brush Script MT', fontStyle: 'oblique'}}value="default">Select Comment Type</option>
                    <option style={{fontFamily:'Brush Script MT', fontStyle: 'oblique'}}value="Faction">Faction</option>
                    <option style={{fontFamily:'Brush Script MT', fontStyle: 'oblique'}}value="Creator">Creator</option>
                    <option style={{fontFamily:'Brush Script MT', fontStyle: 'oblique'}}value="General">General</option>
                </select>
                <br />
                {/* Title input */}
                <input 
                style={{fontFamily:'Brush Script MT', fontStyle: 'oblique'}}
                type="text" 
                placeholder="Comment Title" 
                name="title"
                value={userComment.title}
                onChange={handleChange}
                />
            </div>
            {/* Content textarea */}
            <textarea 
            style={{fontFamily:'Brush Script MT', fontStyle: 'oblique'}}
            cols="30" 
            rows="10"
            placeholder=""
            name="content"
            onChange={handleChange}
            value={userComment.content}
            />
            <br />
            <button>Submit Comment</button>
        </form>
    )
}

const CommentSection = () => {
    const { comments } = useContext(CommentAndDataContext)

    const factionCategory = comments.filter(entry => entry.commentType === "Faction")
    const factionLayout = factionCategory.map(category => (
            <div className="comment--card" key={category._id}>
                <h4>{category.title}</h4>
                {/* <br /> */}
                <h6>{category.content}</h6>
            </div>
        ))

    const creatorCategory = comments.filter(entry => entry.commentType === "Creator")
    const creatorLayout = creatorCategory.map(category => (
            <div className="comment--card" key={category._id}>
                <h4>{category.title}</h4>
                {/* <br /> */}
                <h6>{category.content}</h6>
            </div>
        ))

    const generalCategory = comments.filter(entry => entry.commentType === "General")
    const generalLayout = generalCategory.map(category => (
            <div className="comment--card" key={category._id}>
                <h4>{category.title}</h4>
                {/* <br /> */}
                <h6>{category.content}</h6>
            </div>
        ))

    


        // console.log(commentCategory)
    return(
        <>
            {NewCommentForm()}

            <div>
                    <h1 style={{fontFamily: 'Brush Script MT', fontStyle: 'oblique'}}>
                        Comment Section List:
                    </h1>
                <div>
                    <h3 style={{fontFamily: 'Brush Script MT', fontStyle: 'oblique'}}>
                        Faction Comments:
                    </h3>
                    <br />
                    {factionLayout}
                </div>
                <div>
                    <h3 style={{fontFamily: 'Brush Script MT', fontStyle: 'oblique'}}>
                        Creator Comments:
                    </h3>
                    {creatorLayout}
                </div>
                <div>
                    <h3 style={{fontFamily: 'Brush Script MT', fontStyle: 'oblique'}}>
                        General Comments:
                    </h3>
                    {generalLayout}
                </div>
            </div>
        </>
    )
}
export {Masthead, Footer, CommentSection}