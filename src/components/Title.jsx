import React from "react";

function Title({children}) {
    return (<div className="highlight-title">
        <h1>{children}</h1>
    </div>);
}

export default Title;