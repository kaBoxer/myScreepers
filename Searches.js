TOWER_SEARCH_MULTIPLIER = .75;
var WALL_SEARCH_MULTIPLIER = .00327//33 // 300,000,000 * .00001 = 3,000
RAMPARTS_SEARCH_MULTIPLIER = .0025
ROAD_SEARCH_MULTIPLIER = .25
CONTAINER_SEARCH_MULTIPLIER = .75


function print(strinput) {
    console.log(strinput);
}

//These are the things that can be searched for.
Creep.prototype.GetClosestContainer_ForPickup = function() {
    //Overrides saved to memory for this type of structure.
    //TODO: Do something for harvesters that make them build a container next to the source if they cannot find a container there.
    
    var RoleDefs = this.memory.RoleDefs;
    
    var aContainers = this.room.find(FIND_STRUCTURES, { 
        filter: (structure) => { return (structure.structureType == STRUCTURE_CONTAINER) }
    });
    
    if (aContainers.length > 0) {
        var oMostEnergy = aContainers[0]
        if (aContainers.length == 1) {
            return oMostEnergy;
        }
        
        
        for (i in aContainers) {
            if (aContainers[i].store[RESOURCE_ENERGY] > oMostEnergy.store[RESOURCE_ENERGY]) {
                oMostEnergy = aContainers[i]
            }
        }
        if (oMostEnergy.store[RESOURCE_ENERGY] > 50) {
            return oMostEnergy;
        }
    }
    return false
}

Creep.prototype.GetClosestExtensionSpawn = function() {
    //Overrides saved to memory for this type of structure.
    //if (!Game.getObjectById(this.memory.RoleDefs.targ.overrides[STRUCTURE_CONTAINER.toString()]) == (null || undefined)) {
    //    return this.memory.RoleDefs.targ.overrides[STRUCTURE_CONTAINER.toString()];
    //}
    
    var ClosestExtension = this.pos.findClosestByPath(FIND_STRUCTURES, { 
        filter: (structure) => { return (
            structure.structureType == STRUCTURE_EXTENSION && structure.energy < structure.energyCapacity
        )}
    });
    
    if (!ClosestExtension) {
            ClosestExtension = this.pos.findClosestByRange(FIND_STRUCTURES, { 
            filter: (structure) => { return (
                structure.structureType == STRUCTURE_SPAWN && structure.energy < structure.energyCapacity 
            )}
        });
    }
    
    if (ClosestExtension) {
        return ClosestExtension;
    } else {
        return false;
    }
}

Creep.prototype.GetClosestStorage = function () {
    var RoleDefs = this.memory.RoleDefs;
    if (RoleDefs.targ.overrides['storage_dropoff']) {
        return Game.getObjectById(RoleDefs.targ.overrides['storage_dropoff']);
    }
    
    var ClosestStorage = this.pos.findClosestByRange(FIND_STRUCTURES, { 
        filter: (structure) => { return (
            structure.structureType == STRUCTURE_STORAGE
        )}
    });
    
    if (ClosestStorage) {
        return ClosestStorage;
    } else {
        return false;
    }
}

Creep.prototype.GetClosestStorage_pickup = function () {
    var RoleDefs = this.memory.RoleDefs;
    if (RoleDefs.targ.overrides['storage_pickup']) {
        return Game.getObjectById(RoleDefs.targ.overrides['storage_pickup']);
    }
    
    var ClosestStorage = this.pos.findClosestByRange(FIND_STRUCTURES, { 
        filter: (structure) => { return (
            structure.structureType == STRUCTURE_STORAGE && structure.store[RESOURCE_ENERGY] > 500
        )}
    });
    
    if (ClosestStorage) {
        return ClosestStorage;
    } else {
        return false;
    }
}

Creep.prototype.GetClosestLab = function () {
    var RoleDefs = this.memory.RoleDefs;
    
    var ClosestStorage = this.pos.findClosestByRange(FIND_STRUCTURES, { 
        filter: (structure) => { return (
            structure.structureType == STRUCTURE_LAB && structure.energy < structure.energyCapacity
        )}
    });
    
    if (ClosestStorage) {
        return ClosestStorage;
    } else {
        return false;
    }
}

