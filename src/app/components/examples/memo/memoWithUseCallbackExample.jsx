import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

const LogOutBtn = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render btn");
    });

    return (
        <button className="btn btn-primary" onClick={onLogOut}>
            Log Out
        </button>
    );
};

LogOutBtn.propTypes = {
    onLogOut: PropTypes.func
};

function areEqual(prevState, nextState) {
    if (prevState.onLogOut !== nextState.onLogOut) {
        return false;
    }
    return true;
}

const MemoizedLogOutBtn = React.memo(LogOutBtn, areEqual);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogOut = useCallback(() => {
        localStorage.removeItem("auth");
    }, [props]);

    return (
        <>
            <button
                className="btn btn-primary"
                onClick={() => setState(!state)}
            >
                Initiate rerender
            </button>
            <MemoizedLogOutBtn onLogOut={handleLogOut} />
        </>
    );
};

export default MemoWithUseCallbackExample;
