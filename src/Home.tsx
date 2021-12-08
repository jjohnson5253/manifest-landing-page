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
        padding: "2vh",

        marginLeft: "auto",
        marginRight: "auto",
      }}>
      <div
        style={{
          height: "96vh",
          /*backgroundColor:"red",*/
        }}
      >
        <ReactPlayer
          style={{
            marginBottom: "0%",
            marginLeft: "auto",
            marginRight: "auto"
            /*paddingTop:"56.25%",
            position:"relative"*/
          }}
          /*width={"700px"}
          height={"700px"}*/
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
        <p className="manifestHeader">
          <span className="alternateFont">M</span>AN|FEST
        </p>

      </div>


      </div>
    </main>
  );
};

export default Home;