Creep.prototype.GetClosestTerminal = function () {
    var RoleDefs = this.memory.RoleDefs;
    
    
    var ClosestStorage = this.pos.findClosestByRange(FIND_STRUCTURES, { 
        filter: (structure) => { return (
            structure.structureType == STRUCTURE_TERMINAL && structure.store[RESOURCE_ENERGY] <= Memory.rooms[structure.pos.roomName].TerminalMax['energy']
        )}
    });
    
    if (ClosestStorage) {
        return ClosestStorage;
    } else {
        return false;
    }
}

Creep.prototype.GetClosestTerminal_pickup = function () {
    var RoleDefs = this.memory.RoleDefs;
    if (RoleDefs.targ.overrides['storage_pickup']) {
        return Game.getObjectById(RoleDefs.targ.overrides['storage_pickup']);
    }
    
    var ClosestStorage = this.pos.findClosestByRange(FIND_STRUCTURES, { 
        filter: (structure) => { return (
            structure.structureType == STRUCTURE_TERMINAL && structure.store[RESOURCE_ENERGY] > 0
        )}
    });
    
    if (ClosestStorage) {
        return ClosestStorage;
    } else {
        return false;
    }
}

Creep.prototype.GetClosestTower = function () {
    //|| (structure.structureType == (STRUCTURE_STORAGE) && (structure.store[RESOURCE_ENERGY] < Game.spawns.Spawn1.memory.MaxInStorage))
    var ClosestTower = this.pos.findClosestByRange(FIND_STRUCTURES, { 
        filter: (structure) => { return (
            structure.structureType == STRUCTURE_TOWER && structure.energy < structure.energyCapacity * TOWER_SEARCH_MULTIPLIER
        )}
    });
    
    if (ClosestTower) {
        return ClosestTower;
    } else {
        return false;
    }
}

Creep.prototype.GetClosestConstructionSite = function () {
    var cs = this.pos.findClosestByPath(FIND_MY_CONSTRUCTION_SITES);
    
    if (cs) {
        return cs;
    } else {
        return false;
    }
}


Creep.prototype.GetClosestDroppedSource = function () {
    var cs = this.pos.findClosestByPath(FIND_DROPPED_RESOURCES);
    
    if (cs) {
        return cs;
    } else {
        return false;
    }
}

Creep.prototype.GetClosestSource = function () {
    if (this.memory.RoleDefs.targ.overrides['source']) {
        this.print("Harded Coded Source Found: " + this.memory.RoleDefs.targ.overrides['source']);
        return Game.getObjectById(this.memory.RoleDefs.targ.overrides['source']);
    } 
    
    var cs = this.pos.findClosestByPath(FIND_SOURCES);
    
    if (cs) {
        return cs;
    } else {
        return false;
    }
}

Creep.prototype.GetClosestRepairRoad = function () {
    var RepairARoad = this.pos.findClosestByRange(FIND_STRUCTURES, { 
        filter: (structure) => { return (
            structure.structureType == STRUCTURE_ROAD && structure.hits < structure.hitsMax * ROAD_SEARCH_MULTIPLIER
        )}
    });
    
    if (RepairARoad) {
        return RepairARoad;
    } else {
        return false;
    }
}

Creep.prototype.GetClosestRepairContainer = function () {
    var RepairARoad = this.pos.findClosestByRange(FIND_STRUCTURES, { 
        filter: (structure) => { return (
            structure.structureType == STRUCTURE_CONTAINER && structure.hits < structure.hitsMax * CONTAINER_SEARCH_MULTIPLIER
        )}
    });
    
    if (RepairARoad) {
        return RepairARoad;
    } else {
        return false;
    }
}

