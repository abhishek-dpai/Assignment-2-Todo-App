import React from "react";
function DetailsForm(props) {
  const { id, details } = props;
  console.log("props in detail form are",props)
  // return details.filter((detail) => {
    return (<h1> {details.text} </h1>)
    
  // });
}
export default DetailsForm;
