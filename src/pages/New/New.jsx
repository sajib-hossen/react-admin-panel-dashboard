import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./New.scss";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={file?URL.createObjectURL(file):"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image : <UploadFileOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  name="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  id="file"
                  style={{ display: "none" }}
                />
              </div>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label htmlFor="name"> {input.label}</label>
                  <input
                    type={input.type}
                    name="name"
                    id=""
                    placeholder={input.placeholder}
                  />
                </div>
              ))}

              {/* <div className="formInput">
                             <label htmlFor="sname"> Name and Surname</label>
                             <input type="text" name="sname" id="" placeholder='Jhone Doe' />
                         </div>
                         <div className="formInput">
                             <label htmlFor="email"> Email</label>
                             <input type="email" name="email" id="" placeholder='jhon@gmail.com' />
                         </div>
                         <div className="formInput">
                             <label htmlFor="phone"> Phone </label>
                             <input type="email" name="phone" id="" placeholder='+45 855 99' />
                         </div>
                         <div className="formInput">
                             <label htmlFor="pword"> Password</label>
                             <input type="password" name="pword" id=""  />
                         </div>
                         <div className="formInput">
                             <label htmlFor="address">Address</label>
                             <input type="text" name="address" id="" placeholder='Elton St.216' />
                         </div>
                         <div className="formInput">
                             <label htmlFor="country"> Country</label>
                             <input type="text" name="country" id="" placeholder='USA'  />
                         </div> */}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
