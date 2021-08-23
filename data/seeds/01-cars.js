// STRETCH
exports.seed = function (knex) {
    return knex('cars').truncate()
        .then(function () {
            return knex('cars').insert([
                
                { vin: 'JTEHF21A830113876', 
                make: 'Tesla', 
                model: 'S', 
                mileage: 300, 
                title: 'Brandon King', 
                transmission: '' },

                { vin: '1FTPW14526FA76818', 
                make: 'Mercedes', 
                model: 'S Class', 
                mileage: 0, 
                title: 'Krogan Davis', 
                transmission: '' },

                { vin: '1FDKE37S7VHB24757', 
                make: 'BMW', 
                model: '328i', 
                mileage: 0, 
                title: 'Niky Vargues', 
                transmission: '' }
            ]);
        });
};
