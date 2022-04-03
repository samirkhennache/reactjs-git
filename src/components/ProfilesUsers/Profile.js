import React, { useState } from "react";
import DetailsProfile from "./DetailsProfile";

import "./Profile.css";

const Profile = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json();
    // console.log(profileJson);

    const repositories = await fetch(profileJson.repos_url);
    const repoJson = await repositories.json();
    console.log(repoJson);

    if (profileJson) {
      setData(profileJson);
      setRepositories(repoJson);
    }
  };
  return (
    <>
      <form>
        <div class="form-group col-md-3 mx-auto">
          <div class="input-group">
            <input
              name="mySearchForm"
              className="form-control"
              placeholder="Username "
              type="search"
              aria-describedby="basic-addon2"
              value={username}
              onChange={onChangeHandler}
            />
            <span class="input-group-btn">
              <button
                className="btn btn-default"
                type="submit"
                onClick={submitHandler}
              >
                SEARCH
              </button>
 <DetailsProfile data={data} repositories={repositories} />
            </span>
          </div>
        </div>
      </form>
    </>
  );
};
export default Profile;
