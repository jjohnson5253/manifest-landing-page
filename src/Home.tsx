import "./Home.css";
import ReactPlayer from "react-player"

const Home = () => {
  return (
    <main style={{
      backgroundColor: "white",
      display:"flex",
      height: "100vh",
      backgroundPosition: "center center",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      fontFamily: "Adina",
      }}>

      <div style={{
        /*backgroundColor:"rgba(0, 0, 0, 0.4)",*/
        padding: 30,
        display:"flex",
        flex: 1,
        flexDirection: "column",
        maxWidth: "800px",
        marginLeft: "auto",
        marginRight: "auto",
      }}>
      <div
        style={{
          /*backgroundColor: "blue",*/
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          flexDirection: "column",
        }}
      >
        <ReactPlayer
          style={{marginBottom: "50px"}}
          width={"700px"}
          height={"700px"}
          playing={true}
          loop={true} 
          muted 
          url={[
            {src: 'logo_animated.mp4', type: 'video/mp4'},
          ]}
        />
        <p className="alternateFont">MAN|FEST</p>

      </div>


      </div>
    </main>
  );
};

export default Home;
