import React from 'react';
import './style.css'
function Group() {
    return (
        <div className="container-fluid p-3">
            <div className="container  border-top">
            </div>
            <div className="row text-center p-5">
                <h2>DEVELOPMENT MEMBERS</h2>
            </div>
            <div className="row ceo">
                <div className="ceo-item col-md-12 col-lg-4">
                    <img src="./homepage img/ceo-2.jpg" alt="" />
                    <h4 className="mt-3">Nguyễn Minh Hải</h4>
                    <h6>VNU - UET</h6>
                </div>
                <div className="ceo-item col-md-12 col-lg-4">
                    <img src="./homepage img/ceo-1.jpeg" alt="" />
                    <h4 className="mt-3">Trịnh Đức Khanh</h4>
                    <h6>VNU - UET</h6>
                </div>
                <div className="ceo-item col-md-12 col-lg-4">
                    <img src="./homepage img/ceo-3.jpg" alt="" />
                    <h4 className="mt-3">Đỗ Văn Thành</h4>
                    <h6>VNU - UET</h6>
                </div>
            </div>
        </div>

    )
}
export default Group;