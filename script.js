document.getElementById('countButton').addEventListener('click', calculateDays);

function calculateDays() {
    const targetDateInput = document.getElementById('targetDate').value;

    if (!targetDateInput) {
        document.getElementById('result').innerText = "Please select a date.";
        return;
    }

    const targetDate = new Date(targetDateInput);
    const currentDate = new Date();
    
    // Calculate the difference in milliseconds
    const timeDifference = targetDate - currentDate;

    // Convert to days
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    // Format the target date to dd mm yyyy
    const formattedTargetDate = formatDate(targetDate); // NEW LINE

    if (daysDifference >= 0) {
        document.getElementById('result').innerText = `There are ${daysDifference} days until ${formattedTargetDate}.`;
    } else {
        document.getElementById('result').innerText = `The date ${formattedTargetDate} has already passed.`;
    }
}

// NEW FUNCTION ADDED
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0'); // Get day and pad with zero if needed
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month (0-indexed) and pad
    const year = date.getFullYear(); // Get full year

    return `${day}-${month}-${year}`; // Return formatted date as "dd mm yyyy"
}