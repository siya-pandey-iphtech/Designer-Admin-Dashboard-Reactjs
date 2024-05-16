import React from "react";
import { Link } from "react-router-dom";
const BreadCrumb = ({ breadcrumbs }) => {
  return (
    <div>
      {breadcrumbs.map((breadcrumb, index) => (
        <span key={index}>
          {index > 0 && <span className="seperator">/</span>}
          {breadcrumb.link ? (
            <Link to={breadcrumb.link}>{breadcrumb.label}</Link>
          ) : (
            <span>{breadcrumb.label}</span>
          )}
        </span>
      ))}
    </div>
  );
};

export default BreadCrumb;
