
//THIS WORKS EXACTLY LIKE THE CREEPS, BUT ALL THE TASKS AND SEARCHES ARE ISOLATED TO THIS MODULE.
//SINCE THE TOWERS ARE NOT MOVING, AND HAVE SIMPILER TASKS AND NOT AS MANY AND LESS COMPLICATED SEARCHES.

//This sets what percentage of the hits of these different structures get repaired. Its being done like this because 1 num picks them up on the search, and one number is used to consider the repair "complete"
var WALL_SEARCH_MULTIPLIER = .0003330//33 // 300,000,000 * .00001 = 3,000
RAMPARTS_SEARCH_MULTIPLIER = .0025 // 10,000,000 * .01 = 100,000
ROAD_SEARCH_MULTIPLIER = .5;
CONTAINER_SEARCH_MULTIPLIER = .75;
StructureTower.prototype.TOF_MyTower = function(MyEntireMemoryObject) {
    //This uses the Task:Target template.
    //This is the default SortedTargets object for this role. 
    //The Value contains a search function that is to be run and assign to .memory.target. The searches are run in the order of apperanence in this list, one at a time.
    //The Key contains a method belonging to the creep (found in Tasks module) and is parsed out using .split("-", 2)[1];. The task is not executed unless the search returns a valid object for the pre-programmed task.
    var SortedTargets = {'0-TOWER_TASK_AttackHostile': TOWER_GetClosestEnemyCreep, '1-TOWER_TASK_RepairStructure': TOWER_GetClosestRepairContainer, '2-TOWER_TASK_RepairStructure': TOWER_GetClosestRepairStorage,  
    '3-TOWER_TASK_RepairStructure': TOWER_GetClosestRepairRoad, '4-TOWER_TASK_RepairStructure': TOWER_GetClosestRepairTower, '5-TOWER_TASK_RepairStructure': TOWER_GetClosestRepairRampart, 
    '6-TOWER_TASK_RepairStructure': TOWER_GetClosestRepairWall
     };
    
    
    
    target = Game.getObjectById(MyEntireMemoryObject.target);
    if (target == null) {
        this.room.memory.TowerMemory[this.id].target = "AwaitingTarget";
        this.room.memory.TowerMemory[this.id].targetTask = "";
    }
    
    //new this.room.visual.text("Blah Blah", 22, 19, { color: 'yellow', font: 0.5});
    
    var pObject = undefined;
    if (MyEntireMemoryObject.target == "AwaitingTarget") {
        for (pTarget in SortedTargets) {            //Go through the targets my role is eligible to target.
            pObject = SortedTargets[pTarget](this)  //Run the search function to find it.
            if (pObject) {                          //if it exists
                this.room.memory.TowerMemory[this.id].target = pObject.id;    //it is my new target
                this.room.memory.TowerMemory[this.id].targetTask = pTarget.split("-", 2)[1]; //Assign the key to the function that will be run on the target.
                break;                              //dont look for more targets. Only search for what you want, in the order you want it, and forget the rest.
            }
        }
    }
    
    //This is where the Task:Target is actually executed. It is done this way so we do not have to continually search (expensive). we can store our task, as long as our task is reseting our target when were done.
    if (this.room.memory.TowerMemory[this.id].target != "AwaitingTarget") {
        var o = this[this.room.memory.TowerMemory[this.id].targetTask](); //Run the function associated with the target above. You must be certain the search results in a target that is valid to the corresponding task.
        if (!o in [0, -9] && this.room.memory.TowerMemory[this.id].target != "AwaitingTarget") {
            print("Tower " + this + " executed the " + this.room.memory.targetTask + " which resulted with the following output: " + ErrText(o));
        }
    }
}

//TOWER SPECIFIC TASKS
StructureTower.prototype.TOWER_TASK_AttackHostile = function() {
    target = Game.getObjectById(this.room.memory.TowerMemory[this.id].target);
    new this.room.visual.line(this.pos, target.pos, { color: 'red'});
    if (target.pos.x != 0 && target.pos.x != 49 && target.pos.y != 0 && target.pos.y != 49)  {
        var o = this.attack(target);
        switch(o) {
            case OK:
                break;
        }
        return o;
    }
}

