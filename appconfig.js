export const config = {
  cookies: {
    user: {
      name: "userinfo",
    },
  },
  style: {
    rounded: " rounded-2xl ",
    colors: {
      danger: "#dc3545",
      primary: "#007bff",
      info: "#17a2b8",
      warning: "#ffc107",
      successful: "#28a745"
    },
  },

  validation: {
    regexNumber: /^\+\d{1,3}\s\d{6,14}$/,
  },
  notificationTimeOut:  2000, // Time in ms
};
