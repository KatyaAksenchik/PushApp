export const validateNumberField = (value) => {
    if (value && !isNaN(parseFloat(value)) && isFinite(value)) {
        return value;
    } else {
        return {
            message: "Введенные значения должны быть числами"
        }
    }
};