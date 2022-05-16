import './App.css';
import NavigationBar from "./components/NavigationBar"
import Intro from "./components/Intro"
import Trending from "./components/Trending"
import Movie from "./components/Movie"
import Footer from "./components/Footer"
import "./style/landingpage.css"

function App() {
  return (
   <div>
     {/* Intro */}
      <div className='myBg'>
        <NavigationBar />
        <Intro />
      </div>
      {/* End Of Intro */}
      
      {/* Trending Movie */}
      <div className='trending' id='trending'>
        <Trending />
      </div>
      {/* End Of Trending Movie */}
      
      {/* Movie */}
      <div className='movie' id='movie'>
        <Movie />
      </div>
      {/* End Of Movie */}
      
      {/* Footer */}
      <div className='footer'>
        <Footer />
      </div>
      {/* End Of Footer */}
   </div>
  );
}

export default App;
