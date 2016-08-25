let installedModules = [
    {name: 'sync-exec', dev: false},
    {name: 'yargs', dev: false},
    {name: 'mocha', dev: true}
];

let usedModules = [
    {name: 'chai', dev: true},
    {name: 'chokidar', dev: false},
    {name: 'yargs', dev: false},
    {name: 'fs', dev: false},
    {name: '../src/helpers', dev: false}
];

let unusedModules = [
    {name: 'sync-exec', dev: false},
    {name: 'mocha', dev: true}
];

let modulesNotInstalled = [
    {name: 'chai', dev: true},
    {name: 'chokidar', dev: false}
];

let filteredUsedModules = [
    {name: 'chai', dev: true},
    {name: 'chokidar', dev: false},
    {name: 'yargs', dev: false}
];

module.exports = {
    installedModules,
    usedModules,
    unusedModules,
    modulesNotInstalled,
    filteredUsedModules
};