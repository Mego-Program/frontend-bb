import EmployeeCard from './EmployeeCard';
import React, { useState, useEffect } from 'react';
import { getTeamMembers } from '../../cms-to-teamMembers';



export default function Employees() {
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        async function fetchTeamMembers() {
            const members = await getTeamMembers();
            setTeamMembers(members);
        }
        
        fetchTeamMembers();
    }, []);

    return (<>
        <div className='flex flex-wrap w-full justify-center gap-5'>

        {teamMembers.map(member => (
                <EmployeeCard 
                    key={member.name} 
                    Name={member.name} 
                    Role={member.jtitle} 
                    srcImg={member.picture} // Make sure to use the correct property for the image URL
                />
            ))}
            
        </div>

    </>);
}

