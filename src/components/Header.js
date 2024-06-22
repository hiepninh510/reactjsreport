/* eslint-disable jsx-a11y/alt-text */
import React,{ useState, useEffect } from "react";
const Header = (props)=>{
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const date = new Date();
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        setCurrentDate(formattedDate);
    }, []);
    
    return(
        <div className="app_header">
            <div className="content_header">
                <div id="img_logo">
                    <img src='https://www.sparking.com.vn/datafiles/42873/upload/files/logo195-65-01.png?t=1691787483'></img>
                </div>
                <div id="lable_header">
                    <h1>BẢNG CHÀO GIÁ</h1>
                    <h3>GIẢI PHÁP CÔNG NGHỆ GIỮ XE THÔNG MINH</h3>
                </div>
            </div>
            <div className="content_header">
                <div className="content_header--info">
                    <div className="name_company">
                        <p>CÔNG TY TRÁCH NHIỆM HỮU HẠN S PARKING</p>
                    </div>
                    <div className="address_company">
                        <p>Văn phòng: </p>
                        <span>98B Nguyễn Văn Trỗi, P.8, Q.Phú Nhuận, TP.HCM</span>
                    </div>
                    <div className="number_text">
                        <p>Số văn bản: </p>
                        <input type="text"></input>
                    </div>
                    <div className="release_date">
                        <p>Ngày phát hành: </p>
                        <span>{currentDate}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;