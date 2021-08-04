import { useEffect, useState } from "react"
import { getGift } from '../helpers/getGifts'


export const useFetchGifts = ( category ) =>{

    const [state, setState] = useState({
        data: [],
        loading: true

    });

    useEffect( () =>{

        getGift(category)
            .then( imgs => {

                setTimeout(() =>{

                    setState({
                        data: imgs,
                        loading: false
                    });
                }, 3000)

            });
    }, [category])

    return state;
}