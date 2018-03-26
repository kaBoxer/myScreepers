var _ = require('lodash');

//Remove old creeps from memory.
for(var i in Memory.creeps) {
    if(!Game.creeps[i]) {
        delete Memory.creeps[i];
    }
}
function print(strinput) {
    console.log(strinput);
}

function GetRightEnergyVariable(target) {
    if (target instanceof StructureStorage) {
        return target.store[RESOURCE_ENERGY]
    } else if (target instanceof StructureContainer) {
        return target.store[RESOURCE_ENERGY]
    } 
    return target.energy
}

DEFAULT_VISUAL_PATH = {
    fill: 'transparent',
    stroke: '#fff',
    lineStyle: 'dashed',
    strokeWidth: .1,
    opacity: .3
}

ErrText = function(errInt) {
    errInt *= -1
    arrErr = {
    0: "OK",
    1: "ERR_NOT_OWNER",
    2: "ERR_NO_PATH",
    3: "ERR_NAME_EXISTS",
    4: "ERR_BUSY",
    5: "ERR_NOT_FOUND",
    6: "ERR_NOT_ENOUGH_RESOURCES [Available]",
    7: "ERR_INVALID_TARGET",
    8: "ERR_FULL",
    9: "ERR_NOT_IN_RANGE",
    10: "ERR_INVALID_ARGS",
    11: "ERR_TIRED",
    12: "ERR_NO_BODYPART",
    14: "ERR_RCL_NOT_ENOUGH",
    15: "ERR_GCL_NOT_ENOUGH"
    }
    
    return arrErr[errInt];
}

Creep.prototype.print = function(strInput) {
    if (this.memory.Debug == true) {
        print(this.name + ": " + strInput);
    }
    
}

Creep.prototype.NewGuy_CleanUp_claim = function(oExeCurrent) {
    var rd = this.memory.RoleDefs;
    var target = Game.getObjectById(this.memory.RoleDefs.targ.id);
    if (!this.pos.isNearTo(target)) {
        var oMove = this.moveTo(new RoomPosition(rd.targ.rp.x, rd.targ.rp.y, rd.targ.rp.roomName), {visualizePathStyle: DEFAULT_VISUAL_PATH} );
        this.print("Move Output - " + ErrText(oMove) + "  Destination - x: " + rd.targ.rp.x + " y: " + rd.targ.rp.y + " roomName: " + rd.targ.rp.roomName);
    }
}

Creep.prototype.NewGuy_CleanUp_withdraw_NEW = function(oExeCurrent) {
    var rd = this.memory.RoleDefs;
    var target = Game.getObjectById(this.memory.RoleDefs.targ.id);
    
    switch(oExeCurrent) {
        case OK:
            if (this.carry.energy >= this.carryCapacity * .75) {
                rd.GetGiveSwitch= 'give';
                rd.targ.id = null;
            }
            break;
        case ERR_NOT_OWNER, ERR_NO_PATH, ERR_INVALID_TARGET:
            rd.targ.id = null;
            break;
        case ERR_NOT_ENOUGH_RESOURCES:
            rd.targ.id = null;
            break;
            
    }      
    
    //MOVE
    //We dont want these thigns to pile ont he container in the event a harvester is respawning, so stop once your near the container.
    if (rd.targ.id == null) { this.GetNewTarget() }
    target = Game.getObjectById(rd.targ.id);
    if (!this.pos.isNearTo(target)) {
        var oMove = this.moveTo(new RoomPosition(rd.targ.rp.x, rd.targ.rp.y, rd.targ.rp.roomName), {visualizePathStyle: DEFAULT_VISUAL_PATH} );
        this.print("Move Output - " + ErrText(oMove) + "  Destination - x: " + rd.targ.rp.x + " y: " + rd.targ.rp.y + " roomName: " + rd.targ.rp.roomName);
    }
}

