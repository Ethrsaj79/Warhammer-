import { CommentAndDataContext } from "./context/CommentAndDataContext"
import { useContext } from "react"
import { useParams } from "react-router-dom"
import { Footer } from "./PublicStructure"


const FactionDetails = () => {
    const {factions} = useContext(CommentAndDataContext)
    console.log(factions)
    const factionId = useParams()
    console.log(factionId)
    const foundFaction = factions.find( faction => faction._id === factionId.factionId)
    console.log(foundFaction)
    return (
        <>
            <div className="faction--details">
                <h1 className="details--name">{foundFaction.name}</h1>
                <img className="details--img" src={foundFaction.imgUrl} />
                <p className="details--description">{foundFaction.summary}</p>
            </div>
            {Footer()}
        </>
    )
}


const CreatorDetails = () => {
    const {creators} = useContext(CommentAndDataContext)
    console.log(creators)
    const creatorId = useParams()
    console.log(creatorId)
    const foundCreator = creators.find( creator => creator._id === creatorId.creatorId)
    console.log(foundCreator)
    return (
        <>
            <div>
                <h1>{foundCreator.name}</h1>
                <img src={foundCreator.imgUrl} />
                <p>{foundCreator.summary}</p>
                <a href={foundCreator.primaryLink}>Link to Further Information on this Creator</a>
            </div>
            {Footer()}
        </>
    )
}

export {FactionDetails, CreatorDetails}