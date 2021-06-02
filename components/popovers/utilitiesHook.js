import { useEffect } from 'react'

// outside area click
function useOutsideAlerter(ref, show, close) {

    function handleClickOutside(event) {
        // console.log("i am running");
        if (ref.current && !ref.current.contains(event.target)) {
            if (close) close();
        }
        // if (close) close();
    }

    useEffect(() => {
        /**
         * Run if clicked on outside of element
         */
        if (show) {
            console.log("shjo")
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", () => { });
        };
    }, [ref, show]);
}

export { useOutsideAlerter };