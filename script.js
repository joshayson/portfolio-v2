document.addEventListener("keydown", (e) => {
    const key = e.key.toLowerCase();
  
    const pageMap = {
      h: "index.html",
      p: "projects.html",
      l: "index.html#links" 
    };
  
    const targetPage = pageMap[key];
  
    if (targetPage) {
      window.location.href = targetPage;
    }
  });

// hover effect for headings 
const descriptionHeading = document.querySelectorAll(".description-container h3");

descriptionHeading.forEach((heading) => {
  heading.addEventListener("mouseenter", () => {
    heading.style.color = "rgb(255, 64, 0)";
  });

  heading.addEventListener("mouseleave", () => {
    heading.style.color = "white";
  });
});


// hover effect for links
const links = document.querySelectorAll("li");

links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
        link.style.color = "rgb(255, 64, 0)";
        console.log('selected')
    });

    link.addEventListener("mouseleave", () => {
        link.style.color = "white";
    });
})


// hover effect for all projects link

const allProjects = document.querySelector("#all-projects")

allProjects.addEventListener("mouseenter", () => {
    allProjects.style.color = "rgb(255, 64, 0)";
    allProjects.style.textDecoration = "underline";
});

allProjects.addEventListener("mouseleave", () => {
    allProjects.style.color = "white";
    allProjects.style.textDecoration = "none";
});