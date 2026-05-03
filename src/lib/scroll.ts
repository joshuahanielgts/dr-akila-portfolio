/**
 * Smoothly scrolls to a target element by its ID without updating the URL hash.
 * @param id The ID of the target element (with or without #)
 * @param offset The offset from the top (default 80 for fixed header)
 */
export const scrollToId = (id: string, offset: number = 80) => {
  const targetId = id.replace("#", "");
  const element = document.getElementById(targetId);
  
  if (element) {
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};
