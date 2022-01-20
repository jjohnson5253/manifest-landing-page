//
// File Description: Implements a loot bag test. You can enter ETH wallet and it will tell you
// token ids of loot bags owned at that address.
//
// Copyright Manifest 2022
//
import "./Home.css";
import React,{useState} from 'react';
import axios from 'axios';

const LootTest = () => {

    // wallet address to use for this app
    const [walletAddress, setWalletAddress] = useState("");
    // nft loot bags found in this app
    const [nfts,setNfts]=useState([])

    // brief    async function to get Loot Bag NFTs per given address
    // param    [in] walletAddress: wallet to read from
    const fetchNfts=async(walletAddress)=>{
        // set request string to send to Moralis NFT API. Don't run if walletAddress has not been set
        if(walletAddress!=='')
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

  // function to update wallet address state variable from input field
  function getWalletAddress(val)
  {
    setWalletAddress(val.target.value)
  }
  
  // function to call on button click
  function buttonClick(val)
  {
    // get NFTs from wallet address
    fetchNfts(walletAddress)
  }

  return (
    <div style={{height:"100vh",width:"100vw",backgroundColor:"gray",}}>
        <div style={{paddingTop:"10px",textAlign:"center",marginBottom:"10px"}}>
          <p className="testLootHeader" style={{marginBottom:"20px", fontSize:"40px",}}>
            Loot Test
          </p>

          {/*input field and button */}
          <input type="text" onChange={getWalletAddress} placeholder="Enter wallet address..." id="myInput"></input>
          <button type="button" onClick={buttonClick}>Go</button>

          <p className="testLootHeader" style={{fontSize:"20px"}}>
            Loot Bags Owned:
          </p>
        </div>

        {/*Render nft loot bags from state array */}
        {nfts.map((nft, index) => {
          return (
            <div key={index} style={{ marginTop: "0px", padding: "8px" }}>
              <div className="testLootHeader" >Token Id: {nft.token_id}</div>
            </div>)
        })} 
    </div>
  );
};

export default LootTest;
