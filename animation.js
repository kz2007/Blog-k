const observerNav = new IntersectionObserver(entries => {
  entries.forEach(entry => {  
    if(entry.isIntersecting){
      let List = document.querySelector("nav").childNodes
      List[0].classList.add("fadeInLeft")
      List[2].classList.add("fadeInDown")
    }

  })

})
const observerAboutMe = new IntersectionObserver(entries => {
  entries.forEach(entry => {  
    if(entry.isIntersecting){
      let List = document.querySelector("#AboutMe").childNodes
      List[0].classList.add("fadeInLeft")
      List[2].classList.add("fadeInTop")
    }

  })

})
const observerSkills = new IntersectionObserver(entries => {
  entries.forEach(entry => {  
    if(entry.isIntersecting){
      let List = document.querySelectorAll(".Skill")
      List[0].classList.add("fadeInLeft")
      List[1].classList.add("fadeInTop")
      List[2].classList.add("fadeInRight")
    }

  })

})
const observerProjects = new IntersectionObserver(entries => {
  entries.forEach(entry => {  
    if(entry.isIntersecting){
      let List = document.querySelectorAll("#Projects")
      List[0].classList.add("fadeInRight")
      List[2].classList.add("fadeInRight")
    }

  })

})
const observerFooter = new IntersectionObserver(entries => {
  entries.forEach(entry => {  
    if(entry.isIntersecting){
      document.querySelector("footer").classList.add("fadeInDown")
    }

  })

})

observerNav.observe(document.querySelector("nav"))
observerAboutMe.observe(document.querySelector("#AboutMe"))
observerSkills.observe(document.querySelector("#Skills"))
observerProjects.observe(document.querySelector("#Projects"))
observerFooter.observe(document.querySelector("footer"))