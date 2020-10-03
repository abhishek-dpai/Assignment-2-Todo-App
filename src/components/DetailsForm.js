import React from "react";
function DetailsForm(props) {
  const { id, details } = props;
  return details.filter((detail) => {
    {
      return detail.id === id && <h1> {detail.description} </h1>;
    }
  });
}
export default DetailsForm;
