import React from "react";

export const ImgUpload = props =>
  <div className="form-group">
    <input type="file" className="form-control" rows="10" {...props} />
  </div>;
