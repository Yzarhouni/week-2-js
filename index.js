import os from 'os'

const cpus = os.cpus()

cpus.forEach(cpu => {
    logSpeedAndModel(cpu)
});

function logSpeedAndModel(cpu) {
    console.log({
        speed: cpu.speed,
        model: cpu.model
    })
}

const freeMem = os.freemem()
const totalMem = os.totalmem()
const remainingMem = ((totalMem - freeMem) / 1000000000).toFixed(2)
console.log({remainingMem: remainingMem})
