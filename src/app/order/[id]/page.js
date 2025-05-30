import React from "react";

function page({params}) {
  const { id } = params;
  return <div>Oder Single Id Get {id}</div>;
}

export default page;
