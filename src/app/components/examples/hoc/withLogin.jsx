import React from "react";
import SmallTitle from "../../common/typografy/smallTitle";

const withLogin = (Component) => (props) => {
    const isLogged = localStorage.getItem("auth");
    return (
        <>
            {isLogged ? (
                <Component {...props} />
            ) : (
                <SmallTitle>Auth</SmallTitle>
            )}
        </>
    );
};

export default withLogin;
