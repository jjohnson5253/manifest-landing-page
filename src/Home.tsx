import "./Home.css";
import ReactPlayer from "react-player"

export interface HomeProps {
}

const Home = (props: HomeProps) => {
  return (
    <main style={{
      display:"flex",
      /*backgroundColor: "#D4D8EC",*/
      backgroundImage: "linear-gradient(to bottom right, #C8D1E2, #D3D7E9)",
      /*backgroundColor: "#CED4E6",*/
      /*backgroundImage: `url(${Background})`,*/
      height: "100vh",
      backgroundPosition: "center center",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      fontFamily: "Adina",
      }}>

      <div style={{
        padding: 30,
        /*backgroundColor:"rgba(0, 0, 0, 0.4)",*/

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
          /*style={{boxShadow: "10px 10px 5px #aaaaaa"}}*/
          
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
