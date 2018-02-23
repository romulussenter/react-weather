export const isEmptyObject = (obj) => Object.keys(obj).length === 0;

export const convertTimestamp = (seconds) => {
    const d = new Date ( seconds * 1000); //convert to ms
//format: mm/dd/yyyy HH:MM
const year = d.getFullYear();
const month = d.getMonth();
const day = d.getDate();
const hours = d.getHours();
const minutes = d.getMinutes();
return `${month + 1}/${day}/${year}/${hours}:${minutes}`;

}