StructureTower.prototype.TOWER_TASK_RepairStructure = function() {
    target = Game.getObjectById(this.room.memory.TowerMemory[this.id].target);
    
    var o = this.repair(target);
    switch(o) {
        case OK:
            new this.room.visual.line(this.pos, target.pos, { color: 'green'});
            break;
        case ERR_NOT_ENOUGH_RESOURCES:
            this.room.memory.TowerMemory[this.id].target = 'AwaitingTarget';
            break;
        case ERR_INVALID_TARGET:
            this.room.memory.TowerMemory[this.id].target = 'AwaitingTarget';
            break;
    } 
    
    
    if (target instanceof StructureRampart && target.hits >= target.hitsMax * RAMPARTS_SEARCH_MULTIPLIER) { //THE DENOMINATOR HERE IS ALSO SET IN SEARCHES. This is the max you want this structure to be repaired to.
        this.room.memory.TowerMemory[this.id].target = 'AwaitingTarget';
    }
    
    if (target instanceof StructureWall && target.hits >= target.hitsMax * WALL_SEARCH_MULTIPLIER) { //THE DENOMINATOR HERE IS ALSO SET IN SEARCHES. This is the max you want this structure to be repaired to.
        this.room.memory.TowerMemory[this.id].target = 'AwaitingTarget';
    }
    
    if (target instanceof StructureRoad && target.hits >= target.hitsMax) { //THE DENOMINATOR HERE IS ALSO SET IN SEARCHES, Since we want roads to trigger a repair and then be maxxed, the multiplier is left out.
        this.room.memory.TowerMemory[this.id].target = 'AwaitingTarget';
    }
    if (target instanceof StructureContainer && target.hits >= target.hitsMax) { //THE DENOMINATOR HERE IS ALSO SET IN SEARCHES, Since we want roads to trigger a repair and then be maxxed, the multiplier is left out.
        this.room.memory.TowerMemory[this.id].target = 'AwaitingTarget';
    }
    if (target instanceof StructureStorage && target.hits >= target.hitsMax) { //THE DENOMINATOR HERE IS ALSO SET IN SEARCHES, Since we want roads to trigger a repair and then be maxxed, the multiplier is left out.
        this.room.memory.TowerMemory[this.id].target = 'AwaitingTarget';
    }
    if (target instanceof StructureTower && target.hits >= target.hitsMax) { //THE DENOMINATOR HERE IS ALSO SET IN SEARCHES, Since we want roads to trigger a repair and then be maxxed, the multiplier is left out.
        this.room.memory.TowerMemory[this.id].target = 'AwaitingTarget';
    }
    
    if (this.energy <= 0) {  
        this.room.memory.TowerMemory[this.id].target = 'AwaitingTarget';
    }
    return o;
}

//TOWER SPECIFIC SEARCHES
TOWER_GetClosestEnemyCreep = function (tower) {
    var HostileCreeps = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {
    });
    
    if (HostileCreeps) {
        tower.room.memory.HostileInRoom = true;
        return HostileCreeps;
    } else {
        tower.room.memory.HostileInRoom = false;
        return false;
    }
}

TOWER_GetClosestRepairRoad = function (peon) {
    var ClosestBrokeRoad = peon.pos.findClosestByRange(FIND_STRUCTURES, { 
        filter: (structure) => { return ((structure.structureType == STRUCTURE_ROAD)  && structure.hits < structure.hitsMax * ROAD_SEARCH_MULTIPLIER)} 
    });

    if (ClosestBrokeRoad) {
        return ClosestBrokeRoad;
    } else {
        return false;
    }
}

TOWER_GetClosestRepairWall = function (peon) {
    var ClosestBrokeRoad = peon.pos.findClosestByRange(FIND_STRUCTURES, { 
        filter: (structure) => { return (structure.structureType == (STRUCTURE_WALL) && structure.hits < structure.hitsMax * WALL_SEARCH_MULTIPLIER)} 
    });

    if (ClosestBrokeRoad) {
        return ClosestBrokeRoad;
    } else {
        return false;
    }
}

TOWER_GetClosestRepairRampart = function (peon) {
    var ClosestBrokeRoad = peon.pos.findClosestByRange(FIND_STRUCTURES, { 
        filter: (structure) => { return (structure.structureType == (STRUCTURE_RAMPART) && structure.hits < structure.hitsMax * RAMPARTS_SEARCH_MULTIPLIER)} 
    });

    if (ClosestBrokeRoad) {
        return ClosestBrokeRoad;
    } else {
        return false;
    }
}
    
    
TOWER_GetClosestRepairContainer = function (peon) {
    var ClosestBrokeRoad = peon.pos.findClosestByRange(FIND_STRUCTURES, { 
        filter: (structure) => { return (structure.structureType == STRUCTURE_CONTAINER && structure.hits < structure.hitsMax * CONTAINER_SEARCH_MULTIPLIER )} 
    });

    if (ClosestBrokeRoad) {
        return ClosestBrokeRoad;
    } else {
        return false;
    }
}

TOWER_GetClosestRepairStorage = function (peon) {
    var ClosestBrokeRoad = peon.pos.findClosestByRange(FIND_STRUCTURES, { 
        filter: (structure) => { return (structure.structureType == STRUCTURE_STORAGE && structure.hits < structure.hitsMax )} 
    });

    if (ClosestBrokeRoad) {
        return ClosestBrokeRoad;
    } else {
        return false;
    }
}

TOWER_GetClosestRepairTower = function (peon) {
    var ClosestBrokeRoad = peon.pos.findClosestByRange(FIND_STRUCTURES, { 
        filter: (structure) => { return (structure.structureType == STRUCTURE_TOWER && structure.hits < structure.hitsMax )} 
    });

    if (ClosestBrokeRoad) {
        return ClosestBrokeRoad;
    } else {
        return false;
    }
}

module.exports = {};





//EOF