import React, {Fragment} from 'react';
import Card from './Card';

const CardList = ({Robots}) => {
    
    return(
        <Fragment>
            {
                Robots.map((user,i)=>{
                return(
                <Card key={user} 
                id={Robots[i].id} 
                name={Robots[i].name} 
                email={Robots[i].email}/>
       );
    })
            }
        </Fragment>
    );
}

export default CardList;
