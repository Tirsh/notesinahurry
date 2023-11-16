export const getCurrentDateString = () => {
    const months = ['янв.', 'фев.', 'мар.', 'апр.', 'мая', 'июня', 'июля', 'авг.', 'сен.', 'окт.', 'ноя.', 'дек.'];
    const date = new Date();
    const day = date.getDate(); // возвращает текущий день месяца
    const month = months[date.getMonth()];
    const year = date.getFullYear(); // возвращает текущий год
    const hour = date.getHours(); // возвращает текущий час
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${addZero(day)} ${month} ${year} г., ${addZero(hour)}:${addZero(minutes)}:${seconds}`;
}

function addZero(num){
    if(num < 9){
        return '0' + num;
    }
    return num;
}