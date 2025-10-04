// Tab switching functionality
function showTab(tabName) {
    // Hide all sections
    const sections = document.querySelectorAll('.calculator-section');
    sections.forEach(section => section.classList.remove('active'));
    
    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Show selected section
    document.getElementById(tabName).classList.add('active');
    
    // Add active class to clicked tab
    event.target.classList.add('active');
}

// Convert overs (decimal format) to balls
function oversToBalls(overs) {
    const completeOvers = Math.floor(overs);
    const balls = (overs - completeOvers) * 10;
    return (completeOvers * 6) + balls;
}

// Calculate time lost for 50 Over 1st Innings
function calculate50First() {
    const cameOff = document.getElementById('came-off').value;
    const cameBackOn = document.getElementById('came-back-on').value;
    const extraTime = parseFloat(document.getElementById('extra-time').value) || 0;
    const intervalTime = parseFloat(document.getElementById('interval-time').value) || 0;
    
    const timeLostDiv = document.getElementById('time-lost-result');
    const effectiveTimeLostDiv = document.getElementById('effective-time-lost-result');
    
    if (!cameOff || !cameBackOn) {
        timeLostDiv.textContent = 'Please enter both times';
        timeLostDiv.classList.add('error');
        effectiveTimeLostDiv.textContent = '';
        return;
    }
    
    // Convert time strings to minutes
    const [offHours, offMinutes] = cameOff.split(':').map(Number);
    const [onHours, onMinutes] = cameBackOn.split(':').map(Number);
    
    const offTotalMinutes = offHours * 60 + offMinutes;
    const onTotalMinutes = onHours * 60 + onMinutes;
    
    // Calculate difference (C)
    let timeLost = onTotalMinutes - offTotalMinutes;
    
    // Handle case where time goes past midnight
    if (timeLost < 0) {
        timeLost += 24 * 60;
    }
    
    timeLostDiv.textContent = `Time Lost (C): ${timeLost} minutes`;
    timeLostDiv.classList.remove('error');
    
    // Calculate Effective playing time lost (F) = C - (D + E)
    const effectiveTimeLost = timeLost - (extraTime + intervalTime);
    effectiveTimeLostDiv.textContent = `Effective playing time lost (F): ${effectiveTimeLost} minutes`;
    effectiveTimeLostDiv.classList.remove('error');
    
    // Get Net playing time available (A)
    const netTime = parseFloat(document.getElementById('net-time').value) || 420;
    
    // Calculate Remaining playing time available (G) = A - F
    const remainingTime = netTime - effectiveTimeLost;
    const remainingTimeDiv = document.getElementById('remaining-time-result');
    remainingTimeDiv.textContent = `Remaining playing time available (G): ${remainingTime} minutes`;
    remainingTimeDiv.classList.remove('error');
    
    // Calculate H = G / 4.2 (to 2 decimal places)
    const dividedTime = (remainingTime / 4.2).toFixed(2);
    const dividedTimeDiv = document.getElementById('divided-time-result');
    dividedTimeDiv.textContent = `G divided by 4.2 (H): ${dividedTime}`;
    dividedTimeDiv.classList.remove('error');
    
    // Calculate I = H / 2 (round up fractions)
    const maxOvers = Math.ceil(parseFloat(dividedTime) / 2);
    const maxOversDiv = document.getElementById('max-overs-result');
    maxOversDiv.textContent = `Max overs per team (I): ${maxOvers} overs`;
    maxOversDiv.classList.remove('error');
    
    // Calculate Maximum overs per bowler = I / 5 (round up)
    const maxBowlerOvers = Math.ceil(maxOvers / 5);
    const maxBowlerOversDiv = document.getElementById('max-bowler-overs-result');
    maxBowlerOversDiv.textContent = `Maximum overs per bowler: ${maxBowlerOvers} overs`;
    maxBowlerOversDiv.classList.remove('error');
    
    // Calculate Power Plays based on max overs per team
    const powerplayData = getPowerplayData(maxOvers);
    const powerplayDiv = document.getElementById('powerplay-result');
    
    if (powerplayData) {
        powerplayDiv.innerHTML = `
            <strong>Power Play Restrictions:</strong><br>
            Power Play 1: ${powerplayData.powerplay1} overs<br>
            Power Play 2: ${powerplayData.powerplay2} overs<br>
            Power Play 3: ${powerplayData.powerplay3} overs
        `;
        powerplayDiv.classList.remove('error');
    } else {
        powerplayDiv.textContent = `No power play data available for ${maxOvers} overs`;
        powerplayDiv.classList.add('error');
    }
    
    // Show the results overlay
    showOverlay();
}

// Show overlay
function showOverlay() {
    document.getElementById('results-overlay').classList.add('active');
}

// Hide overlay
function hideOverlay() {
    document.getElementById('results-overlay').classList.remove('active');
}

// Reset app
function resetApp() {
    // Reset all input fields
    document.getElementById('net-time').value = '420';
    document.getElementById('game-started').value = '';
    document.getElementById('came-off').value = '';
    document.getElementById('came-back-on').value = '';
    document.getElementById('extra-time').value = '';
    document.getElementById('interval-time').value = '';
    document.getElementById('new-interval-length').value = '';
    
    // Clear all results
    document.getElementById('time-lost-result').textContent = '';
    document.getElementById('effective-time-lost-result').textContent = '';
    document.getElementById('remaining-time-result').textContent = '';
    document.getElementById('divided-time-result').textContent = '';
    document.getElementById('max-overs-result').textContent = '';
    document.getElementById('max-bowler-overs-result').textContent = '';
    document.getElementById('powerplay-result').textContent = '';
    
    // Hide overlay
    hideOverlay();
}

// Add Enter key support for all inputs
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const button = this.closest('.calc-card').querySelector('button');
                if (button) {
                    button.click();
                }
            }
        });
    });
});
