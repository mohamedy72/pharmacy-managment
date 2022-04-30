import { useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    console.log(ref.current);
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

export default useOutsideAlerter;
