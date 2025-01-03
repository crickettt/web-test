document.getElementById("claimButton").addEventListener("click", function () {
    // Play Audio
    const audio = document.getElementById("prankAudio");
    audio.play();

    // Show Prank Content
    const prankContent = document.getElementById("prankContent");
    prankContent.classList.remove("hidden");

    // Hide Popup
    document.querySelector(".popup").style.display = "none";
});
