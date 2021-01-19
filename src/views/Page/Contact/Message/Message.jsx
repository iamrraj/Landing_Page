import Swal from "sweetalert2";

export const AlertMessage = (title, text, icon) => {
  Swal.fire({
    title: title,
    icon: icon,
    text: text,
    showConfirmButton: false,
    timer: 2000,
  });
};

export const AlertLoading = (title, text, icon) => {
  Swal.fire({
    title: title,
    icon: icon,
    text: text,
    showCancelButton: false,
    showConfirmButton: false,
    timerProgressBar: true,
    onBeforeOpen: () => {
      Swal.showLoading();
    },
  });
};
