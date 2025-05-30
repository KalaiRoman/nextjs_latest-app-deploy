import React from "react";

function page({params}) {
  const { id } = params;
  return <div>Oder Single Id Get change new {id}</div>;
}

export default page;
