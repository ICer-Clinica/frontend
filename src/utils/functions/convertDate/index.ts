export function convertDate(date: string) {
    var datearray = date.split("/");

    return datearray[1] + '/' + datearray[0] + '/' + datearray[2];
}