Creep.prototype.NewGuy_CleanUp_withdraw = function() {
    var rd = this.memory.RoleDefs;
    var target = Game.getObjectById(this.memory.RoleDefs.targ.id);
    
    //TODO: If target is null, it means the search returned no containers w/ any energy. An error is thorn. Do something about that.
   
    if (_.sum(this.carry) >= this.carryCapacity * .75) {
        this.memory.RoleDefs.GetGiveSwitch = 'give'
        rd.targ.id = null;
    } else if (GetRightEnergyVariable(target) <= 20) {
        rd.targ.id = null;
    }

    //MOVE
    //We dont want these thigns to pile ont he container in the event a harvester is respawning, so stop once your near the container.
    if (rd.targ.id == null) { this.GetNewTarget() }
    var rd = this.memory.RoleDefs;
    target = Game.getObjectById(rd.targ.id);
    if (target == null) { 
        return; 
    }
    
    if (!this.pos.isNearTo(target)) {
        var oMove = this.moveTo(new RoomPosition(rd.targ.rp.x, rd.targ.rp.y, rd.targ.rp.roomName), {visualizePathStyle: DEFAULT_VISUAL_PATH} );
        this.print("Move Output - " + ErrText(oMove) + "  Destination - x: " + rd.targ.rp.x + " y: " + rd.targ.rp.y + " roomName: " + rd.targ.rp.roomName);
    }
}

Creep.prototype.NewGuy_CleanUp_harvest = function() { //THIS IS THE OLD FUNCTION
    var rd = this.memory.RoleDefs;
    
    var target = Game.getObjectById(rd.targ.overrides['container']);
    //We want the harvester to be on top of the container, so use isEqualTo
    if (!this.pos.isEqualTo(target)) {
        var oMove = this.moveTo(target, {visualizePathStyle: DEFAULT_VISUAL_PATH});
        this.print("Move Output - " + ErrText(oMove) + "  Destination - x: " + rd.targ.rp.x + " y: " + rd.targ.rp.y + " roomName: " + rd.targ.rp.roomName);
    } else {
        if (target.store[RESOURCE_ENERGY] == target.storeCapacity) {
            //TODO: Detect isNearBy container and move to it, build all containers in a valid harvest location.
        }
        this.drop(RESOURCE_ENERGY)
    }
}

Creep.prototype.NewGuy_CleanUp_harvest_NEW = function() { //THIS IS THE NEW FUNCTION
    var rd = this.memory.RoleDefs;
    var target = Game.getObjectById(rd.targ.id); //This should be set to the source, returned by an override found in GetClosestSource
    
    /*
    var oContainerNextToHardCodedSource = target.pos.findInRange(FIND_STRUCTURES, 1, {filter: (structure) => { return  (structure.structureType == STRUCTURE_CONTAINER )} });
    if (oContainerNextToHardCodedSource.length <= 0 ) {
        //this.memory.RoleDefs.GetGiveSwitch = 'give'
        //rd.targ.id = null;
    } else {
        target = oContainerNextToHardCodedSource[0]
    }
    */
    if (this.carry.energy == this.carryCapacity ) {
        this.memory.RoleDefs.GetGiveSwitch = 'give'
        rd.targ.id = null;
    }
    
    //This isn't done above because there may be other clean ups that get put in here that set it to null, and I onlt want to have the GetNewTarget in each clean up function once.
    if (rd.targ.id == null) { 
        this.GetNewTarget()
        target = Game.getObjectById(this.memory.RoleDefs.targ.id);
    }
    
    if (!this.pos.isEqualTo(target)) {
        var oMove = this.moveTo(target, {visualizePathStyle: DEFAULT_VISUAL_PATH});
        this.print("Move Output - " + ErrText(oMove) + "  Destination - x: " + rd.targ.rp.x + " y: " + rd.targ.rp.y + " roomName: " + rd.targ.rp.roomName);
    } else {
        
        //this.drop(RESOURCE_ENERGY)
    }
}



