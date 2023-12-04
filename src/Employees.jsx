import React, { useState } from 'react';

function Manager() {
    return (<>


    </>);
}

function Participants() {
    return (<>


    </>);
}

function Mentors() {
    return (<>


    </>);
}

function Employees() {
    const [currentComponent, setCurrentComponent] = useState(<Manager />);

    const showComponent = (component) => {
        setCurrentComponent(component);
    };

    return (
        <div>
            <button onClick={() => showComponent(<Manager />)}>מנהלים</button>
            <button onClick={() => showComponent(<Participants />)}>משתתפים</button>
            <button onClick={() => showComponent(<Mentors />)}>מורים</button>

            <div>
                <h2>הקומפוננטה הנוכחית:</h2>
                {currentComponent}
            </div>
        </div>
    );
}

export default Employees;
