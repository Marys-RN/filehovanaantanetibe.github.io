function showObjectifs() {

  document.getElementById("objectifText").innerHTML =
    "• Fanabeazana tanora<br>" +
    "• Leadership<br>" +
    "• Fahaiza-miaina<br>" +
    "• Tanora ho tonga VOA<br>" +
    "• Se ho namanay";

}


function showGallery() {

  let gallery = document.getElementById("gallery");

  if (gallery.style.display === "flex") {

    gallery.style.display = "none";

  } else {

    gallery.style.display = "flex";

  }

}