/*
Creep.prototype.NewGuy_CleanUp_harvest_RoomPostionHardcode = function() {
    var rd = this.memory.RoleDefs;
    var oRP = new RoomPosition(rd.targ.rp.x, rd.targ.rp.y, rd.targ.rp.roomName);
    //if (!this.pos.roomName == rp.roomName) {
    //    this.print("Exiting Search With Override: Not in same room as target: " + rp) //Because it wont work if im not in the room.
    //    return "OUT_OF_ROOM_OVERRIDE_NEEDED"; //Trying to get this to return a false positive. I want the cleanup to occur for this job so it will move me into the new room, once it is in the new room, it will run the below to find the source.
    //}
    
    target = Game.getObjectById(rd.targ.id);
    //TODO: Everything else.
    if (this.carry.energy == this.carryCapacity) {
        this.memory.RoleDefs.GetGiveSwitch = 'give'
        this.GetNewTarget();
        print(Game.getObjectById(rd.targ.id))
    }
    
    if (this.carry.energy == 0) {
        this.memory.RoleDefs.GetGiveSwitch = 'get'
        this.GetNewTarget();
    }
    
    if (!this.pos.isNearTo(oRP)) {
        var oMove = this.moveTo(oRP);
        this.print("Move Output - " + ErrText(oMove) + "  Destination - x: " + rd.targ.rp.x + " y: " + rd.targ.rp.y + " roomName: " + rd.targ.rp.roomName);
        return;
    }
    
    
    
}
*/

Creep.prototype.NewGuy_CleanUp_transfer = function() {
    var rd = this.memory.RoleDefs;
    var target = Game.getObjectById(this.memory.RoleDefs.targ.id);
    
    if (target) {
        if (_.sum(this.carry) == 0) {
            this.memory.RoleDefs.GetGiveSwitch = 'get'
            this.GetNewTarget();
        } 
        if (GetRightEnergyVariable(target) == target.energyCapacity) {
            this.GetNewTarget();
        }
    }
    if (!Game.getObjectById(this.memory.RoleDefs.targ.id)) {
        this.GetNewTarget();
    }
    
    var target = Game.getObjectById(this.memory.RoleDefs.targ.id);
    var oMove = this.moveTo(target, {visualizePathStyle: DEFAULT_VISUAL_PATH});
    //var oMove = this.moveTo(new RoomPosition(rd.targ.rp.x, rd.targ.rp.y, rd.targ.rp.roomName), {visualizePathStyle: DEFAULT_VISUAL_PATH} );
    this.print("Move Output - " + ErrText(oMove) + "  Destination - x: " + rd.targ.rp.x + " y: " + rd.targ.rp.y + " roomName: " + rd.targ.rp.roomName);
}


Creep.prototype.NewGuy_CleanUp_LinkMaster = function() {
    var rd = this.memory.RoleDefs;
    var target = Game.getObjectById(this.memory.RoleDefs.targ.id);
    if (target) {
        if (this.carry.energy == 0) {
            this.memory.RoleDefs.GetGiveSwitch = 'get'
            this.GetNewTarget();
        } 
        if (GetRightEnergyVariable(target) == target.energyCapacity) {
            this.GetNewTarget();
        }
    }
    if (!Game.getObjectById(this.memory.RoleDefs.targ.id)) {
        this.GetNewTarget();
    }
    
    var target = Game.getObjectById(this.memory.RoleDefs.targ.id);
    if (!this.pos.isNearTo(target)) {
        var oMove = this.moveTo(target, {visualizePathStyle: DEFAULT_VISUAL_PATH});
    }
    //var oMove = this.moveTo(new RoomPosition(rd.targ.rp.x, rd.targ.rp.y, rd.targ.rp.roomName), {visualizePathStyle: DEFAULT_VISUAL_PATH} );
    this.print("Move Output - " + ErrText(oMove) + "  Destination - x: " + rd.targ.rp.x + " y: " + rd.targ.rp.y + " roomName: " + rd.targ.rp.roomName);
    
    if (Game.getObjectById(rd.targ.overrides['link_target'])) {
        var linkTarget = Game.getObjectById(rd.targ.overrides['link_target'])
        var myLink = Game.getObjectById(rd.targ.overrides['storage_dropoff'])
        if (myLink.cooldown <= 0 && myLink.energy >= myLink.energyCapacity && linkTarget.energy == 0) {
            myLink.transferEnergy(linkTarget);
        }
    }
}


