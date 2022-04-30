export default (num) => {
  const formating = new Intl.NumberFormat("id-ID");
  return formating.format(num);
};
