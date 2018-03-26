var _ = require('lodash');
//_.sum(this.carry
require('UI');
require('Towers');
require('Searches');
require('CleanUp');

require('PipeHandlers');
///////////////////////////////////////
require ('spawn1');
require ('spawn2');
require ('spawn3');
require ('spawnMaster');
var wf = Memory.Workforce_Structure;
Memory.Workforce_Structure = {};
Memory.Workforce_Structure.Count = 0;
Memory.Workforce_Structure.Max = 0;
Spawn1_BuildWorkforce(Game.spawns.Spawn1);
Spawn2_BuildWorkforce(Game.spawns.Spawn2);
Spawn3_BuildWorkforce(Game.spawns.Spawn3);
///////////////////////////////////////

function print(strinput) {
    console.log(strinput);
}

for (p in Game.creeps) {
    var peon = Game.creeps[p];
    peon.print("---------------------------------- this.memory.Debug set to true.");

    var rd = peon.memory.RoleDefs;
    //print("Current Role: " + peon.name)
    peon.print("Current Role: " + peon.memory.role + " Current Task: " + rd.CurrentTask + " - " + rd[rd.GetGiveSwitch].Tasks[rd.CurrentTask]);
    var rp = new RoomPosition(rd.targ.rp.x, rd.targ.rp.y, rd.targ.rp.roomName);

    if (peon.memory.Debug) {
        new RoomVisual(peon.room.name).text(peon.name, peon.pos.x, peon.pos.y+1, {color: 'pink', 'font': .5});
        new RoomVisual(peon.room.name).text(rd.TOF, peon.pos.x, peon.pos.y+1.5, {color: 'white', 'font': .5});
    }
    
    if (peon.pos.roomName != rd.targ.rp.roomName) {
        var oMove = peon.moveTo(new RoomPosition(rd.targ.rp.x, rd.targ.rp.y, rd.targ.rp.roomName), {visualizePathStyle: DEFAULT_VISUAL_PATH} );
        peon.print("Out of room override. Headed to: " + rd.targ.rp.x + rd.targ.rp.y + rd.targ.rp.roomName)
        peon.print("Move Output - " + ErrText(oMove) + "  Destination - x: " + rd.targ.rp.x + " y: " + rd.targ.rp.y + " roomName: " + rd.targ.rp.roomName);
        Memory.Workforce_Structure[peon.memory.role].roleCount++;
        Memory.Workforce_Structure.Count++;
        continue;
    }
    
    var oExeCurrent = peon.ExecuteCurrent();
    if (oExeCurrent == false) {
        //I want ot move this to the cleanup functions. i want to pass oExeCurrent to the cleanup functions and make decisions based on that.
        peon.GetNewTarget();
    }
    
    //TODO, Is there a better place to put this?
    var oNearbyDroppedResource = peon.pos.findInRange(FIND_DROPPED_RESOURCES, 2);
    if (oNearbyDroppedResource.length > 0) {
        peon.pickup(oNearbyDroppedResource[0]);
    }
    var oNearbyDroppedResource = peon.pos.findInRange(FIND_TOMBSTONES, 2);
    if (oNearbyDroppedResource.length > 0) {
        //print(oNearbyDroppedResource[0]);
    }
    
    //By seperating the code that checks if the task is complete into different functions, you remove any issues of having to deal with contamination of the other task clean up code
    //Moving is also in here to be able to better isolate movement amonst roles.
    //But you run into issues of timing what and when due to the way the tasks are being swapped. Stay Vigilant.
    peon.print("Cleaning up with: " + rd[rd.GetGiveSwitch].CleanUp[rd.CurrentTask]);
    peon[rd[rd.GetGiveSwitch].CleanUp[rd.CurrentTask]](oExeCurrent);

    Memory.Workforce_Structure[peon.memory.role].roleCount++;
    Memory.Workforce_Structure.Count++;
    //Pre-Spawn by 45 seconds.
    if (peon.ticksToLive <= 45) {
        Memory.Workforce_Structure[peon.memory.role].roleCount--;
        Memory.Workforce_Structure.Count--;
    }
}



//Towers 
var RoomsThatMightHaveTowers = ['E12S5', 'E12S6', 'E12S4'];
for (r in RoomsThatMightHaveTowers) {
    towerSearch = Game.rooms[RoomsThatMightHaveTowers[r]].find(FIND_STRUCTURES, { 
        filter: (structure) => { return (structure.structureType == STRUCTURE_TOWER) }
    })
    
    for (var t in towerSearch) {
        var tower = towerSearch[t];
        if (tower.room.memory.TowerMemory === undefined) {
            tower.room.memory.TowerMemory = {};
        } else if (tower.room.memory.TowerMemory[tower.id] === undefined) {
            tower.room.memory.TowerMemory[tower.id] = {target: "AwaitingTarget", targetTask: null};
        } else {
            tower.TOF_MyTower(tower.room.memory.TowerMemory[tower.id]);
        }
    }
}

//Spawn
for (i in Game.spawns) {
    SpawnSpawn(Game.spawns[i]);
}

//Best function ever.
function GetRightEnergyVariable(target) {
    if (target instanceof (StructureStorage || StructureContainer)) {
        return target.store[RESOURCE_ENERGY]
    }
    return target.energy
}

