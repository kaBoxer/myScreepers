require('UI');
var aSpawn = Game.spawns.Spawn2

Spawn2_BuildWorkforce = function () {
    var wf = Memory.Workforce_Structure;
    
    SomeRoleName = 'E12S5_Builder' 
    if (!wf[SomeRoleName] ) { wf[SomeRoleName] = {'role': SomeRoleName, 'roleCount': 0 } }
    wf[SomeRoleName].roleMax = 1;
    wf[SomeRoleName].Parts = [MOVE, MOVE, WORK, WORK, CARRY, CARRY, MOVE, MOVE, WORK, WORK, WORK, CARRY]; //[MOVE, MOVE, MOVE, MOVE, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY];
    wf[SomeRoleName].ResponsibleSpawns = [aSpawn.id];
    wf[SomeRoleName].roleRatio = wf[SomeRoleName].roleCount / wf[SomeRoleName].roleMax;
    wf[SomeRoleName].InitMemory = {'role': SomeRoleName, 'Debug': false, 
        'RoleDefs': {'TOF': SomeRoleName, 'CurrentTask': '0', 'GetGiveSwitch': 'get' ,
            'targ': {'id': '', 'rp': {'x': 20, 'y': 20, 'roomName': 'E12S5'}, 'overrides': {'container': '5aad5656b87ce30001daed7e'}},
            'get': {'Searches': {'0': ['GetClosestStorage_pickup', 'GetClosestContainer_ForPickup']}, 
                    'Tasks': {'0': 'withdraw' }, 
                    'Args': {'0': RESOURCE_ENERGY }, 
                    'CleanUp': {'0': 'NewGuy_CleanUp_withdraw'} },
            'give': {'Searches': {'0': ['GetClosestConstructionSite'],  '1':  ['GetClosestRepairContainer', 'GetClosestRepairRoad'], '2': ['GetClosestExtensionSpawn'], '3': ['GetClosestRoomController']},  
                     'Tasks': {'0': 'build', '1': 'repair', '2': 'transfer', '3': 'upgradeController'}, 
                     'Args': { '0': undefined, '1': undefined, '2': RESOURCE_ENERGY, '3': undefined},                                              
                     'CleanUp': {'0': 'NewGuy_CleanUp_build', '1': 'NewGuy_CleanUp_repair', '2': 'NewGuy_CleanUp_transfer', '3': 'NewGuy_CleanUp_upgradeController'} 
            }
        }
    }
    
    SomeRoleName = 'E12S5_TerminalUnLoader' 
    if (!wf[SomeRoleName] ) { wf[SomeRoleName] = {'role': SomeRoleName, 'roleCount': 0 } }
    wf[SomeRoleName].roleMax = 0;
    wf[SomeRoleName].roleRatio = wf[SomeRoleName].roleCount / wf[SomeRoleName].roleMax;
    wf[SomeRoleName].Parts = [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY];
    wf[SomeRoleName].ResponsibleSpawns = [aSpawn.id];
    wf[SomeRoleName].InitMemory = {'role': SomeRoleName, 'Debug': false, 
        'RoleDefs': {'TOF': SomeRoleName, 'CurrentTask': '0', 'GetGiveSwitch': 'get',
            'targ': {'id': '', 'rp': {'x': 20, 'y': 20, 'roomName': 'E12S5'}, 'overrides': {'storage_pickup': '5ab70cb7b31eca001df6c5a2', 'storage_dropoff': '5aae338edca04b00018216ac'} },
            'get': {'Searches': {'0': ['GetClosestStorage_pickup']}, 'Tasks': {'0': 'withdraw' }, 'Args': {'0': RESOURCE_ENERGY }, 'CleanUp': {'0': 'NewGuy_CleanUp_withdraw'} },
            'give': {'Searches': {'0': ['GetClosestStorage']}, 'Tasks': {'0': 'transfer' }, 'Args': {'0': RESOURCE_ENERGY }, 'CleanUp': {'0': 'NewGuy_CleanUp_transfer'} 
                
            }
        }
    }
    
    SomeRoleName = 'E12S5_Currier'  //Formerly NewGuy
    if (!wf[SomeRoleName] ) { wf[SomeRoleName] = {'role': SomeRoleName, 'roleCount': 0 } }
    wf[SomeRoleName].roleMax = 1;
    wf[SomeRoleName].roleRatio = wf[SomeRoleName].roleCount / wf[SomeRoleName].roleMax;
    wf[SomeRoleName].Parts = [MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY]
    wf[SomeRoleName].ResponsibleSpawns = [aSpawn.id];
    wf[SomeRoleName].InitMemory = {'role': SomeRoleName, 'Debug': false, 
        'RoleDefs': {'TOF': SomeRoleName, 'CurrentTask': '0', 'GetGiveSwitch': 'get' ,
            'targ': {'id': '', 'rp': {'x': 20, 'y': 20, 'roomName': 'E12S5'}, 'overrides': {'container': '5aad5656b87ce30001daed7e'}},
            'get': {'Searches': {'0': ['GetClosestContainer_ForPickup', 'GetClosestStorage_pickup']}, 'Tasks': {'0': 'withdraw' }, 'Args': {'0': RESOURCE_ENERGY }, 'CleanUp': {'0': 'NewGuy_CleanUp_withdraw'} },
            'give': {'Searches': {'0': ['GetClosestExtensionSpawn', 'GetClosestTower', 'GetClosestStorage']}, 'Tasks': {'0': 'transfer' }, 'Args': {'0': RESOURCE_ENERGY }, 'CleanUp': {'0': 'NewGuy_CleanUp_transfer'} 
                
            }
        }
    }
    
    SomeRoleName = 'E12S5_RCUpgradeOnly' 
    if (!wf[SomeRoleName] ) { wf[SomeRoleName] = {'role': SomeRoleName, 'roleCount': 0 } }
    wf[SomeRoleName].roleMax = 1;
    wf[SomeRoleName].Parts = [MOVE, MOVE, WORK, WORK, CARRY, CARRY, MOVE, MOVE, WORK, WORK, CARRY, CARRY];
    wf[SomeRoleName].ResponsibleSpawns = [aSpawn.id];
    wf[SomeRoleName].roleRatio = wf[SomeRoleName].roleCount / wf[SomeRoleName].roleMax;
    wf[SomeRoleName].InitMemory = {'role': SomeRoleName, 'Debug': false,
        'RoleDefs': {'TOF': SomeRoleName, 'CurrentTask': '0', 'GetGiveSwitch': 'get' ,
            'targ': {'id': '', 'rp': {'x': 20, 'y': 20, 'roomName': 'E12S5'}, 'overrides': {'container': '5aad5656b87ce30001daed7e'}},
            
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
                
    SomeRoleName = 'E12S5_Harvester' 
    if (!wf[SomeRoleName] ) { wf[SomeRoleName] = {'role': SomeRoleName, 'roleCount': 0 } }
    wf[SomeRoleName].roleMax = 1;
    wf[SomeRoleName].Parts = [MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, WORK, WORK, WORK, WORK, WORK]
    wf[SomeRoleName].ResponsibleSpawns = [aSpawn.id];
    wf[SomeRoleName].roleRatio = wf[SomeRoleName].roleCount / wf[SomeRoleName].roleMax;
    wf[SomeRoleName].InitMemory = {'role': SomeRoleName, 'Debug': false, 
        'RoleDefs': {'TOF': SomeRoleName, 'CurrentTask': '0', 'GetGiveSwitch': 'get',
            'targ': {'id': '', 'rp': {'x': 20, 'y': 20, 'roomName': 'E12S5'}, 'overrides': {'container': '5aad5656b87ce30001daed7e', 'source': '596ce23b3c1b99000a4d3303'}},

            'get': {'Searches': {'0': ['GetSourceFromHardcodedContainerID']}, 'Tasks': {'0': 'harvest' }, 'Args': { }, 'CleanUp': {'0': 'NewGuy_CleanUp_harvest'} },
            'give': {'Searches': {'0': ['GetContainerInRangeForDrop']}, 'Tasks': {'0': 'transfer' }, 'Args': {'0': RESOURCE_ENERGY }, 'CleanUp': {'0': 'NewGuy_CleanUp_transfer'} 
            } 
        }
    }
    
    SomeRoleName = 'E12S5_HARVESTER_Minerals' 
    if (!wf[SomeRoleName] ) { wf[SomeRoleName] = {'role': SomeRoleName, 'roleCount': 0 } }
    wf[SomeRoleName].roleMax = 0;
    wf[SomeRoleName].roleRatio = wf[SomeRoleName].roleCount / wf[SomeRoleName].roleMax;
    wf[SomeRoleName].Parts = [MOVE, MOVE, WORK, WORK, WORK, WORK]
    wf[SomeRoleName].ResponsibleSpawns = [aSpawn.id];
    wf[SomeRoleName].InitMemory = {'role': SomeRoleName, 'Debug': false, 
        'RoleDefs': {'TOF': SomeRoleName, 'CurrentTask': '0', 'GetGiveSwitch': 'get',
            'targ': {'id': '', 'rp': {'x': 6, 'y': 38, 'roomName': 'E12S5'}, 'overrides': {'container': '5ab76063f5f6a3001d6095ac', 'source': '596ce23b3c1b99000a4d3304'}},
            'get': {'Searches': {'0': ['GetSourceFromHardcodedContainerID']}, 'Tasks': {'0': 'harvest' }, 'Args': { }, 'CleanUp': {'0': 'NewGuy_CleanUp_harvest'} },
            'give': {'Searches': {'0': ['GetContainerInRangeForDrop']}, 'Tasks': {'0': 'transfer' }, 'Args': {'0': RESOURCE_ENERGY }, 'CleanUp': {'0': 'NewGuy_CleanUp_transfer'} 
                
            } 
        }
    }
    
    SomeRoleName = 'TheSavior_NORTH' 
    if (!wf[SomeRoleName] ) { wf[SomeRoleName] = {'role': SomeRoleName, 'roleCount': 0 } }
    wf[SomeRoleName].roleMax = 1;
    wf[SomeRoleName].roleRatio = wf[SomeRoleName].roleCount / wf[SomeRoleName].roleMax;
    wf[SomeRoleName].Parts = [MOVE, CARRY, MOVE, CARRY, WORK] //Purposely small and put at the top of the spawn order so itll always be there to fill the ext.
    wf[SomeRoleName].ResponsibleSpawns = [aSpawn.id];
    wf[SomeRoleName].InitMemory = {'role': SomeRoleName, 'Debug': false, 
        'RoleDefs': {'TOF': SomeRoleName, 'CurrentTask': '0', 'GetGiveSwitch': 'get' ,
            'targ': {'id': '', 'rp': {'x': 20, 'y': 20, 'roomName': 'E12S5'}, 'overrides': {'container': '5aad5656b87ce30001daed7e'}},
            'get': {'Searches': {'0': ['GetClosestStorage_pickup']}, 'Tasks': {'0': 'withdraw' }, 'Args': {'0': RESOURCE_ENERGY }, 'CleanUp': {'0': 'NewGuy_CleanUp_withdraw'} },
            'give': {
                'Searches': {'0': ['GetClosestExtensionSpawn', 'GetClosestTower'], '1': ['GetClosestRoomController'] }, 
                'Tasks': {'0': 'transfer', '1': 'upgradeController'}, 
                'Args': {'0': RESOURCE_ENERGY, '1': undefined }, 
                'CleanUp': {'0': 'NewGuy_CleanUp_transfer', '1': 'NewGuy_CleanUp_upgradeController'} 
            }
        }
    }
    
    SomeRoleName = 'E11S5_Cleaimer' 
    if (!wf[SomeRoleName] ) { wf[SomeRoleName] = {'role': SomeRoleName, 'roleCount': 0 } }
    wf[SomeRoleName].roleMax = 0;
    wf[SomeRoleName].roleRatio = wf[SomeRoleName].roleCount / wf[SomeRoleName].roleMax;
    wf[SomeRoleName].Parts = [CLAIM, MOVE, MOVE]
    wf[SomeRoleName].ResponsibleSpawns = [aSpawn.id];
    wf[SomeRoleName].InitMemory = {'role': SomeRoleName, 'Debug': true, 
        'RoleDefs': {'TOF': SomeRoleName, 'CurrentTask': '0', 'GetGiveSwitch': 'get',
            'targ': {'id': '', 'rp': {'x': 42, 'y': 15, 'roomName': 'E13S5'}, 'overrides': {'source': '596ce23b3c1b99000a4d32ef'}},

            'get': {
                'Searches': 
                    {'0': ['GetClosestRoomController']}, 
                'Tasks': 
                    {'0': 'attackController' }, 
                'Args': 
                    {'0': undefined}, 
                'CleanUp': 
                    {'0': 'NewGuy_CleanUp_claim'} },
            'give': {
                'Searches': 
                    {'0': ['GetClosestRoomController'], '1': ['GetClosestRepairContainer', 'GetClosestRepairRoad'], '2': ['GetClosestSource']}, 
                'Tasks': 
                    {'0': 'build', '1': 'repair', '2': 'harvest'  }, 
                'Args': 
                    {'0': undefined, undefined, RESOURCE_ENERGY }, 
                'CleanUp': 
                    {'0': 'NewGuy_CleanUp_build', '1': 'NewGuy_CleanUp_repair', '2': 'NewGuy_CleanUp_harvest_NEW'} 
            } 
        }
    }
    
    
    
    SomeRoleName = 'E12S5_HarvestAndBuildIn_E12S4' 
    if (!wf[SomeRoleName] ) { wf[SomeRoleName] = {'role': SomeRoleName, 'roleCount': 0 } }
    wf[SomeRoleName].roleMax = 0;
    wf[SomeRoleName].roleRatio = wf[SomeRoleName].roleCount / wf[SomeRoleName].roleMax;
    wf[SomeRoleName].Parts = [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK]
    wf[SomeRoleName].ResponsibleSpawns = [aSpawn.id];
    wf[SomeRoleName].InitMemory = {'role': SomeRoleName, 'Debug': true, 
        'RoleDefs': {'TOF': SomeRoleName, 'CurrentTask': '0', 'GetGiveSwitch': 'get',
            'targ': {'id': '', 'rp': {'x': 42, 'y': 15, 'roomName': 'E12S4'}, 'overrides': {'source': '596ce23b3c1b99000a4d32ef'}},

            'get': {
                'Searches': 
                    {'0': ['GetClosestSource']}, 
                'Tasks': 
                    {'0': 'harvest' }, 
                'Args': 
                    {'0': undefined}, 
                'CleanUp': 
                    {'0': 'NewGuy_CleanUp_harvest_NEW'} },
            'give': {
                'Searches': 
                    {'0': ['GetClosestConstructionSite'], '1': ['GetClosestRepairContainer', 'GetClosestRepairRoad'], '2': ['GetClosestSource']}, 
                'Tasks': 
                    {'0': 'build', '1': 'repair', '2': 'harvest'  }, 
                'Args': 
                    {'0': undefined, undefined, RESOURCE_ENERGY }, 
                'CleanUp': 
                    {'0': 'NewGuy_CleanUp_build', '1': 'NewGuy_CleanUp_repair', '2': 'NewGuy_CleanUp_harvest_NEW'}    
            }
        }
    }
} ///END

////////////Room Visuals
//Room Title
myNorthRoom = aSpawn.pos.roomName
new RoomVisual(myNorthRoom).text(myNorthRoom, 4, 18, {color: 'yellow', font: 3});

//Room E12S5 Storage
myStorage = Game.getObjectById('5aae338edca04b00018216ac')
if (myStorage) {
    new RoomVisual(myNorthRoom).text("Storage: " + myStorage.store[RESOURCE_ENERGY].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 4, 20, 
    { color: getColorForPercentage(myStorage.store[RESOURCE_ENERGY]/myStorage.storeCapacity), font: 1});
}

//Room E12S5 Energe Details
var mySource = Game.getObjectById('596ce23b3c1b99000a4d3303')
if (mySource) {
    new RoomVisual(myNorthRoom).text("Energy: " + mySource.energy.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 45, 16, 
        {color: getColorForPercentage(mySource.energy/mySource.energyCapacity), font: 0.5});
        if (mySource.energy < 3000) {
            new RoomVisual(myNorthRoom).text("Tics to Regen: " + mySource.ticksToRegeneration.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 45.5, 16.5, 
            {color: getColorForPercentage(mySource.energy/mySource.energyCapacity), font: 0.5});
    }
}

//Room E12S5 Container Mining Details
myStorage = Game.getObjectById('5aad5656b87ce30001daed7e')
if (myStorage) {
    new RoomVisual(myNorthRoom).text("Container: " + myStorage.store[RESOURCE_ENERGY].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 45.5, 17, 
    { color: getColorForPercentage(myStorage.store[RESOURCE_ENERGY]/myStorage.storeCapacity), font: 0.5});
}

//Room E12S5 Spawn point
new RoomVisual(myNorthRoom).text(Game.rooms[myNorthRoom].energyAvailable.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " of " + Game.rooms[myNorthRoom].energyCapacityAvailable.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 32, 9, 
    {color: getColorForPercentage(Game.rooms[myNorthRoom].energyAvailable/Game.rooms[myNorthRoom].energyCapacityAvailable), font: 1});




