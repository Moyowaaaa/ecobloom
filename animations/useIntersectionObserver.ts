// Updated intersectionObserver function
export const intersectionObserver = (
  item: Element,
  options: IntersectionObserverInit,
  callback: (isIntersecting: boolean, entry: IntersectionObserverEntry) => void
) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      callback(entry.isIntersecting, entry);

      // Log the current intersecting item
      if (entry.isIntersecting) {
        console.log("Currently intersecting:", entry.target);
      }
    });
  }, options);

  observer.observe(item);

  return () => observer.unobserve(item); // Return a cleanup function
};
