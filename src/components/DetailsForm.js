import React from "react";
function DetailsForm(props) {
  const { id, details } = props;
  console.log("in Details form", id, " ", details[0]);

  const filteredDetail = details.filter((detail) => {
    console.log(detail.id);
    return detail.id === id;
  });
  console.log("props in detail form are", props);
  return (
    <main className="details-form-container">
      <form className="details-form">
        <h1>ID: {filteredDetail.id}</h1>
        <h2>Description: {filteredDetail.description}</h2>
        <h1>Date: {filteredDetail.date}</h1>
        <h1>Priority: {filteredDetail.priority}</h1>
        <button>Close</button>
      </form>
    </main>
  );
}
export default DetailsForm;
