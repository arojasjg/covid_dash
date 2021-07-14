export const formatDateAsString = (date: Date): string => {
  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()
  let result = `${year}-${month}-${day}`;
  if (month < 10) {
    result = `${year}-0${month}-${day}`;
  }
  return result;
}
