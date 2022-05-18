const soldier = {
    name: "Халк",
    health: 10,
    weapon: {
        name: "АКМ",
        patrons: 30,
    },
    supplies: 3,

    fire: function () {
        this.patrons--;
        
        console.log('бах-бах');
        
        if(this.patrons === 0) {
            console.log('Обойма пуста. Перезаредитесь');
        }
        return false;
    },

    recharge: function () {
        this.patrons = 30;
        this.supplies--;
        
        console.log('Перезарядка');

        if(this.supplies === 0) {
            console.log('Не осталось припасов');
        }
        return false;
    },

    hurt: function () {
        this.health--;
        if(this.health === 0) {
            console.log('Ты проиграл')
        }
        return false;
    },
};

soldier.fire();