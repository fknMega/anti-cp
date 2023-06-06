window.addEventListener('DOMContentLoaded', () => {
    const typingText = document.getElementById('typing-text');
    const cursor = document.getElementById('cursor');
    const textToType = "Get Help, Don't Be a Pedo.";
    const pauseDuration = 1000; // Pause duration in milliseconds
    let index = 0;
    let typingInterval;

    function type() {
        if (index === textToType.indexOf(',')) {
            clearInterval(typingInterval);
            setTimeout(() => {
                typingInterval = setInterval(type, 100);
            }, pauseDuration);
        }

        typingText.textContent = textToType.slice(0, index);
        index++;

        if (index > textToType.length) {
            clearInterval(typingInterval);
            cursor.style.display = 'none'; // Hide the cursor
        }
    }

    typingInterval = setInterval(type, 100);
});
