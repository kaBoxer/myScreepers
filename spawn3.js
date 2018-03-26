require('UI');
var aSpawn = Game.spawns.Spawn3

Spawn3_BuildWorkforce = function () {
    var wf = Memory.Workforce_Structure;
    
    SomeRoleName = 'E12S4_TheSavior' 
    if (!wf[SomeRoleName] ) { wf[SomeRoleName] = {'role': SomeRoleName, 'roleCount': 0 } }
    wf[SomeRoleName].roleMax = 1;
    wf[SomeRoleName].roleRatio = wf[SomeRoleName].roleCount / wf[SomeRoleName].roleMax;
    wf[SomeRoleName].Parts = [MOVE, CARRY, MOVE, CARRY, WORK] //Purposely small and put at the top of the spawn order so itll always be there to fill the ext.
    wf[SomeRoleName].ResponsibleSpawns = [aSpawn.id];
    wf[SomeRoleName].InitMemory = {'role': SomeRoleName, 'Debug': false, 
        'RoleDefs': {'TOF': SomeRoleName, 'CurrentTask': '0', 'GetGiveSwitch': 'get' ,
            'targ': {'id': '', 'rp': {'x': 20, 'y': 20, 'roomName': 'E12S4'}, 'overrides': {'storage': '5aae338edca04b00018216ac'}},
            'get': {'Searches': {'0': ['GetClosestContainer_ForPickup']}, 'Tasks': {'0': 'withdraw' }, 'Args': {'0': RESOURCE_ENERGY }, 'CleanUp': {'0': 'NewGuy_CleanUp_withdraw'} },
            'give': {
                'Searches': {'0': ['GetClosestExtensionSpawn', 'GetClosestTower', 'GetClosestStorage'], '1': ['GetClosestRoomController'] }, 
                'Tasks': {'0': 'transfer', '1': 'upgradeController'}, 
                'Args': {'0': RESOURCE_ENERGY, '1': undefined }, 
                'CleanUp': {'0': 'NewGuy_CleanUp_transfer', '1': 'NewGuy_CleanUp_upgradeController'} 
                
            }
        }
    }
    
    SomeRoleName = 'E12S4_Builder' 
    if (!wf[SomeRoleName] ) { wf[SomeRoleName] = {'role': SomeRoleName, 'roleCount': 0 } }
    wf[SomeRoleName].roleMax = 3;
    wf[SomeRoleName].Parts = [WORK, WORK, WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY];
    wf[SomeRoleName].ResponsibleSpawns = [aSpawn.id, '5aa80bb1a6b1700001d97afe'];
    wf[SomeRoleName].roleRatio = wf[SomeRoleName].roleCount / wf[SomeRoleName].roleMax;
    wf[SomeRoleName].InitMemory = {'role': SomeRoleName, 'Debug': false, 
        'RoleDefs': {'TOF': SomeRoleName, 'CurrentTask': '0', 'GetGiveSwitch': 'get' ,
            'targ': {'id': '', 'rp': {'x': 20, 'y': 20, 'roomName': 'E12S4'}, 'overrides': {'container': '5ab6c199fae7a5001eb4f53b'}},
            'get': {'Searches': {'0': ['GetClosestStorage_pickup']}, 
                    'Tasks': {'0': 'withdraw' }, 
                    'Args': {'0': RESOURCE_ENERGY }, 
                    'CleanUp': {'0': 'NewGuy_CleanUp_withdraw'} },
            'give': {'Searches': {'0': ['GetClosestConstructionSite'],  '1':  ['GetClosestRepairContainer', 'GetClosestRepairRoad'], '2': ['GetClosestRoomController'], '3': ['GetClosestStorage'] },  
                     'Tasks': {'0': 'build', '1': 'repair', '2': 'upgradeController', '3': 'transfer'}, 
                     'Args': { '0': undefined, '1': undefined, '2': undefined, '3': RESOURCE_ENERGY},                                              
                     'CleanUp': {'0': 'NewGuy_CleanUp_build', '1': 'NewGuy_CleanUp_repair', '2': 'NewGuy_CleanUp_upgradeController', '3': 'NewGuy_CleanUp_transfer'} 
            }
        }
    }
    
    SomeRoleName = 'E12S4_Currier'  //Formerly NewGuy
    if (!wf[SomeRoleName] ) { wf[SomeRoleName] = {'role': SomeRoleName, 'roleCount': 0 } }
    wf[SomeRoleName].roleMax = 2;
    wf[SomeRoleName].roleRatio = wf[SomeRoleName].roleCount / wf[SomeRoleName].roleMax;
    wf[SomeRoleName].Parts = [MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY]
    wf[SomeRoleName].ResponsibleSpawns = [aSpawn.id] //, '5aa80bb1a6b1700001d97afe'];
    wf[SomeRoleName].InitMemory = {'role': SomeRoleName, 'Debug': false, 
        'RoleDefs': {'TOF': SomeRoleName, 'CurrentTask': '0', 'GetGiveSwitch': 'get' ,
            'targ': {'id': '', 'rp': {'x': 20, 'y': 20, 'roomName': 'E12S4'}, 'overrides': {'container': '5aad5656b87ce30001daed7e'}},
            'get': {'Searches': {'0': ['GetClosestContainer_ForPickup', 'GetClosestStorage_pickup']}, 'Tasks': {'0': 'withdraw' }, 'Args': {'0': RESOURCE_ENERGY }, 'CleanUp': {'0': 'NewGuy_CleanUp_withdraw'} },
            'give': {'Searches': {'0': ['GetClosestExtensionSpawn', 'GetClosestTower', 'GetClosestStorage']}, 'Tasks': {'0': 'transfer' }, 'Args': {'0': RESOURCE_ENERGY }, 'CleanUp': {'0': 'NewGuy_CleanUp_transfer'} 
                
            }
        }
    }
    
    SomeRoleName = 'E12S4_Harvester_Southside' 
    if (!wf[SomeRoleName] ) { wf[SomeRoleName] = {'role': SomeRoleName, 'roleCount': 0 } }
    wf[SomeRoleName].roleMax = 1;
    wf[SomeRoleName].Parts = [MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, WORK, WORK, WORK, WORK, WORK]
    wf[SomeRoleName].ResponsibleSpawns = [aSpawn.id] //, '5aa80bb1a6b1700001d97afe'];
    wf[SomeRoleName].roleRatio = wf[SomeRoleName].roleCount / wf[SomeRoleName].roleMax;
    wf[SomeRoleName].InitMemory = {'role': SomeRoleName, 'Debug': false, 
        'RoleDefs': {'TOF': SomeRoleName, 'CurrentTask': '0', 'GetGiveSwitch': 'get',
            'targ': {'id': '', 'rp': {'x': 20, 'y': 20, 'roomName': 'E12S4'}, 'overrides': {'container': '5ab6c199fae7a5001eb4f53b', 'source': '596ce23b3c1b99000a4d32ef'}},

            'get': {'Searches': {'0': ['GetSourceFromHardcodedContainerID']}, 'Tasks': {'0': 'harvest' }, 'Args': { }, 'CleanUp': {'0': 'NewGuy_CleanUp_harvest'} },
            'give': {'Searches': {'0': ['GetContainerInRangeForDrop']}, 'Tasks': {'0': 'transfer' }, 'Args': {'0': RESOURCE_ENERGY }, 'CleanUp': {'0': 'NewGuy_CleanUp_transfer'} 
            } 
        }
    }
    
    SomeRoleName = 'E12S4_Harvester_Northside' 
    if (!wf[SomeRoleName] ) { wf[SomeRoleName] = {'role': SomeRoleName, 'roleCount': 0 } }
    wf[SomeRoleName].roleMax = 1;
    wf[SomeRoleName].Parts = [MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, WORK, WORK, WORK, WORK, WORK]
    wf[SomeRoleName].ResponsibleSpawns = [aSpawn.id]//, '5aa80bb1a6b1700001d97afe'];
    wf[SomeRoleName].roleRatio = wf[SomeRoleName].roleCount / wf[SomeRoleName].roleMax;
    wf[SomeRoleName].InitMemory = {'role': SomeRoleName, 'Debug': false, 
        'RoleDefs': {'TOF': SomeRoleName, 'CurrentTask': '0', 'GetGiveSwitch': 'get',
            'targ': {'id': '', 'rp': {'x': 20, 'y': 20, 'roomName': 'E12S4'}, 'overrides': {'container': '5ab6c2936f8838001ff4f46f', 'source': '596ce23b3c1b99000a4d32ee'}},

            'get': {'Searches': {'0': ['GetSourceFromHardcodedContainerID']}, 'Tasks': {'0': 'harvest' }, 'Args': { }, 'CleanUp': {'0': 'NewGuy_CleanUp_harvest'} },
            'give': {'Searches': {'0': ['GetContainerInRangeForDrop']}, 'Tasks': {'0': 'transfer' }, 'Args': {'0': RESOURCE_ENERGY }, 'CleanUp': {'0': 'NewGuy_CleanUp_transfer'} 
            } 
        }
    }
    
    SomeRoleName = 'RCUpgradeOnly_E12S4' 
    if (!wf[SomeRoleName] ) { wf[SomeRoleName] = {'role': SomeRoleName, 'roleCount': 0 } }
    wf[SomeRoleName].roleMax = 0;
    wf[SomeRoleName].Parts = [MOVE, MOVE, WORK, WORK, CARRY, CARRY, MOVE, MOVE, WORK, WORK, CARRY, CARRY];
    wf[SomeRoleName].ResponsibleSpawns = [aSpawn.id, '5aa80bb1a6b1700001d97afe'];
    wf[SomeRoleName].roleRatio = wf[SomeRoleName].roleCount / wf[SomeRoleName].roleMax;
    wf[SomeRoleName].InitMemory = {'role': SomeRoleName, 'Debug': false,
        'RoleDefs': {'TOF': SomeRoleName, 'CurrentTask': '0', 'GetGiveSwitch': 'get' ,
            'targ': {'id': '', 'rp': {'x': 20, 'y': 20, 'roomName': 'E12S4'}, 'overrides': {'container': '5aad5656b87ce30001daed7e'}},
            
            'get': {'Searches': {'0': ['GetClosestStorage_pickup', 'GetClosestContainer_ForPickup']}, 
                    'Tasks': {'0': 'withdraw' }, 
                    'Args': {'0': RESOURCE_ENERGY }, 
                    'CleanUp': {'0': 'NewGuy_CleanUp_withdraw'} },
            'give': {'Searches': {'0': ['GetClosestRoomController']},  
                     'Tasks': {'0': 'upgradeController'}, 
                     'Args': {'0': undefined},
                     'CleanUp': {'0': 'NewGuy_CleanUp_upgradeController'} 
                
            }
        }
    }
}



