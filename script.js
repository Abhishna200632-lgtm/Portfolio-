// Simple interactivity: Reveal extra info when button is clicked
document.getElementById('showMoreBtn').onclick = function() {
  var info = document.getElementById('moreInfo');
  if (info.style.display === 'none') {
    info.style.display = 'block';
    this.textContent = "Show Less";
  } else {
    info.style.display = 'none';
    this.textContent = "Show More";
  }
};