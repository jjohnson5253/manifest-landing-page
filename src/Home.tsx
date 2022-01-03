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
        <div style={{
            display:"flex",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: "5px",
            overflow: "hidden",
            paddingLeft: "2%",
            paddingRight: "2%",
        }}>
          <ReactPlayer
            style={{
              borderRadius: "40px",
              overflow: "hidden",
            }}
            width={"100%"}
            height={"100%"}
            playing={true}
            loop={true} 
            muted
            playsinline
            url={[
              {src: 'logo_animated.mp4', type: 'video/mp4'},
            ]}
          />
        </div>

        <p style={{
          display:"flex",
          marginTop:"3%",
          marginLeft: "auto",
          marginRight: "auto",
        }} className="manifestHeader">
          WORLDS
        </p>

      </div>
    </main>
  );
};

export default Home;
