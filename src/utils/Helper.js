export const convertToISOIST = (date, time) => {
  let [timePart, period] = time.split(' ');
  let [hour, minute] = timePart.split(':').map(Number);

  if (period === 'PM' && hour !== 12) {
    hour += 12;
  } else if (period === 'AM' && hour === 12) {
    hour = 0;
  }

  const year = date.split('-')[0];
  const month = date.split('-')[1];
  const day = date.split('-')[2];

  return `${year}-${month}-${day}T${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}:00.000+05:30`;
}; 

export const convertFromISOIST = (isoString) => {
  const date = new Date(isoString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  let hour = date.getHours();
  const minute = String(date.getMinutes()).padStart(2, '0');
  const period = hour >= 12 ? 'PM' : 'AM';

  if (hour > 12) {
    hour -= 12;
  } else if (hour === 0) {
    hour = 12;
  }

  const time = `${String(hour).padStart(2, '0')}:${minute} ${period}`;
  const formattedDate = `${year}-${month}-${day}`;

  return { date: formattedDate, time };
};