import { Link } from "react-router-dom"

export default function Nav (props) {
    return (
        <header>
            <nav>
                <div className="icon-link">
                    <Link className="icon" to="/"><div>Reedable</div></Link>
                </div>
                <div className="">
                    <div>
                        <Link to><div>Mission</div></Link>  
                    </div>
                    <div>
                        <Link to>
                            <div>Join Us</div>
                        </Link>
                    </div>
                    <div>
                        <Link>Sign In</Link>
                        <Link>Sign Up</Link>
                    </div>
                    <div>
                        <Link to><div>Cart</div></Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}