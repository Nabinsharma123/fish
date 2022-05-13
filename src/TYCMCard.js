import "./TYCMCard.css"
function TYCMCard(props) {
    return (
        <div className="TYCMCard" >
            <div className="TYCM_img_container" >
                <img alt="1" className="TYCM_img" src={props.img} />
            </div>

            <div className="TYCM_info" >
                <div className="HARCard_title" >
                    <h1>{props.title}</h1>

                </div>

                <div className="HARCard_content" >
                    <h1>{props.content}</h1>
                </div>

                <div className="HARCard_readMore TYCM_readMore" >
                    <div>
                        <h1> READ MORE</h1>

                        <svg width="16" height="26" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.74763 24.2688C2.36013 24.8813 3.34763 24.8813 3.96013 24.2688L14.3476 13.8813C14.8351 13.3938 14.8351 12.6063 14.3476 12.1188L3.96013 1.73128C3.34763 1.11878 2.36013 1.11878 1.74763 1.73128C1.13513 2.34378 1.13513 3.33128 1.74763 3.94378L10.7976 13.0063L1.73513 22.0688C1.13513 22.6688 1.13513 23.6688 1.74763 24.2688Z" fill="#0E79BD" stroke="#0E79BD" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TYCMCard;