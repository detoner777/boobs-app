const date = new Date();

export const getCurrentTime = () => {
  return new Intl.DateTimeFormat("default", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};
