const timeSince = (date: string) => {
  const transformedDate = new Date(date)
  // @ts-ignore
  const seconds = Math.floor((new Date() - transformedDate) / 1000);
  const isYears = seconds / 31536000 > 1;
  if (isYears) {
    const interval = seconds / 31536000;
    const moreThanOneYear = interval > 2;
    return `${Math.floor(interval)} year${moreThanOneYear ? 's': ''} ago`;
  }
  
  const isMonths = seconds / 2592000 > 2;
  if (isMonths) {
    const interval = seconds / 2592000;
    return `${Math.floor(interval)} months ago`;
  }
  
  const isWeeks = seconds / 86400 / 7 > 1;
  if (isWeeks) {
    const interval = seconds / 86400 / 7;
    const moreThanOneWeek = interval > 2;
    return `${Math.floor(interval)} week${moreThanOneWeek ? 's': ''} ago`;
  }
  
  const isDays = seconds / 86400 > 2;
  if (isDays) {
    const interval = seconds / 86400;
    return `${Math.floor(interval)} days ago`;
  }
  
  const isYesteday = seconds / 86400 > 1;
  if (isYesteday) {
    return 'Yesterday';
  }
  
  const isHours = seconds / 3600 > 2;
  if (isHours) {
    const interval = seconds / 3600;
    return `${Math.floor(interval)} hours ago`;
  }
  
  return transformedDate.toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit'
  });
};

const transformDateToLocaleFormat = (date: string) => {
  const transformedDate = new Date(date);
  const formattedTime = transformedDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
  const formattedDate = transformedDate.toLocaleDateString('id-ID')
  return `${formattedDate} ${formattedTime}`
}

export default {
  timeSince,
  transformDateToLocaleFormat
}
