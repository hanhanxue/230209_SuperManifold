import { useEffect, useState } from 'react'

export const useScrollPosition = () => {

    let prevScrollY = 0

    let currDirection = false
    let prevDirection = false

    const [direction, setDirection] = useState(true);
    const [directionChange, setDirectionChange] = useState(false);

    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollPositionAtChange, setScrollPositionAtChange] = useState(0);

    const update = () => {


        if(window.scrollY > prevScrollY) {
            currDirection = true
        } else {
            currDirection = false
        }


        if(prevDirection != currDirection) {
            setDirectionChange(true)
            setScrollPositionAtChange(window.scrollY)
        } else {
            setDirectionChange(false)
        }

        prevDirection = currDirection
        prevScrollY = window.scrollY

        setDirection(currDirection)
        setScrollPosition(window.scrollY)
    };



    useEffect(() => {
        window.addEventListener('scroll', update)
        return () => window.removeEventListener('scroll', update)
    }, [])

    return [direction, directionChange, scrollPosition, scrollPositionAtChange]
}



// let oldScrollY = 0;

// const [direction, setDirection] = useState('up');

// const controlDirection = () => {
//     if(window.scrollY > oldScrollY) {
//         setDirection('down');
//     } else {
//         setDirection('up');
//     }
//     oldScrollY = window.scrollY;
// }

// useEffect(() => {
//     window.addEventListener('scroll', controlDirection);
//     return () => {
//         window.removeEventListener('scroll', controlDirection);
//     };
// },[]);

// return [scrollPosition, lastScrollPosition, direction, valueAtDirectionChange, oldScrollY]





        // if(oldDirection == direction)
        // {
        //     setValueAtDirectionChange(window.scrollY)
        // }
        // oldDirection = direction

        // setLastScrollPosition(oldScrollY)
        // setScrollPosition(window.scrollY)

        // oldDirection = window.scrollY



            // const [scrollPosition, setScrollPosition] = useState(0)
    // const [lastScrollPosition, setLastScrollPosition] = useState(0)
    // const [valueAtDirectionChange, setValueAtDirectionChange] = useState(0)



        // let oldDirection = ''