import React, { useState } from 'react';
import EmployeeCard from './EmployeeCard';

function Manager() {
    return (<>
        <div className='flex flex-wrap w-full justify-center gap-5'>
            <EmployeeCard Name='Emma' Role='Web Developer' srcImg='img-3.png' />
            <EmployeeCard Name='Emma' Role='Web Developer' srcImg='img-3.png' />
            <EmployeeCard Name='Emma' Role='Web Developer' srcImg='img-3.png' />
            <EmployeeCard Name='Emma' Role='Web Developer' srcImg='img-3.png' />
            <EmployeeCard Name='Emma' Role='Web Developer' srcImg='img-3.png' />
            <EmployeeCard Name='Emma' Role='Web Developer' srcImg='img-3.png' />
            <EmployeeCard Name='Emma' Role='Web Developer' srcImg='img-3.png' />
            <EmployeeCard Name='Emma' Role='Web Developer' srcImg='img-3.png' />
            <EmployeeCard Name='Emma' Role='Web Developer' srcImg='img-3.png' />
            <EmployeeCard Name='Emma' Role='Web Developer' srcImg='img-3.png' />
        </div>


    </>);
}

function Participants() {
    return (<>
        <div className="flex flex-wrap w-full justify-center  ">
            <EmployeeCard Name='Emma' Role='Web Developer' srcImg='img-3.png' />
            <EmployeeCard Name='Emma' Role='Web Developer' srcImg='img-3.png' />
            <EmployeeCard Name='Emma' Role='Web Developer' srcImg='img-3.png' />
            <EmployeeCard Name='Emma' Role='Web Developer' srcImg='img-3.png' />
        </div>

    </>);
}

function Mentors() {
    return (<>

        <EmployeeCard Name='Emma' Role='Web Developer' srcImg='img-3.png' />
        <EmployeeCard Name='Emma' Role='Web Developer' srcImg='img-3.png' />
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
                {currentComponent}
            </div>
        </div>
    );
}

export default Employees;
