import React, { useState } from "react";
import { SideMenu } from "../../components";
import "./index.css";
import Grid from "@mui/material/Grid";
import ProfileImg from "./../../assets/svg/profile.svg";
import Button from "@mui/material/Button";
const Profile = () => {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [email, setEmail] = useState("johndoe@email.com");
  const [phone, setPhone] = useState("3460857289");
  return (
    <SideMenu>
      <div className="profile-container">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={5} md={4} lg={4} xl={4}>
            <div className="profile-sec">
              <div className="profile-left-sec-inner">
                <img src='https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp' className="profile-img"  />
                <h1 className="profile-username">John Doe</h1>
                <p className="profile-left-sec-text">Washington, USA</p>
                <p className="profile-left-sec-text">18:27 PM</p>
                <p className="profile-left-sec-text">(GMT+00:00)</p>
                <label className="profile-upload-button">
                  <input type="file" hidden />
                  <p>Update image</p>
                </label>
                <Button variant="text" className="profile-remove-btn">
                  Remove image
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={7} md={8} lg={8} xl={8}>
            <div className="profile-sec">
              <div className="profile-input-container">
                <div className="profile-input-main profile-input-inner">
                  <p>First Name</p>
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(val) => setFirstName(val.target.value)}
                    />
                  </div>
                </div>
                <div className="profile-input-main profile-input-inner">
                  <p>Last Name</p>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(val) => setLastName(val.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="profile-input-main">
                <p>Email</p>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(val) => setEmail(val.target.value)}
                  />
                </div>
              </div>
              <div className="profile-input-main">
                <p>Phone Number</p>
                <div style={{ paddingLeft: "0px" }}>
                  <div>
                    <p>+1</p>
                  </div>
                  <input
                    type="number"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(val) => setPhone(val.target.value)}
                  />
                </div>
              </div>
              <Button variant="text" className="save-btn">
                Save
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </SideMenu>
  );
};
export default Profile;
