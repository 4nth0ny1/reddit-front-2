import React from "react";

function Footer(props) {


  const backToTop = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    })
  }

  return (
    <div className="footer">
      <footer className="py-5 bg-dark">
        <div className="container">
          <button onClick={backToTop}>Back to Top</button>
        </div>
      </footer>
      
    </div>
  );
}

export default Footer;