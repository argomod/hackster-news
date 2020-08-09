import React from "react";

const CategorySort = props => {
  return (
    <ul className="category-sort border mb-45">
      <li className="body-m tab-active">All</li>
      <li className="body-m">Drafts</li>
      <li className="body-m">Submitted</li>
      <li className="body-m">Scheduled</li>
      <li className="body-m">Published</li>
    </ul>
  );
};

export default CategorySort;
