export const AuthForm = (props) => {
    const {
        btnTxt, 
        handleSubmit, 
        handleChange,
        // errMsg,
        inputs: {
            username, 
            userpassword,
        }
    } = props
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                value={username}
                name="username" 
                onChange={handleChange}
                />
                <input 
                type="text" 
                value={userpassword}
                name="userpassword" 
                onChange={handleChange}
                />
                <button>{btnTxt}</button>
            </form>
            <div className="error--msg--notification">
                {/* <p>{errMsg}</p> */}
            </div>
        </>
    )
}