import { useEffect } from 'react'

function useOutsideAlerter(ref, close) {
    useEffect(() => {
        /**
         * Run if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                if (close) close();
            }
        }

        // Bind the event listener
        document.addEventListener("click", handleClickOutside);

        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("click", handleClickOutside);
        };
    }, [ref]);
}

export { useOutsideAlerter };