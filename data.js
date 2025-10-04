// Cricket Powerplay Database
// Structure: Innings Duration -> Powerplay 1, Powerplay 2, Powerplay 3

const cricketData = {
    powerplays: [
        { inningsDuration: 20, powerplay1: 4, powerplay2: 12, powerplay3: 4 },
        { inningsDuration: 21, powerplay1: 4, powerplay2: 13, powerplay3: 4 },
        { inningsDuration: 22, powerplay1: 5, powerplay2: 13, powerplay3: 4 },
        { inningsDuration: 23, powerplay1: 5, powerplay2: 14, powerplay3: 4 },
        { inningsDuration: 24, powerplay1: 5, powerplay2: 14, powerplay3: 5 },
        { inningsDuration: 25, powerplay1: 5, powerplay2: 15, powerplay3: 5 },
        { inningsDuration: 26, powerplay1: 5, powerplay2: 16, powerplay3: 5 },
        { inningsDuration: 27, powerplay1: 6, powerplay2: 16, powerplay3: 5 },
        { inningsDuration: 28, powerplay1: 6, powerplay2: 17, powerplay3: 5 },
        { inningsDuration: 29, powerplay1: 6, powerplay2: 17, powerplay3: 6 },
        { inningsDuration: 30, powerplay1: 6, powerplay2: 18, powerplay3: 6 },
        { inningsDuration: 31, powerplay1: 6, powerplay2: 19, powerplay3: 6 },
        { inningsDuration: 32, powerplay1: 7, powerplay2: 19, powerplay3: 6 },
        { inningsDuration: 33, powerplay1: 7, powerplay2: 20, powerplay3: 6 },
        { inningsDuration: 34, powerplay1: 7, powerplay2: 20, powerplay3: 7 },
        { inningsDuration: 35, powerplay1: 7, powerplay2: 21, powerplay3: 7 },
        { inningsDuration: 36, powerplay1: 7, powerplay2: 22, powerplay3: 7 },
        { inningsDuration: 37, powerplay1: 8, powerplay2: 22, powerplay3: 7 },
        { inningsDuration: 38, powerplay1: 8, powerplay2: 23, powerplay3: 7 },
        { inningsDuration: 39, powerplay1: 8, powerplay2: 23, powerplay3: 8 },
        { inningsDuration: 40, powerplay1: 8, powerplay2: 24, powerplay3: 8 },
        { inningsDuration: 41, powerplay1: 8, powerplay2: 25, powerplay3: 8 },
        { inningsDuration: 42, powerplay1: 9, powerplay2: 25, powerplay3: 8 },
        { inningsDuration: 43, powerplay1: 9, powerplay2: 26, powerplay3: 8 },
        { inningsDuration: 44, powerplay1: 9, powerplay2: 26, powerplay3: 9 },
        { inningsDuration: 45, powerplay1: 9, powerplay2: 27, powerplay3: 9 },
        { inningsDuration: 46, powerplay1: 9, powerplay2: 28, powerplay3: 9 },
        { inningsDuration: 47, powerplay1: 10, powerplay2: 28, powerplay3: 9 },
        { inningsDuration: 48, powerplay1: 10, powerplay2: 29, powerplay3: 9 },
        { inningsDuration: 49, powerplay1: 10, powerplay2: 29, powerplay3: 10 }
    ]
};

// Helper function to get powerplay data by innings duration
function getPowerplayData(inningsDuration) {
    return cricketData.powerplays.find(item => item.inningsDuration === inningsDuration);
}

// Helper function to get all innings durations
function getAllInningsDurations() {
    return cricketData.powerplays.map(item => item.inningsDuration);
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { cricketData, getPowerplayData, getAllInningsDurations };
}
