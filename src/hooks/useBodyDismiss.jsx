const useBodyDismiss = (ref, handler) => {
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      handler(false);
    }
  }
  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
};

export default useBodyDismiss;
