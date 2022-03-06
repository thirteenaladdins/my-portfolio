import React from "react";

import { ProjectLinks } from "../data/ProjectLinks";

const ProjectList = () => {
  return (
    <ul>
      {ProjectLinks.map((item, index) => {
        return (
          <li key={index}>
            <a className={item.cName} href={item.url}>
              {item.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectList;
