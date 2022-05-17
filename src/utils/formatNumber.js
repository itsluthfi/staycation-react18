export default (num) => {
  const formating = new Intl.NumberFormat("en-EN");
  return formating.format(num);
};
