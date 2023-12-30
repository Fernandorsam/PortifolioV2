document.addEventListener("DOMContentLoaded", function() {
  const title = document.querySelector(".animated-title");
  const name = "Fernando Rodrigues";
  function writeName(index) {
    if (index < name.length) {
      const span = document.createElement("span");
      span.textContent = name.charAt(index);
      title.appendChild(span);
      index++;

      
      setTimeout(function() {
        span.style.transform = "translateY(0)";
      }, 50 * index);

      setTimeout(function() {
        writeName(index);
      }, 200); 
    } else {

      setTimeout(function() {
        title.style.transition = "transform 0.5s ease-in-out";
        title.style.transform = "translateY(0)";
        setTimeout(function() {
          title.textContent = ""; 

          animateName();
        }, 3000);

      }, 400);
    }
  }

  function animateName() {
    title.style.transition = "";
    title.style.transform = "translateY(100%)";
    writeName(0);
  }

  animateName();
});