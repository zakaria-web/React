import React from 'react';
import Card from './Card';

const CardList = ({Rebots}) => {
  if(true){
    throw new Error('Nooo!')
  }
    return(
        <div>
        {
            Rebots.map((user, i) => {
              return (
                <Card 
                    key = {i}
                    id={Rebots[i].id}
                    name={Rebots[i].name}
                    email={Rebots[i].email}
                />
            );
          })

        }
            
        </div>

    );
}
export default CardList;