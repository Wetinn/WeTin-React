export default function formatDateToISO(dateString) {
  const [day, month, year] = dateString.split('/');
  return `${year}-${month}-${day}`;
};