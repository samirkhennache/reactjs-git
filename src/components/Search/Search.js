import React, { useState } from "react";

const Search = () => {
  const [username, setUsername] = useState("");

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    this.props.sear(this.state.search);
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
            </span>
          </div>
        </div>
      </form>
    </>
  );
};

export default Search;
