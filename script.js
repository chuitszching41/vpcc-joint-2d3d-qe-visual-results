const viewer = document.getElementById("imageViewer");
const viewerCanvas = document.querySelector(".viewer-canvas");
const viewerImage = document.getElementById("viewerImage");

const zoomInButton = document.getElementById("zoomIn");
const zoomOutButton = document.getElementById("zoomOut");
const resetZoomButton = document.getElementById("resetZoom");
const closeViewerButton = document.getElementById("closeViewer");

let scale = 1;
let translateX = 0;
let translateY = 0;

let isDragging = false;
let startX = 0;
let startY = 0;

function updateTransform() {
  viewerImage.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
}

function resetView() {
  scale = 1;
  translateX = 0;
  translateY = 0;
  updateTransform();
}

function openViewer(src, altText) {
  viewerImage.src = src;
  viewerImage.alt = altText || "Expanded visual result";
  resetView();
  viewer.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeViewer() {
  viewer.classList.remove("active");
  viewerImage.src = "";
  document.body.style.overflow = "";
  resetView();
}

document.querySelectorAll(".zoomable").forEach((image) => {
  image.addEventListener("click", () => {
    openViewer(image.src, image.alt);
  });
});

zoomInButton.addEventListener("click", () => {
  scale = Math.min(scale + 0.25, 6);
  updateTransform();
});

zoomOutButton.addEventListener("click", () => {
  scale = Math.max(scale - 0.25, 0.5);
  updateTransform();
});

resetZoomButton.addEventListener("click", () => {
  resetView();
});

closeViewerButton.addEventListener("click", () => {
  closeViewer();
});

viewer.addEventListener("click", (event) => {
  if (event.target === viewer) {
    closeViewer();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeViewer();
  }
});

viewerCanvas.addEventListener("wheel", (event) => {
  event.preventDefault();

  if (event.deltaY < 0) {
    scale = Math.min(scale + 0.15, 6);
  } else {
    scale = Math.max(scale - 0.15, 0.5);
  }

  updateTransform();
});

viewerImage.addEventListener("mousedown", (event) => {
  if (!viewer.classList.contains("active")) return;

  isDragging = true;
  startX = event.clientX - translateX;
  startY = event.clientY - translateY;
  viewerImage.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (event) => {
  if (!isDragging) return;

  translateX = event.clientX - startX;
  translateY = event.clientY - startY;
  updateTransform();
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  viewerImage.style.cursor = "grab";
});