let Adventurer = {
	name: "Arin the Brave",
	health: 100,
	level: 10,
	attack: 20,
	inventory: [],

	pickupItem: function(Item) {
		this.inventory.push(Item);
		return "Picked up " + Item;
	},

	attackMonster: function(Monster){
		Monster.health = Monster.health - this.attack;
		if (Monster.health <= 0) {
			return Monster.dropLoot();
		} else {
			return this.name + " attacks " + Monster.name + "! " + Monster.name +
				"'s health is now " + Monster.health;
		}
	}

};

function Monster(name,level,health,attack,loot){
	this.name = name;
	this.level = level;
	this.health = health;
	this.attack = attack;
	this.loot = loot;

	this.dropLoot = function(loot){
		Adventurer.inventory.push(this.loot);
		return this.name + " drop " + this.loot + " " + Adventurer.name + " inventory: " +
		Adventurer.inventory;
	}

}

let fenrir = new Monster("Fenrir the Wolf", 30, 100,100,'Wolf fur'); 

console.log(Adventurer.attackMonster(fenrir));
console.log(Adventurer.attackMonster(fenrir));
console.log(Adventurer.attackMonster(fenrir));
console.log(Adventurer.attackMonster(fenrir));
console.log(Adventurer.attackMonster(fenrir));