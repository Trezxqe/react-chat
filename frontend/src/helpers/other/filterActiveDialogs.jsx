const filterActiveDialogs = (dialogsArr, message) => {
  const filterByName = (item) => item.dialogName !== message.dialogName;
  const filteredDialogs = dialogsArr.filter(filterByName);
  return [message, ...filteredDialogs];
};

export default filterActiveDialogs;
