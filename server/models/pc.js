const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let pcSchema = new Schema({
    cpu: {
        type: String,
        required: [true, 'Se requiere del campo y es obligatorio'],
        default: 'Intel Pentium G3260 LGA 1150'
    },
    memoryRam: {
        type: String,
        required: [true, 'Se requiere del campo'],
        default: '4gb ddr4 2400 mhz kingston single channel',
    },
    psu: {
        type: String,
        required: [true, 'Se requiere del campo y es obligatorio'],
        default: 'Corsair CX550M',
    },
    case: {
        type: String,
        required: [true, 'Se requiere del campo y es obligatorio'],
        default: 'Seasonic S12II 520 Watts 80 plus bronze',
    },
    HDD: {
        type: String,
        required: [true, 'Se requiere del campo y es obligatorio'],
        default: 'WD Caviar Blue 7200 RPM',
    },
    GPU: {
        type: String,
        required: [true, 'Se requiere del campo y es obligatorio'],
        default: 'Nvidia 9600 GSO 512 1,5 GB DDR3 800 Mhz 192 bits',
    },
    Mobo: {
        type: String,
        required: [true, 'Se requiere del campo y es obligatorio'],
        default: 'ASUS H81M-K LGA 1150',
    },
});

module.exports = mongoose.model('PC', pcSchema);