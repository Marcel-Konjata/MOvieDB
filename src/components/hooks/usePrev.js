import {useEffect,useRef} from 'react'

// the reason why I wrote this instead of class based component
// with DidUpdate method is to try learn hooks as well
// after all this project is whole about learn from mistakes

export function usePrev(value){
const reference = useRef();

useEffect(()=>{
    reference.current = value;
},[value]); //if the value changes the hook will be trigerred)

return reference.current;
}