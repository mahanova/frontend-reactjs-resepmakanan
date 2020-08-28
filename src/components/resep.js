import React from 'react'

const Resep = ({resep}) => {
    return (
        <div>
            {resep.map((resep) => (
                <div>
                 <h2>12346</h2>
                 <h2>{resep.nama}</h2>
                 <h2>{resep.deskripsi}</h2>
                </div>
              )
            
            )}
        </div>
    )
};

export default Resep
