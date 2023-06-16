export const observe = (
  elementId: string,
  animationClass = 'animate-fadeIn',
  threshold = 0.1
) => {
  observer(animationClass, threshold).observe(
    document.getElementById(elementId) as HTMLElement
  )
}

const observer = (animationClass: string, threshold: number) => {
  return new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass)
        }
      })
    },
    { threshold }
  )
}
