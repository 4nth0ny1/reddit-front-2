
import React from "react";

function Footer(props) {
  return (
    <div className="footer">
      <footer class="py-5 bg-dark fixed-bottom">
        <div class="container">
          <button onClick={props.backToTop}>Back to Top</button>
        </div>
      </footer>
    </div>
  );
}

export default Footer;