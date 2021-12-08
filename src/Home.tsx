import "./Home.css";
import ReactPlayer from "react-player"

const Home = () => {
  return (
    <main style={{
      backgroundColor: "white",
      display:"flex",
      height: "100vh",
      }}>

      <div style={{
        /*backgroundColor:"blue",*/
        marginTop: "5vh",
        display:"flex",
        flex:1,
        justifyContent:"center",
        flexDirection: "column",
      }}>
        <ReactPlayer
          style={{
            display:"flex",
            marginLeft: "auto",
            marginRight: "auto",
          }}

          width={"75%"}
          height={"75%"}
          playing={true}
          loop={true} 
          muted
          playsinline
          url={[
            {src: 'logo_animated.mp4', type: 'video/mp4'},
          ]}
        />
        <p style={{
          display:"flex",
          marginLeft: "auto",
          marginRight: "auto",
        }} className="manifestHeader">
          <span className="alternateFont">M</span>AN|FEST
        </p>

      </div>
    </main>
  );
};

export default Home;
