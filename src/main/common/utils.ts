export function isValidPhone(phone: string) {
    const phoneLengthWithDddAndPrefix = 13

    if (
        !phone ||
        typeof phone !== 'string' ||
        onlyDigits(phone).length !== phoneLengthWithDddAndPrefix
    )
        return false
    return true
}

export function onlyDigits(value: unknown) {
    return String(value).replace(/\^[0-9]/g, '')
}
