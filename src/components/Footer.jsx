import React from "react";
import { BsHeartFill } from "react-icons/bs";

const Footer = () => {
    return (
        <span className="footer center">
            Made With 
            <BsHeartFill style={{color:'red',margin:'0 10px'}} />
              By Aws Maarouf
        </span>
    );
};

export default React.memo(Footer);
