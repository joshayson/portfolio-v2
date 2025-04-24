document.addEventListener("keydown", (e) => {
    const key = e.key.toLowerCase();
  
    const pageMap = {
      h: "index.html",
      p: "index.html#projects",
      l: "index.html#links" 
    };
  
    const targetPage = pageMap[key];
  
    if (targetPage) {
      window.location.href = targetPage;
    }
  });
