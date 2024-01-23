const launches = new Map();

const launch = {
    flightNumber: 1,
    mission: 'mission1',
    rocket: 'rocket',
    launchDate: new Date(),
    destination: 'destination',
    customer: [
        'customer1',
        'customer2'
    ],
    upcoming: true,
    success: true
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
    return Array.from(launches.values());
}

module.exports = {
    getAllLaunches
}