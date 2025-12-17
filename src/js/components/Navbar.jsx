export const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-black bg-gradient">
            <div className="container-fluid">
                <a className="navbar-brand text-white " href="https://www.youtube.com/watch?v=f50VgPLaLcw" target="_blank"> <img src="https://static.wikia.nocookie.net/mogapedia/images/6/64/ItemIcon020f.png/revision/latest?cb=20130616123758&path-prefix=fr" alt="steak" width="40" height="40" className="d-inline-block align-text-top" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="https://www.youtube.com/shorts/sYdesN-_oss" target="_blank"><img src="https://static.wikia.nocookie.net/monsterhunter/images/7/7c/ItemIcon043c.png/revision/latest?cb=20100611135154" alt="Heal potion" width="30" height="30" className="d-inline-block align-text-top" /></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="https://www.youtube.com/shorts/OmRpLkYTU28" target="_blank"><img src="https://static.wikia.nocookie.net/monsterhunter/images/4/40/ItemIcon008f.png/revision/latest?cb=20100611124135" alt="Bones" width="30" height="30" className="d-inline-block align-text-top"/></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.youtube.com/shorts/WK_Gu1-z9pY" target="_blank"><img src="https://static.wikia.nocookie.net/monsterhunter/images/4/45/ItemIcon001.png/revision/latest/smart/width/250/height/250?cb=20100611123243" alt="insect" width="30" height="30" className="d-inline-block align-text-top"/></a>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </nav>
    )


}