import { Link, useNavigate } from "react-router-dom"
import { CommentAndDataContext } from "./context/CommentAndDataContext"
import { useContext } from "react"
import { UserContext } from "./context/UserContext"
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
                        <a href="https://www.warhammer.com/en-US/home" style={{padding: 15}}>Gamesworkshop | ForgeWorld</a>
                    </div>
                    <div className="nav--link">
                        <Link to={'/'} style={{padding: 15}}>Home</Link>
                    </div>
                    <div className="nav--link">
                        <a href="https://www.blacklibrary.com/" style={{padding: 15}}>Black Library</a>
                    </div>
                </div>
            </div>

        </>
    )
}

const Home = () => {
    const { factions, creators } = useContext(CommentAndDataContext)

    const {logout} = useContext(UserContext)

    const bigThree = creators.map(thirdParty => (
        <div key={thirdParty._id}className="home--preview--box">
            <img style={{width: 200}} src={thirdParty.imgUrl} />
            <div>
                <Link to={`/creators/${thirdParty._id}`} >{thirdParty.name}</Link>
            </div>
            
        </div>
    ))
    const categoryBanner = factions.map(faction => (
        <span className="catagory--choice" key={faction._id} style={{padding: 5}}>
            <Link to={`/factions/${faction._id}`}>
                {faction.name}
            </Link>
        </span>
    ))

    
    return (
        <>
            <div className="page--home">
                <nav>
                    {/* Each subject below gets a link to it's relevant page element */}
                    <Link to={'/creators'} style={{padding: 15}}>
                    Creators
                    </Link>
                    <Link to={'/about'} style={{padding: 15}}>
                    About
                    </Link>
                    <Link to={'/factions'} style={{padding: 15}}>
                    Factions
                    </Link>
                </nav>
                    <button onClick={logout}>Logout</button>

                    <div className="creator--previews">
                        {/* Home preview for the SODAZ, Boylan and Pedersen */}
                        {bigThree}
                    </div>
                    <div className="content--categories">
                        {/* Flex line of span elements with a different faction name in each one */}
                        {categoryBanner}
                    </div>
                    <div className="original--content--previews">

                        {/* Lore Realted Content */}
                        <div className="original--content">
                            <img src={``} />
                            <Link to={`/(Lore Component with a list of third party loremasters)`} style={{padding: 15}}>Lore</Link>
                        </div>
                    
                        {/* Mini-Painting Realted Content */}
                        <div className="original--content">
                            <img src={``} />
                            <Link to={`/(Painting Component with a list of recommended paint providers)`} style={{padding: 15}}>Painting</Link>
                        </div>
                    
                        {/* GW-produced animations */}
                        <div className="original--content">
                            <img src={``} />
                            <Link to={`/(OriginalAnimation component with a list of GW-produced animations with the 
                                lead director/animator/writer names accredited to each animation)`} style={{padding: 15}}>Original Animations</Link>
                        </div>

                        <div className="comments">
                                <Link to={`/comment-section`} style={{padding: 5}}>Comment Section</Link>
                        </div>

                        <div className="comments">
                                <Link to={`/signup`} style={{padding: 5}}>Signup Page</Link>
                        </div>
                    
                    </div>

            </div>
            {Footer()}
        </>
    )
}
const About = () => {
    return (
        <>
            <div className="page--about">
                <h1>About</h1>

                <h3>What is Warhammer 40,000?</h3>
                <h5>In the darkness of the far future, there is only war...</h5>

                <p>Warhammer 40,000 is noted for its science fantasy setting in the distant future, 
                    where a stagnant human civilisation is beset by hostile aliens and supernatural creatures. 
                    The models in the game are a mixture of humans, aliens, and supernatural monsters wielding 
                    futuristic weaponry and supernatural powers. The fictional setting of the game has been developed 
                    through a large body of novels published by Black Library (Games Workshop's publishing division). 
                    Warhammer 40,000 was initially conceived as a science fiction counterpart to Warhammer Fantasy Battle, 
                    a medieval fantasy wargame also produced by Games Workshop with which 40,000 shares a number of tropes 
                    and concepts despite not being set in the same universe. The game has received widespread praise for the 
                    tone and depth of its setting, and is considered the foundational work of the grimdark genre of speculative fiction.</p>
            </div>
            {Footer()}
        </>
    )
}
const Factions = () => {
    const {factions} = useContext(CommentAndDataContext)
    console.log(factions)
    const listOfFactions = factions.map(faction => (
        <div className="faction--preview">
            <img style={{width: 100}}src={`${faction.imgUrl}`} />
            <div className="page--link">
                <Link to={`/factions/${faction._id}`} className="faction--link" style={{padding: 15}} key={faction._id}>{faction.name}</Link>
            </div>
        </div>
    )) 
    return (
        <>
            <div className="faction--list--page">
                {listOfFactions}
            </div>
            {Footer()}
        </>
    )
}
const Creators = () => {
    const {creators} = useContext(CommentAndDataContext)
    
    const listOfCreators = creators.map(person => (
        <div key={person._id} className="creator--preview">
            <img style={{width: 100}} src={person.imgUrl} />
            <div className="page--preview">
                <Link to={`/creators/${person._id}`} style={{padding: 5}}>{person.name}</Link>
            </div>
        </div>
    ))
    return (
        <>
            <div className="creator--list--page">
                Third Party Creators:
                {/* Output for a map function to give for a link to each individual's personal CreatorDetails page */}
                <div>
                    {listOfCreators}
                </div>
            </div>
            {Footer()}
        </>
    )
}

export {Masthead, Home, Footer, About, Factions, Creators}