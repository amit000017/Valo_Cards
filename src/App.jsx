import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Card from "./components/card"


function App() {
  return (
    <>
      <Navbar/>
      <Footer/>
      <div className="cards">
      <Card title="Reyna" dis="Duelist" imgg="https://w0.peakpx.com/wallpaper/690/856/HD-wallpaper-valorant-reyna-games-microsoft-pc-reyna-valorant.jpg"/>
      <Card title="Jett" dis="Duelist" imgg="https://wallpapers.com/images/hd/phone-valorant-jett-kunai-s3kmmjh99g0km5wv.jpg" />
      <Card title="Neon" dis="Duelist"  imgg="https://wallpapers.com/images/hd/neon-valorant-8djnaq4tnkac682f.jpg"/>
      <Card title="KJ" dis=" Sentinel" imgg="https://wallpaper.forfun.com/fetch/92/92dfb3edca1dca32a3f9dc1e38dde400.jpeg" />
      

      
      </div>


    </>
  )
}

export default App