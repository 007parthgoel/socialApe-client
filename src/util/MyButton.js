import React from "react";

import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

const MyButton = ({ children, onClick, tip, btnClasses, tipClasses, placement }) => (
  <Tooltip title={tip} className={tipClasses} placement={placement}>
    <IconButton onClick={onClick} className={btnClasses}>
      {children}
    </IconButton>
  </Tooltip>
);

export default MyButton;
