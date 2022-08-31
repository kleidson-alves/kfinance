export function formatValue(value: number) {
    return Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);
}

export function formatDate(date: Date) {
    return Intl.DateTimeFormat('pt-BR', {
        timeZone: 'UTC',
    }).format(date);
}

export function formatNumber(number: string) {
    number = number.replace(',', '.');

    return Number(number);
}
