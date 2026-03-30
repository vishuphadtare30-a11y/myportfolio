window.onload = function () {
  const bars = document.querySelectorAll(".progress-bar");

  bars.forEach(bar => {
    let value = bar.getAttribute("data-percent");
    bar.style.width = value + "%";
  });
};