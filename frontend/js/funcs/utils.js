const followMouse = () => {
  const mouseFollower = document.querySelector(".mouse-follower");
  const mouseFollower2 = document.querySelector(".mouse-follower-2");
  window.addEventListener("mousemove", (e) => {
    mouseFollower.style.cssText =
      mouseFollower2.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px`;
  });
};

const showSwal = (message, icon, button, callback) => {
  Swal.fire({
    icon: icon,
    title: message,
    confirmButtonText: button,
  }).then((result) => callback(result));
};

export { followMouse, showSwal };
