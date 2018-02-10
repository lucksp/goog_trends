import React from "react";
import ReactDelayRender from "react-delay-render";

const Loading = () => <div className="loader">Loading...</div>;

export default ReactDelayRender({ delay: 300 })(Loading);