Creep.prototype.NewGuy_CleanUp_build = function() {
    var rd = this.memory.RoleDefs;
    var target = Game.getObjectById(this.memory.RoleDefs.targ.id);
    
    var oConSites = this.pos.findClosestByPath(FIND_MY_CONSTRUCTION_SITES);
    if (this.carry.energy == 0) {
        this.memory.RoleDefs.GetGiveSwitch = 'get'
        rd.targ.id = null;
        return;
    } else if (this.carry.energy <= this.carryCapacity * .34 && oConSites.length <= 0) {
        this.memory.RoleDefs.GetGiveSwitch = 'get'
        rd.targ.id = null;
        return;
    } else if (!oConSites) {
        rd.targ.id = null;
        return;
    }
    
    var target = Game.getObjectById(this.memory.RoleDefs.targ.id);
    if (!this.pos.inRangeTo(target, 3)) {
        var oMove = this.moveTo(target, {visualizePathStyle: DEFAULT_VISUAL_PATH});
        this.print("Move Output - " + ErrText(oMove) + "  Destination - x: " + rd.targ.rp.x + " y: " + rd.targ.rp.y + " roomName: " + rd.targ.rp.roomName);
    }
    
}

Creep.prototype.NewGuy_CleanUp_repair = function() {
    var rd = this.memory.RoleDefs;
    var target = Game.getObjectById(this.memory.RoleDefs.targ.id);
    if (!target instanceof Structure && this.carry.energy <= this.energyCapacity * .34) {
        this.memory.RoleDefs.GetGiveSwitch = 'get'
        this.GetNewTarget();   
    } else if (target instanceof Structure && this.carry.energy == 0) {
        this.memory.RoleDefs.GetGiveSwitch = 'get'
        this.GetNewTarget(); 
    } else if (target instanceof Structure == false) {
        this.GetNewTarget();
    } else if (target instanceof Structure) {
        //I dont think i need something here measureing the hits of the structure, because that is being done in the searches, but well see.
    }
    
    if (target.hits == target.hitsMax) {
        rd.targ.id = ''
        this.GetNewTarget(); 
    }
    
    var target = Game.getObjectById(this.memory.RoleDefs.targ.id);
    if (!this.pos.inRangeTo(target, 3)) {
        var oMove = this.moveTo(target, {visualizePathStyle: DEFAULT_VISUAL_PATH});
        this.print("Move Output - " + ErrText(oMove) + "  Destination - x: " + rd.targ.rp.x + " y: " + rd.targ.rp.y + " roomName: " + rd.targ.rp.roomName);
    }
}

Creep.prototype.NewGuy_CleanUp_upgradeController = function() {
    var rd = this.memory.RoleDefs;
    var target = Game.getObjectById(this.memory.RoleDefs.targ.id);
    
    //TODO REMOVE THE BELOW, THIS IS ONLY FOR THE BUILDER/RCUPGRADE COMBO
    //this.GetNewTarget();
    
    if (this.carry.energy == 0) {
        this.memory.RoleDefs.GetGiveSwitch = 'get'
        this.GetNewTarget();
    }
        
    var target = Game.getObjectById(this.memory.RoleDefs.targ.id);
    var oMove = this.moveTo(target);
    this.print("Move Output - " + ErrText(oMove) + "  Destination - x: " + rd.targ.rp.x + " y: " + rd.targ.rp.y + " roomName: " + rd.targ.rp.roomName);
}


