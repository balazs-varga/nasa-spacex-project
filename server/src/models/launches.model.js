const launches = new Map();

let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: 'mission1',
    rocket: 'rocket',
    launchDate: new Date(),
    target: 'destination',
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

function addNewLaunch(launch) {
    latestFlightNumber++;
    launches.set(
        latestFlightNumber,
        Object.assign(launch, {
            customer: ['NASA'],
            upcoming: true,
            success: true,
            flightNumber: latestFlightNumber
     }
    ));
}

module.exports = {
    getAllLaunches,
    addNewLaunch,
}