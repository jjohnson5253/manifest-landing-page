import "./Home.css";
import ReactPlayer from "react-player"

const Home = () => {
  return (
    <main style={{
      backgroundColor: "white",

      /*fontFamily: "Adina",*/
      }}>

      <div style={{
        /*backgroundColor:"rgba(0, 0, 0, 0.4)",*/
        padding: 30,

        marginLeft: "auto",
        marginRight: "auto",
      }}>
      <div
        style={{
          /*backgroundColor:"red",*/
        }}
      >
        <ReactPlayer
          style={{
            marginBottom: "5%",
            marginLeft: "auto",
            marginRight: "auto"
            /*paddingTop:"56.25%",
            position:"relative"*/
          }}
          /*width={"700px"}
          height={"700px"}*/
          width={"85%"}
          height={"85%"}
          playing={true}
          loop={true} 
          muted
          playsinline
          url={[
            {src: 'logo_animated.mp4', type: 'video/mp4'},
          ]}
        />
        <p className="manifestHeader">
          <span className="alternateFont">M</span>AN|FEST
        </p>

      </div>


      </div>
    </main>
  );
};

export default Home;
