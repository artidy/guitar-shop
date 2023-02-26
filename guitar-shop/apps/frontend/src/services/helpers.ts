import dayjs from 'dayjs';

function getDatePreview(date: Date): string {
  return dayjs(date).format('DD.MM.YYYY');
}

export {
  getDatePreview
}