Creep.prototype.GetSourceFromHardcodedContainerID = function () {
    //The ID that is hard coded is the container, not hte source. So i need to search for the source when I am nearby the container. 
    var rd = this.memory.RoleDefs;
    var container = Game.getObjectById(rd.targ.overrides['container']);
    
    if (container != null) {
        var oSource = container.pos.findInRange(FIND_MINERALS, 2);
        this.print(oSource)
        if (oSource[0] instanceof Mineral) {
            this.print(this.name + ": " + oSource.mineralType + " Found near container: " + oSource)
            return oSource[0]
        }
        print(this.name + ": Searches.GetSourceFromHardcodedContainerID - No Minerals found near container in memory: " + rd.targ.overrides['container'] )
    }
    
    if (container != null) {
        var oSource = container.pos.findInRange(FIND_SOURCES, 2);
        if (oSource) {
            this.print(this.name + ": Soruce Found near container: " + oSource)
            return oSource[0]
        }
        print(this.name + ": Searches.GetSourceFromHardcodedContainerID - No Sources found near container in memory: " + rd.targ.overrides['container'] )
    }
    
    print(this.name + ": Searching for Minerals.")
    
    print(this.name + ": Searches.GetSourceFromHardcodedContainerID - No Container found with ID : " + container.id + " Room: "  + container.roomName)
    print(this.name + ": Searches.GetSourceFromHardcodedContainerID - Container ID Adjacent to Source and room position args must be hard coded in this.memory.RoleDefs.targ to work.")
}

Creep.prototype.GetContainerFromHardCodedSourceID = function () {
    //The ID that is hard coded is the container, not hte source. So i need to search for the source when I am nearby the container. 
    var rd = this.memory.RoleDefs;
    var container = Game.getObjectById(rd.targ.overrides['container']);

    if (container != null) {
        var oSource = container.pos.findInRange(FIND_SOURCES, 2);
        if (oSource) {
            this.print(this.name + ": Soruce Found near container: " + oSource)
            return oSource[0]
        }
        print(this.name + ": Searches2.GetSourceFromHardcodedContainerID - No Sources found near container in memory: " + rd.targ.overrides['container'] )
    }
    print(this.name + ": Searches2.GetSourceFromHardcodedContainerID - No Container found with ID : " + container.id + " Room: "  + container.roomName)
    print(this.name + ": Searches2.GetSourceForContainerMining - Container ID Adjacent to Source and room position args must be hard coded in this.memory.RoleDefs.targ to work.")
}

Creep.prototype.GetSourceFromHardcodedRoomPosition = function () {
    //The ID that is hard coded is the container, not hte source. So i need to search for the source when I am nearby the container. 
    var rd = this.memory.RoleDefs;
    var rp = rd.targ.rp;
    var oRP = new RoomPosition(rp.x, rp.y, rp.roomName);

    var oSource = oRP.findInRange(FIND_SOURCES, 10);
    if (oSource.length > 0) {
        return oSource[0];
    } else {
        print(this.name + ": Searches2.GetSourceFromHardcodedRoomPosition - No Sources found near RoomPosition in memory: " + rp );
    }
}

Creep.prototype.GetClosestRoomController = function () {
    var roomcon = this.pos.findClosestByRange(FIND_STRUCTURES, { 
        filter: (structure) => { return ( structure.structureType == STRUCTURE_CONTROLLER )}
    });
    
    if (roomcon) {
        return roomcon;
    } else {
        return false;
    }
}

Creep.prototype.GetClosestWallBelow_WALL_SEARCH_MULTIPLIER = function () {
    var wallRepair = this.pos.findClosestByRange(FIND_STRUCTURES, { 
        filter: (structure) => { return ( structure.structureType == STRUCTURE_RAMPART && structure.hits <= structure.hitsMax * WALL_SEARCH_MULTIPLIER)}
    });
    
    if (wallRepair) {
        return wallRepair;
    } else {
        return false;
    }
}

Creep.prototype.GetClosestRampartBelow_RAMPART_SEARCH_MULTIPLIER = function () {
    var rampartRepair = this.pos.findClosestByRange(FIND_STRUCTURES, { 
        filter: (structure) => { return ( structure.structureType == STRUCTURE_WALL && structure.hits <= structure.hitsMax * RAMPARTS_SEARCH_MULTIPLIER)}
    });
    
    if (rampartRepair) {
        return rampartRepair;
    } else {
        return false;
    }
}