////////////Room Visuals
//Room Title E12S4
myRoom = aSpawn.pos.roomName;
new RoomVisual(myRoom).text(myRoom, 7, 31, {color: 'yellow', font: 2});


//Room E12S4 Storage
myStorage = Game.getObjectById('5ab83e60a2ba35001d091c80')
new RoomVisual(myRoom).text('Storage: ' + myStorage.store[RESOURCE_ENERGY].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 7, 32, { color: 'yellow', font: 0.85});

//Room E12S4 MINER CONTAINER (South)
myStorage = Game.getObjectById('5ab6c199fae7a5001eb4f53b')
if (myStorage) {
    new RoomVisual(myRoom).text("Container: " + myStorage.store[RESOURCE_ENERGY].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 4, 22, 
    { color: getColorForPercentage(myStorage.store[RESOURCE_ENERGY]/myStorage.storeCapacity), font: 0.5});
}


//Room E12S6 MINER CONTAINER (North)
myStorage = Game.getObjectById('5ab6c2936f8838001ff4f46f')
if (myStorage) {
    new RoomVisual(myRoom).text("Container: " + myStorage.store[RESOURCE_ENERGY].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 7.5, 17, 
    { color: getColorForPercentage(myStorage.store[RESOURCE_ENERGY]/myStorage.storeCapacity), font: 0.5});
}


