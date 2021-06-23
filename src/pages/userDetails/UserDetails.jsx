import {
  PermIdentity,
  CalendarToday,
  Phone,
  ContactMail,
  Home,
  Publish,
} from "@material-ui/icons";
import React from "react";
import "./userdetails.css";
import {Link} from 'react-router-dom';

const UserDetails = () => {
  return (
    <div className="userDetails">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to='/newUser'>
        <button className="userAddButton button">Create</button>
        </Link>
        
      </div>

      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
              alt=""
              className="userShowing"
            />
            <div className="userShowTopTitle">
              <span className="userName">Rowan Atkinson</span>
              <span className="userTitle">Comedian</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">Jackson</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10-02-1990</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <Phone className="userShowIcon" />
              <span className="userShowInfoTitle">+911234567890</span>
            </div>
            <div className="userShowInfo">
              <ContactMail className="userShowIcon" />
              <span className="userShowInfoTitle">Jon@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <Home className="userShowIcon" />
              <span className="userShowInfoTitle">some address</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>UserName</label>
                <input
                  type="text"
                  placeholder="Atkinson123"
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Rowan Atkinson"
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Jon@gmail.com"
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+911234567890"
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="some address"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                  alt=""
                  className="userUpdateImage"
                />
                <label htmlFor="file">
                  <Publish className='updateImageIcon'/>
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="updateButton button">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
