import "./Home.css";

import Background from './underwater_bg.jpg';
import puffer_sequence from './puffer_sequence.gif'
import title_logo from './title_logo.png'

export interface HomeProps {
}

const Home = (props: HomeProps) => {
  return (
    <main style={{
      display:"flex",
      /*backgroundColor: "red",*/
      backgroundImage: `url(${Background})`,
      height: "100vh",
      backgroundPosition: "center center",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      }}>

      <div style={{
        padding: 30,
        backgroundColor:"rgba(0, 0, 0, 0.4)",

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
        
      <img 
        src={puffer_sequence}
        alt="puffer_sequence"
        height='350px'
      />
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
