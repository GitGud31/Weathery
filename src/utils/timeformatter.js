export function timeFormatter(time) {

    const formatted = time.split(' ')[0];
    const hours = formatted.split(':')[0];
    const minutes = formatted.split(':')[1];

    return hours + ":" + minutes;
}
