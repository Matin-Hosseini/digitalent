const swalSuccess = (message) => {
  Swal.fire({
    icon: "success",
    title: message,
    confirmButtonText: "بزن بریم",
    // timer: 6000,
  })
};

const swalError = (message, buttonText = "باشه") => {
  Swal.fire({
    title: "!خطا",
    text: message,
    icon: "error",
    confirmButtonText: buttonText,
  });
};

export { swalError, swalSuccess };
