const soldier = {
    name: "Халк",
    health: 10,
    weapon: {
        name: "АКМ",
        patrons: 30,
    },
    supplies: 3,

    fire: function () {
        patrons--;
        console.log('бах-бах');
        if(patrons === 0) {
            console.log('Обойма пуста. Перезаредитесь');
        }
    },

    recharge: function () {
        patrons = 30;
        this.supplies--;
        
        console.log('Перезарядка');

        if(this.supplies === 0) {
            console.log('Не осталось припасов');
        }
    },

    hurt: function () {
        this.health--;
        if(this.health === 0) {
            console.log('Ты проиграл')
        }
    },
};