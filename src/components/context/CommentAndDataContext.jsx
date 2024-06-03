import React, {useState, useEffect} from "react";
import axios from 'axios'
const CommentAndDataContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

const CommentAndDataContextProvider = (props) => {
    const [factions, setFactions] = useState([])
    const [creators, setCreators] = useState([])
    const [comments, setComments] = useState([])

    
    
    const getAllFactionData = async () => axios.get("/api/factions").then(res => (
        setFactions(res.data)
    ))
    
    const getAllCreatorData = async () => axios.get("/api/creators").then(res => (
        setCreators(res.data)
    ))
    const getAllCommentData = async () => userAxios.get("/api/main/user-comments/comment-list").then(res => {
            setComments(res.data),
            console.log(res.data)

    })
    const newComment = async (userComment) => userAxios.post(`api/main/user-comments/new`, userComment).then(res => console.log(res.data))
    
    useEffect(() => {
        getAllFactionData(),
        getAllCreatorData(),
        getAllCommentData()
    }, [])

    // console.log(factions)
    // console.log(creators)
    

    return(
        <CommentAndDataContext.Provider value={{
            factions, creators, comments, newComment
        }}>
            {props.children}
        </CommentAndDataContext.Provider>
    )
}

export {CommentAndDataContext, CommentAndDataContextProvider}


// allComments
// i like pie
// i like cats