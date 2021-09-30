import React from "react";

import "../styles/NotFound.css";

function NotFoundCity({name}) {
    return (<section className="error-section">
        <div className="msg">
            <h2>Sorry we couldn't find "{name}".</h2>
            <h3>Do another search or refresh the page.</h3>
        </div>
    </section>);
}

export default NotFoundCity;