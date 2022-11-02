import React from "react";
import "../styles.css";

const Results = (props) => {
  const { repos } = props;
  console.log("Repos is:", repos.data);

  const listRepos =
    repos.length !== 0 ? (
      repos.data.map((item) => (
        <li key={item.id} className="github-repos">
          <a href={item.html_url} target="_blank" rel="noreferrer">
            {item.name}
          </a>
        </li>
      ))
    ) : (
      <li>No Repos found!</li>
    );
  return (
    <div>
      <ul className="table">{listRepos}</ul>
    </div>
  );
};

export default Results;
