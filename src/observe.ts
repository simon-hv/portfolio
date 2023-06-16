export const observe = (className: string) => {
  observer.observe(document.querySelector(className) as HTMLElement)
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fadeIn')
    }
  })
})
