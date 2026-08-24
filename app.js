// -----------------------------
// Kjersti & Morten Bryllupsapp
// -----------------------------

// Vis riktig side
function showPage(pageId) {

  const pages = document.querySelectorAll(".page");

  pages.forEach(page => {
    page.classList.remove("active");
  });

  document
    .getElementById(pageId)
    .classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


// Forsiden vises først
showPage("home");


// -----------------------------
// RSVP (Foreløpig uten database)
// -----------------------------

const rsvpForm =
  document.getElementById("rsvpForm");


rsvpForm.addEventListener(
  "submit",
  function (event) {

    event.preventDefault();

    // Her skal vi sende til Supabase senere

    document
      .getElementById("rsvpForm")
      .style.display = "none";


    document
      .getElementById("rsvpSuccess")
      .style.display = "block";

  }

);
