import React from "react";

const DetailsProfile = ({ data, repositories }) => {
  return (
    <div>
      <div>
        {!data.avatar_url ? (
          " "
        ) : (
          <img
            className="img-carree img-clip-path"
            src={data.avatar_url}
            alt={data.name}
          />
        )}
        {data.name}
      </div>

      <div>
        {repositories.map((repo) => (
          <div className="ui relaxed divided list" key={repo.name}>
            <div className="item">
              <i className="large github middle aligned icon"></i>
              <div className="content">
                <a href={repo.html_url} className="header" target="_blank">
                  <img src={"/images/repos.png"} /> {repo.name}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsProfile;
