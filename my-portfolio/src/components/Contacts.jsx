import React from "react";
import { Box, Button, Center, Flex, Heading, Image } from "@chakra-ui/react";

export const Contacts = () => {
  const phoneNumber = "+91-8055299988";
  const email = "abuzarsk10@gmail.com";
  const address = "Aurangabad, Maharashtra";
  return (
    <div id="contact" style={styles.container}>
      <h2
        style={styles.contactTitle}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Contact <span style={{ color: "#0984e3" }}>Me</span>
      </h2>
      <div
        style={styles.contactDetails}
        id="contact-detail-div"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <p style={styles.contactInfo} id="contact-phone">
          <i class="fa-solid fa-phone-volume fa-2xl"></i>{" "}
          <span
            style={{ color: "white", paddingLeft: "40px", marginLeft: "70px" }}
          >
            {phoneNumber}
          </span>{" "}
        </p>
        <p style={styles.contactInfo} id="contact-email">
          <i class="fa-solid fa-envelope fa-2xl"></i>{" "}
          <span style={{ color: "white" }}> {email}</span>{" "}
        </p>
        <p style={styles.contactInfo} id="contact-email">
          <i class="fa-solid fa-location-dot fa-2xl"></i>{" "}
          <span style={{ color: "white", paddingLeft: "30px" }}>
            {" "}
            {address}
          </span>{" "}
        </p>
      </div>
      <div
        style={styles.socialMedia}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* <p style={styles.socialMediaText}  data-aos="fade-up"
     data-aos-duration="1000">Social Media</p> */}
        <div style={styles.socialMediaLinks}>
          <a
            style={styles.socialMediaLink}
            data-aos-duration="1000"
            id="contact-linkedin"
            href="https://www.linkedin.com/in/abuzar-shaikh10/"
            target="blank"
          >
            <i class="fa-brands fa-linkedin  fa-2xl"></i>
          </a>
          <a
            style={styles.socialMediaLink}
            data-aos-duration="1000"
            id="contact-github"
            href="https://github.com/abuzar-shaikh"
            target="blank"
          >
            <i class="fa-brands fa-github fa-2xl"></i>
          </a>
        </div>
      </div>
      <div
        style={{
          width: "90%",
          marginBottom: "100px",
        }}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3752.6532947429946!2d75.30859341491333!3d19.854617586646008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDUxJzE2LjYiTiA3NcKwMTgnMzguOCJF!5e0!3m2!1sen!2sin!4v1689938269012!5m2!1sen!2sin"
          width="100%"
          height="300"
          // style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
    backgroundColor: "transparent",
    borderRadius: "10px",
  },
  contactTitle: {
    // border: '2px solid #0984e3',
    fontSize: "2.5rem",
    fontWeight: "bold",
    fontFamily: "Arial, sans-serif",
    color: "white",
  },
  contactDetails: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px 0",
    border: "2px solid #0984e3",
    borderRadius: "10px",
    padding: "8px",
  },
  contactInfo: {
    fontWeight: "700",
    fontSize: "18px",
    fontFamily: "Arial, sans-serif",
    color: "#0984e3",
    margin: "10px 0",
  },

  socialMedia: {
    border: "2px solid #0984e3",
    display: "flex",
    borderRadius: "20px",
    padding: "40px 50px",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "100px",
  },
  socialMediaText: {
    border: "2px solid #0984e3",
    fontSize: "20px",
    fontWeight: "700",
    fontFamily: "Arial, sans-serif",
    color: "white",
    padding: "7px 35px",
    margin: "10px 0",
  },
  socialMediaLinks: {
    display: "flex",
    justifyContent: "center",
  },
  socialMediaLink: {
    fontSize: "30px",
    fontFamily: "Arial, sans-serif",
    color: "#0984e3",
    textDecoration: "none",
    margin: "0 10px",
    cursor: "pointer",
  },
};
