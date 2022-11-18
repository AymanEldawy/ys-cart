import React from "react";

export const Breadcrumb = ({ productPath }) => {
  
  const depth = `Home/Shopping/Main Category/${productPath?.category?.name}/${productPath?.title}`;
  let depths = depth.split("/");

  return (
    <div className="breadcrumb">
      <div className="container">
        {depths &&
          depths.map((link, index) => {
            return (
              <>
                {link === depths.at(-1) ? (
                  <>
                    <span key={link} className="depth-non-link">
                      {link}
                    </span>
                  </>
                ) : (
                  <>
                    <a key="link" href="#" className="depth-link">
                      {link}
                    </a>
                    <span> / </span>
                  </>
                )}
              </>
            );
          })}
      </div>
    </div>
  );
};
