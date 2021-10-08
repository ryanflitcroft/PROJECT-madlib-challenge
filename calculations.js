export function copyValueTo(input, span) {
    const newInputValue = input.value;
    return span.textContent = newInputValue;
    
}