//Room E12S4 Spawn Point Energy Details
new RoomVisual(myRoom).text(Game.rooms[myRoom].energyAvailable.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " of " + Game.rooms[myRoom].energyCapacityAvailable.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 14, 26.4, 
    {color: getColorForPercentage(Game.rooms[myRoom].energyAvailable/Game.rooms[myRoom].energyCapacityAvailable), font: 0.95});



//Room E12S4 Source Details (North)
var mySource = Game.getObjectById('596ce23b3c1b99000a4d32ee')
if (mySource) {
    //VISUAL OUTPUT - Text showing energy avail and tics to regen of Energy Harvest Node.
    new RoomVisual(myRoom).text("Energy: " + mySource.energy.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 7.5, 16, 
        {color: getColorForPercentage(mySource.energy/mySource.energyCapacity), font: 0.5});
        if (mySource.energy < 3000) {
            new RoomVisual(myRoom).text("Tics to Regen: " + mySource.ticksToRegeneration.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 7.5, 16.5, 
            {color: getColorForPercentage(mySource.energy/mySource.energyCapacity), font: 0.5});
        }
}

//Room E12S4 Source Details (South)
var mySource = Game.getObjectById('596ce23b3c1b99000a4d32ef')
if (mySource) {
    new RoomVisual(myRoom).text("Energy: " + mySource.energy.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 4, 21, 
        {color: getColorForPercentage(mySource.energy/mySource.energyCapacity), font: 0.5});
        if (mySource.energy < 3000) {
            new RoomVisual(myRoom).text("Tics to Regen: " + mySource.ticksToRegeneration.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 4, 21.5, 
            {color: getColorForPercentage(mySource.energy/mySource.energyCapacity), font: 0.5});
        }
}


//Room E12S4 Room Controller Details
myRoomController = Game.getObjectById('596ce23b3c1b99000a4d32f0')
if (myRoomController) {
    new RoomVisual(myRoom).text(myRoomController.progress.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 14, 34.25, {color: getColorForPercentage(myRoomController.progress/myRoomController.progressTotal), font: 0.75});
    new RoomVisual(myRoom).text(myRoomController.progressTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 14, 35, {color: getColorForPercentage(myRoomController.progress/myRoomController.progressTotal), font: 0.75});
}

/*

*/




