import React, { useState } from "react";
import "./FaqCard.css"
function FaqCard(props) {
    const [isclick, setisclick] = useState(false)
    return (


        <div className="FaqCard" onClick={() => { setisclick(!isclick) }}  >
            <div className="FaqCard_inner">
                <h1 className="Faq_title" >{props.title}</h1>
                {isclick ? <></> : <div className=" arrow_down" >
                    <svg className="arrow" width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.21875 1.57947C0.197916 2.6003 0.197916 4.24614 1.21875 5.26697L18.5312 22.5795C19.3438 23.392 20.6563 23.392 21.4687 22.5795L38.7812 5.26697C39.8021 4.24613 39.8021 2.6003 38.7812 1.57947C37.7604 0.558632 36.1146 0.558632 35.0938 1.57947L19.9896 16.6628L4.88542 1.55864C3.88542 0.558636 2.21875 0.558634 1.21875 1.57947Z" fill="#0E79BD" />
                    </svg>
                </div>}

                {isclick && <div className=" arrow_up" >
                    <svg className="arrow" width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M38.7813 22.4205C39.8021 21.3997 39.8021 19.7539 38.7813 18.733L21.4688 1.42053C20.6562 0.608032 19.3437 0.608032 18.5313 1.42053L1.21875 18.733C0.197914 19.7539 0.197914 21.3997 1.21875 22.4205C2.23958 23.4414 3.88541 23.4414 4.90625 22.4205L20.0104 7.3372L35.1146 22.4414C36.1146 23.4414 37.7813 23.4414 38.7813 22.4205Z" fill="#0E79BD" />
                    </svg>

                </div>}
            </div>


            {
                isclick && <h1 className="Faq_content" >{props.content}</h1>
            }


        </div>




    );
}

export default FaqCard;