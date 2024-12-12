
document.getElementById('code-input').addEventListener('input', (event) => {
    const code = event.target.value;
    const outputElement = document.getElementById('output');
    outputElement.textContent = `Code Preview:\n${code}`;
});
