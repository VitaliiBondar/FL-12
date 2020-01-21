const HUNDRED = 100;
const HUNDRED_ONE = 101;
const Fighter = class Fighter {
    constructor({name, damage, hp, strength, agility}) {
        let _name = name;
        let _damage = damage;
        let _hp = hp;
        let _fullHp = hp;
        let _strength = strength;
        let _agility = agility;
        let wins = 0;
        let losses = 0;

        this.getName = function() {
            return _name;
        };
        this.getDamage = function() {
            return _damage;
        };
        this.getHealth = function() {
            return _hp;
        };
        this.getMaxHealth = function() {
            return _fullHp;
        };
        this.getStrength = function() {
            return _strength;
        };
        this.getAgility = function() {
            return _agility;
        };
        this.getWins = function() {
            return wins;
        };
        this.getLosses = function() {
            return losses;
        };
        this.dealDamage = function(damage){
            let newHp = this.getHealth() - damage;
            if(newHp < 0){
                newHp = 0;
            }
            _hp = newHp;
        };
        this.heal = (healPoint) => {
            let newHp = this.getHealth() + healPoint;
            if(newHp > this.getMaxHealth()){
                newHp = this.getMaxHealth();
            }
            _hp = newHp;
        };
        this.addWin = function(){
            wins++;
        };
        this.addLoss = function(){
           losses++;
        };
        this.logCombatHistory = function(){
            console.log('Name: ' + this.getName() + ', Wins: ' + this.getWins() + ', Losses:' + this.getLosses());
        }
    }

    attack(defender) {
        let probability = HUNDRED - (defender.getAgility() + defender.getStrength());
        let success = Math.floor(Math.random() * HUNDRED_ONE);
        if (success < probability) {
            console.log(`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`);
            defender.dealDamage(this.getDamage())
        } else {
            console.log(`${this.getName()} attack missed`)
        }
    }
};

function battle(fighter1, fighter2){
    if(!fighter1.getHealth()){
        console.log(fighter1.getName() + " is dead and can't fight");
    }
    if(!fighter2.getHealth()){
        console.log(fighter2.getName() + " is dead and can't fight");
    }
    while (fighter1.getHealth() && fighter2.getHealth()){
        fighter1.attack(fighter2);
        if(!fighter2.getHealth()){
            console.log(fighter1.getName() + ' has won!');
            fighter1.addWin();
            fighter2.addLoss();
            break;
        }
        fighter2.attack(fighter1);
        if(!fighter1.getHealth()){
            console.log(fighter2.getName() + ' has won!');
            fighter2.addWin();
            fighter1.addLoss();
            break;
        }
    }
}