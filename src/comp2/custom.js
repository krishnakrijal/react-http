import {useState} from 'react';

const useHook = ()=>{

    const [salary,setSalary] = useState(10000);

    const increaseSalary = ()=>{
        setSalary(salary+200);
    }
    return [salary,increaseSalary]
    
}
export default useHook;