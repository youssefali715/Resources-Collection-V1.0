if (document.querySelectorAll(".cardUnit").length === 4) {
  for (let i = 0; i < document.querySelectorAll(".cardUnit").length; i++) {
    document
      .querySelectorAll(".cardUnit")
      [i].setAttribute("style", "flex-basis: 30.5%");
  }
}
