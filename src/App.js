import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios"
import Navbar from './Navbar';
import Categories from './Categories';
import FaqCard from './FaqCard';
import HARCard from './HARCard';
import TYCMCard from './TYCMCard';
import Loading from './loading';
function App() {
  const [isload, setisload] = useState(true)

  const [categories, setcategories] = useState([])
  const [FAQS, setFAQS] = useState([])
  const [HARS, setHARS] = useState([])
  const [TYCMS, setTYCMS] = useState([])


  useEffect(() => {
    axios.get("https://dry-reaches-51044.herokuapp.com/catagorie").then((response) => {
      setcategories(response.data);
      setisload(false)
    });
    axios.get("https://dry-reaches-51044.herokuapp.com/faq").then((response) => {
      setFAQS(response.data);
      setisload(false)
    });
    axios.get("https://dry-reaches-51044.herokuapp.com/HAR").then((response) => {
      setHARS(response.data);
      setisload(false)
    });
    axios.get("https://dry-reaches-51044.herokuapp.com/TYCM").then((response) => {
      setTYCMS(response.data);
      setisload(false)
    });


  }, [])




  return (
    <div>
      <div className="App">
        <Navbar />
        <img className="home_img" alt="1" src={require("./images/Group_39.png")} />
        <h1 className="title" >HOW IT WORK</h1>
        <p className="HIW_content" >Sea Basket delivers fresh sourced seafood in a few easy clicks</p>
        <h1 className="categories_title" >CATEGORIES</h1>
        <div className="categories_items" >
          {
            isload ? <Loading /> :
              categories.map((categorie, index) => {
                return (<Categories key={index} img={categorie.img} name={categorie.name} />)
              })
          }
        </div>
        <div className="a_glance_at" >
          <h1 className="title" >A GLANCE AT OUR PRODUCT</h1>

          <div className="a_glance_at_img_conteiner" >
            <img alt="1" className="a_glance_at_img" src={require("./images/Rectangle_65.png")} />
            <div className="a_glance_at_icon" ><svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="icon/av/play_circle_filled_white_24px">
                <path id="icon/av/play_circle_filled_white_24px_2" fillRule="evenodd" clipRule="evenodd" d="M5.83333 35C5.83333 18.9 18.9 5.83337 35 5.83337C51.1 5.83337 64.1667 18.9 64.1667 35C64.1667 51.1 51.1 64.1667 35 64.1667C18.9 64.1667 5.83333 51.1 5.83333 35ZM29.1667 24.7916V45.2083C29.1667 46.4041 30.5375 47.1041 31.5 46.375L45.1208 36.1666C45.9083 35.5833 45.9083 34.4166 45.1208 33.8333L31.5 23.625C30.5375 22.8958 29.1667 23.5958 29.1667 24.7916Z" fill="white" />
              </g>
            </svg>
            </div>
          </div>





        </div>
        <div className="faqs" >
          <h1 className="title" >FAQS</h1>

          {
            isload ? <Loading /> :
              FAQS.map((faq, index) => {
                return (<FaqCard key={index} title={faq.title} content={faq.content} />)
              })
          }
        </div>
        <div className="have_a_read" >
          <h1 className="title" >HAVE A READ</h1>


          {
            isload ? <Loading /> :
              HARS.map((har, index) => {
                return (<HARCard key={index} title={har.title} content={har.content} />)
              })
          }

        </div>
        <div className="topic_You_cant" >
          <h1 className="title" >TOPIC YOU CAN'T MISS</h1>

          {
            isload ? <Loading /> :
              TYCMS.map((tycm, index) => {
                return (<TYCMCard key={index} img={tycm.img} title={tycm.title} content={tycm.content} />)
              })
          }

        </div>

      </div>




      <div className="footer">
        <div className="footer_inner" >
          <div className="footer_img" >
            <img alt="1" src={require("./images/logo_1.png")} />
          </div>

          <div className="footer_options" >
            <div>
              <h1>Support</h1>
              <h1>About Us</h1>
              <h1>Privecy Policy</h1>
            </div>
            <div>
              <h1>Terms & Conditions</h1>
              <h1>Return & Refund Policy</h1>
              <h1>Shipment & Delivery Policy</h1>

            </div>
          </div>
        </div>
        <div className="copyright" > <h1  >Sea Basket I All Rights Reserved I 2021 Copyright</h1></div>


      </div>
    </div>
  );
}

export default App;
