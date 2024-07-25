document.addEventListener("DOMContentLoaded", () => {
  
    
    const form = document.getElementById("create-task-form");

    
    form.addEventListener("submit", function (event) {
      
      event.preventDefault();

     
      console.log("Form submission prevented.");

  
      });
  });

