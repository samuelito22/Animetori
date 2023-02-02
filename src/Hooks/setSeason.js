import React from 'react'

export default function setSeason(month, index) {
    let season = ''
    let seasons = ['Winter','Spring','Summer','Fall']

    switch(month) {
        case '12':case '1':case '2':season = seasons[0+index];
        break;
        case '3':case '4':case '5':season = seasons[1+index];
        break;
        case '6':case '7':case '8':season = seasons[2+index];
        break;
        case '9':case '10':case '11':season = () =>{
            if((3+index) > 3){
                return seasons[0]
            }else{
                return seasons[3]
            }
        }
        break;
    }
    return season
}
