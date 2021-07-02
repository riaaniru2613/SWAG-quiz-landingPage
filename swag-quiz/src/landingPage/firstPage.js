import "./firstPage.css"

const firstPage = () => {
    return (
        <div className = "background">
            <div className = "logo">
                <a href = "https://placeholder.com"><img src="https://via.placeholder.com/150" alt = "placeholder"/></a>
                <h1 className = "heading">SWaG</h1>

            </div>

            < div className="title">
                <a href = "https://placeholder.com"><img src="https://via.placeholder.com/250" alt = "placeholder"/></a>
                <p>
                    <div className = "tag-wrapper">
                    <h1 className = "tag"> We Are SWaG</h1>
                    </div>
                <h2 className = "motto">Action.  Not just Education.</h2></p>
                <br/>
            
                <button type="button" className="btn">
                    Know Your Water
                </button> 
           
           </div> 

              
    
        </div>
    )
}

export default firstPage
