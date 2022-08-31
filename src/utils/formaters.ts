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
