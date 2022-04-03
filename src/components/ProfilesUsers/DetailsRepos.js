import React from "react";

const DetailsRepos = (details, data) => {
  return (
    <div className="repo-details-contenair">
      <div className="details-row">
        <span className="value">name: {data.name}</span>
      </div>
    </div>
  );
};
export default DetailsRepos;
