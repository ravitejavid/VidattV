import React, { useState } from "react";
import { TextField, Grid, Modal } from "@mui/material";
import "./ContForm.css";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import FooterNav from "../FooterNav";
import { Link } from "react-router-dom";

function ContForm() {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [clientNameError, setClientNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [close, setClose] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate inputs
    if (!clientName) {
      setClientNameError(true);
    } else {
      setClientNameError(false);
    }

    if (!email) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (!details) {
      setDetailsError(true);
    } else {
      setDetailsError(false);
    }

    if (clientName && email && details) {
      try {
        setLoading(true);
        const response = await fetch("https://formspree.io/f/xgebqepo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ clientName, email, details }),
        });
        const json = await response.json();
        console.log("Success:", JSON.stringify(json));

        setClientName("");
        setEmail("");
        setDetails("");
        setSubmitSuccess(true);
        setLoading(false);
        setTimeout(() => {
          setClose(false);
        }, 5000);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    }
  };

  const handleCloseModal = () => {
    setSubmitSuccess(false);
  };
  return (
    <div>
      <div className="completecaontactholder">
        <div className="completecaontactholder1">
          <div className="conttaxt">
            <div className="conttaxth2">Got an Idea?</div>
            <div className="conttaxth2">Lets make it a reality!</div>
            <div>Tell us what you've got in mind</div>
          </div>

          <form className="textfieldholders" onSubmit={handleSubmit}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={12} md={6}>
                <div className="gridtextfil">
                  <TextField
                    id="clientname"
                    label="Your name"
                    variant="standard"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    // required
                  />
                  {/* {clientNameError && <span>This field is required</span>} */}
                </div>
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <div className="gridtextfil">
                  <TextField
                    id="Email"
                    label="Your company email ID"
                    variant="standard"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    // required
                  />
                  {/* {emailError && <span>This field is required</span>} */}
                </div>
              </Grid>

              <Grid item xs={12} sm={12}>
                <div className="gridtextfull">
                  <TextField
                    id="details"
                    label="Tell us little about your idea"
                    variant="standard"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    // required
                  />
                  {/* {detailsError && <span>This field is required</span>} */}
                </div>
              </Grid>

              <Grid item xs={12} sm={12}>
                <button type="submit" className="button1" style={{border:'none'}}>
                  <div>Send Message</div>
                </button>
              </Grid>
            </Grid>
          </form>

          <Modal open={submitSuccess} onClose={handleCloseModal}>
            <div className="modalcontainer">
              <div className="modal">
                <h2>Thanks for visiting Vidatt</h2>
                {close ? (
                  <div className="aniContainer">
                    <div className="text">{/* <h1>Loading ....</h1> */}</div>
                    <div className="loading">
                      <div className="line-box">
                        <div className="line"></div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <button onClick={handleCloseModal}>Close</button>
                )}
              </div>
            </div>
          </Modal>

          <div  className="cardcontTT">
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12} md={4}>
                <div>
                  <div className="cardcont">
                    <div className="contcardin">
                      <ChatBubbleOutlineOutlinedIcon sx={{ margin: "2% 4%" }} />
                      Chat with us
                    </div>
                    <div style={{ margin: "1% 12%" }}>
                      vidattdataanalytics@gmail.com
                    </div>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} sm={12} md={4}>
                <Link to='/map'  style={{  textDecoration: 'none'}}>
                <div style={{color:'black',}}>
                  <div className="cardcont">
                    <div className="contcardin">
                      <LocationOnOutlinedIcon sx={{ margin: "2% 4%" }} />
                      Visit us
                    </div>
                    <div style={{ margin: "1% 12%" }}>
                      Rajajinagar Banglore-560078
                    </div>
                  </div>
                </div>
                
                </Link>
                
              </Grid>

              <Grid item xs={12} sm={12} md={4}>
                <div>
                  <div className="cardcont">
                    <div className="contcardin">
                      <LocalPhoneOutlinedIcon sx={{ margin: "2% 4%" }} />
                      Call us
                    </div>
                    <div style={{ margin: "1% 12%" }}>1233434343434</div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>

      
      </div>
      <FooterNav />
    </div>
  );
}

export default ContForm;
