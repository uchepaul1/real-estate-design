import './homePage.scss'
import SearchBar from '../../components/searchBar/SearchBar';

function HomePage(){
    return (
        <div className='homepage'>
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className='title'>Find Real Estate & Get Your Dream Place </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima et labore ea saepe velit veritatis, tempora placeat totam inventore, aliquid quam quod aut ipsa, fugit obcaecati laudantium odio! Dolores, assumenda.
                    </p>
                    <SearchBar />
    
                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Award Gained</h2>
                        </div>
                        <div className="box">
                            <h1>2000+</h1>
                            <h2>Property Ready</h2>
                        </div>
                        
                    </div>
                </div>
            </div>
    
    
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
      )
}

export default HomePage;