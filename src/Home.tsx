import "./Home.css";

//import logo_animated from './logo_animated.mp4'
import title_logo from './title_logo.png'
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
      WebkitTextStrokeWidth: "1px",
      WebkitTextStrokeColor: "black",
      WebkitTextFillColor: "white"
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
        MAN|FEST

      </div>

      <div
        style={{
          /*backgroundColor: "green",*/
          display: "flex",
          /*justifyContent: "space-between",*/
        }}>
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/">
          <i className='fab fa-twitter fa-2x'></i>
        </a>
        <div style={{
          marginLeft:'15px',
        }}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.discord.gg/JGFyenFtsy">
          <i className='fab fa-discord fa-2x' ></i>
        </a>
        </div>
        <div
        style={{
          textAlign: 'center',
          flex:'1 0 auto',
          marginLeft:'35px',
        }}>
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/">
        <img
          height='60px'
          src={title_logo} alt="title_logo"/> </a>
        </div>
        <div></div>
        <div style={{
          float:"right",
        }}>
        </div>
      </div>

      </div>
    </main>
  );
};

export default Home;
