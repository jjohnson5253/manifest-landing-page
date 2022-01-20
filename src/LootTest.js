import "./Home.css";
import React,{useState,useEffect} from 'react';
import axios from 'axios';

const LootTest = () => {
    const [walletAddress, setWalletAddress] = useState("");
    const [nfts,setNfts]=useState([])

    /*useEffect(() => {
        fetchNfts('0xd82724a01bce06bbc3face916bd14b5b06ef59bd');
      }, [])
    useEffect(() => {
    console.log(nfts)
    }, [nfts])*/

    // brief    async function to get Loot Bag NFTs per given address
    // param    [in] walletAddress: wallet to read from
    const fetchNfts=async(walletAddress)=>{
        // set request string to send to Moralis NFT API. Don't run if walletAddress has not been set
        if(walletAddress!='')
        {
          const requestString = 'https://deep-index.moralis.io/api/v2/' + walletAddress + '/nft/0xFF9C1b15B16263C61d017ee9F65C50e4AE0113D7?chain=eth&format=decimal'
          const res = await axios.get(requestString, {
              headers: {
                  'accept': `application/json`,
                  'x-api-key': 'KzIg5Dtp5dBhRcvGxGLJgKUoJJeWb0ceTkMykz3yOO8arvkzqkijXswbyzCA7bD0'
              }
          });
          // set 'nfts' state array
          setNfts(res.data.result)
        }
    }

  function getWalletAddress(val)
  {
    setWalletAddress(val.target.value)
  }

  function buttonClick(val)
  {
    fetchNfts(walletAddress)
  }

  return (
    <div style={{
        height:"100vh",
        width:"100vw",
        backgroundColor:"gray",
    }}
    >
        <div style={{
            paddingTop:"10px",
            textAlign:"center",
            marginBottom:"10px"
        }}>
            <p style={{
              marginBottom:"20px",
            }}>
              Loot Test
            </p>

        <input type="text" onChange={getWalletAddress} placeholder="Enter wallet address..." id="myInput"></input>

        <button type="button" onClick={buttonClick}>Go</button>

        <p className="testLootHeader" style={{
              fontSize:"20px",
            }}>
              Loot Bags Owned:
        </p>

        </div>

    {/*<div>
      {
        comments && comments.map(comment=>{
          return(
            <div key={comment} style={{alignItems:'center',margin:'20px 60px'}}>
            <h4>{}</h4>
            <p>{}</p>
          </div>
          )

        })
      }
    </div>*/}

        {/*<p className="testLootHeader">
            LootTest
        </p>*/}

        
        {nfts.map((nft, index) => {
          return (
            <div key={index} style={{ marginTop: "0px", padding: "8px" }}>
              <div className="testLootHeader" >Token Id: {nft.token_id}</div>
            </div>)
        })} 
        

        {/*{nfts.map((tokenId, index) => {
          return (
            <div key={index} style={{ backgroundColor: "OldLace", marginTop: "16px", padding: "8px" }}>
              <div>Address: {tokenId.address}</div>
              <div>Time: {tokenId.timestamp.toString()}</div>
              <div>Message: {tokenId.message}</div>
            </div>)
        })}*/}
    </div>
  );
};

export default LootTest;
