document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      document.getElementById("modal").style.display = "block";
    }, 2000);
  
    document.getElementById("modal-close").addEventListener("click", function() {
      document.getElementById("modal").style.display = "none";
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      document.getElementById("modal2").style.display = "block";
    }, 8000);
  
    document.getElementById("modal-close2").addEventListener("click", function() {
      document.getElementById("modal2").style.display = "none";
    });
  });