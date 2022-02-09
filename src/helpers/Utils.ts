// list of currencies
export const currencies = ['EUR', 'USD', 'CNY'];


// returns formatted string of the current date in ->  dd-mm-yyyy
export const todaysDate = (): string => {
    return new Date().toISOString().split('T')[0];
}