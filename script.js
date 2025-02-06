document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('inputField');
    const clickButton = document.getElementById('clickButton');
    const outputContainer = document.getElementById('output');
    let entryCount = 0;

    clickButton.addEventListener('click', () => {
        if (entryCount < 10) {
            const inputValue = inputField.value;
            if (inputValue.trim() !== '') {
                const newEntry = document.createElement('div');
                newEntry.textContent = `${entryCount + 1}. ${inputValue}`;
                outputContainer.appendChild(newEntry);
                inputField.value = '';
                entryCount++;
            }
        } else {
            alert('You can only add up to 10 entries.');
        }
    });
});