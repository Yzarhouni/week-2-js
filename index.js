import os from 'os'

const cpus = os.cpus()

cpus.forEach(cpu => {
    logSpeedAndModel(cpu)
});

function logSpeedAndModel(cpu) {
    console.log([
        cpu.speed,
        cpu.model
    ])
}
