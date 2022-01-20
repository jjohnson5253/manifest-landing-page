import "./Home.css";
import React,{useState,useEffect} from 'react';
import axios from 'axios';

const LootTest = () => {

    //const [walletAddress, setWalletAddress] = useState("");
    const [comments,setComments]=useState([])
    useEffect(() => {
        fetchComments();
      }, [])
    useEffect(() => {
    console.log(comments)
    }, [comments])

    const fetchComments=async()=>{
        const resp = await axios.get('https://deep-index.moralis.io/api/v2/0xd82724a01bce06bbc3face916bd14b5b06ef59bd/nft/0xFF9C1b15B16263C61d017ee9F65C50e4AE0113D7?chain=eth&format=decimal', {
            headers: {
                'accept': `application/json`,
                'x-api-key': 'KzIg5Dtp5dBhRcvGxGLJgKUoJJeWb0ceTkMykz3yOO8arvkzqkijXswbyzCA7bD0'
            }
        });

        setComments(resp.data)    
    }

    /*axios.get('https://deep-index.moralis.io/api/v2/0xd82724a01bce06bbc3face916bd14b5b06ef59bd/nft/0xFF9C1b15B16263C61d017ee9F65C50e4AE0113D7?chain=eth&format=decimal', {
        headers: {
          'accept': `application/json`,
          'x-api-key': 'KzIg5Dtp5dBhRcvGxGLJgKUoJJeWb0ceTkMykz3yOO8arvkzqkijXswbyzCA7bD0'
        }
    })
    .then((res) => {
        console.log(res.data)
        let tmpArray = []
        for (var i = 0; i < ; i++) {
            tmpArray.push(res.data.results[i].NeededInfo)
        }
        //setTokenIds(Object.values(res.data))
        //console.log(tokenIds)
    })
    .catch((error) => {
        console.error(error)
    })*/

//function getWallet(val)
//{
    //setWalletAddress(val.target.value)
    //console.log("hey")
    //console.log(tokenIds)
//}

  return (
    <div style={{
        height:"100vh",
        width:"100vw",
        backgroundColor:"gray",
    }}
    >
        <div style={{
            paddingTop:"10px",
            textAlign:"center"
        }}>
            Loot Test <br></br><br></br>
        {/*<input type="text" onChange={getWallet}/>*/}
        </div>

    <div>
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
    </div>

        {/*<p className="testLootHeader">
            LootTest
        </p>*/}

        {/* 
        {tokenIds.products.map((tokenIddex) => {
          return (
            <div>
            </div>)
        })} 
        /*}

        {/*{tokenIds.map((tokenId, index) => {
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
