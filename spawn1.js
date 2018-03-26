require('UI');
var aSpawn = Game.spawns.Spawn1

Spawn1_BuildWorkforce = function () {
    var wf = Memory.Workforce_Structure;
    
    SomeRoleName = 'NewGuy_TerminalLoader' 
    if (!wf[SomeRoleName] ) { wf[SomeRoleName] = {'role': SomeRoleName, 'roleCount': 0 } }
    wf[SomeRoleName].roleMax = 0;
    wf[SomeRoleName].roleRatio = wf[SomeRoleName].roleCount / wf[SomeRoleName].roleMax;
    wf[SomeRoleName].Parts = [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY];
    wf[SomeRoleName].ResponsibleSpawns = [aSpawn.id];
    wf[SomeRoleName].InitMemory = {'role': SomeRoleName, 'Debug': false, 
        'RoleDefs': {'TOF': SomeRoleName, 'CurrentTask': '0', 'GetGiveSwitch': 'get',
            'targ': {'id': '', 'rp': {'x': 20, 'y': 20, 'roomName': 'E12S6'}, 'overrides': {'storage_pickup': '5aa0012e8f89d00001adb2ac', 'storage_dropoff': '5aae01f09bc15600017b0cee'} },
            'get': {'Searches': {'0': ['GetClosestStorage_pickup']}, 'Tasks': {'0': 'withdraw' }, 'Args': {'0': RESOURCE_ENERGY }, 'CleanUp': {'0': 'NewGuy_CleanUp_withdraw'} },
            'give': {'Searches': {'0': ['GetClosestStorage']}, 'Tasks': {'0': 'transfer' }, 'Args': {'0': RESOURCE_ENERGY }, 'CleanUp': {'0': 'NewGuy_CleanUp_transfer'} 
                
            }
        }
    }
    
    SomeRoleName = 'E12S6_TruckerTo_E12S4' 
    if (!wf[SomeRoleName] ) { wf[SomeRoleName] = {'role': SomeRoleName, 'roleCount': 0 } }
    wf[SomeRoleName].roleMax = 0;
    wf[SomeRoleName].roleRatio = wf[SomeRoleName].roleCount / wf[SomeRoleName].roleMax;
    wf[SomeRoleName].Parts = [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY];
    wf[SomeRoleName].ResponsibleSpawns = [aSpawn.id];
    wf[SomeRoleName].InitMemory = {'role': SomeRoleName, 'Debug': false, 
        'RoleDefs': {'TOF': SomeRoleName, 'CurrentTask': '0', 'GetGiveSwitch': 'get',
            'targ': {'id': '', 'rp': {'x': 20, 'y': 20, 'roomName': 'E12S6'}, 'overrides': {'storage_pickup': '5ab70cb7b31eca001df6c5a2', 'storage_dropoff': '5ab83e60a2ba35001d091c80'} },
            'get': {'Searches': {'0': ['GetClosestStorage_pickup']}, 'Tasks': {'0': 'withdraw' }, 'Args': {'0': RESOURCE_ENERGY }, 'CleanUp': {'0': 'NewGuy_CleanUp_withdraw'} },
            'give': {'Searches': {'0': ['GetClosestStorage']}, 'Tasks': {'0': 'transfer' }, 'Args': {'0': RESOURCE_ENERGY }, 'CleanUp': {'0': 'NewGuy_CleanUp_transfer'} 
                
            }
        }
    }
    
    SomeRoleName = 'E12S6_LabLoader' 
    if (!wf[SomeRoleName] ) { wf[SomeRoleName] = {'role': SomeRoleName, 'roleCount': 0 } }
    wf[SomeRoleName].roleMax = 0;
    wf[SomeRoleName].roleRatio = wf[SomeRoleName].roleCount / wf[SomeRoleName].roleMax;
    wf[SomeRoleName].Parts = [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY];
    wf[SomeRoleName].ResponsibleSpawns = [aSpawn.id];
    wf[SomeRoleName].InitMemory = {'role': SomeRoleName, 'Debug': false, 
        'RoleDefs': {'TOF': SomeRoleName, 'CurrentTask': '0', 'GetGiveSwitch': 'get',
            'targ': {'id': '', 'rp': {'x': 20, 'y': 20, 'roomName': 'E12S5'}, 'overrides': {'storage_pickup': '5ab76063f5f6a3001d6095ac', 'storage_dropoff': '5aae01f09bc15600017b0cee'} },
            'get': {'Searches': {'0': ['GetClosestStorage_pickup']}, 'Tasks': {'0': 'withdraw' }, 'Args': {'0': 'L' }, 'CleanUp': {'0': 'NewGuy_CleanUp_withdraw'} },
            'give': {'Searches': {'0': ['GetClosestStorage']}, 'Tasks': {'0': 'transfer' }, 'Args': {'0': 'L' }, 'CleanUp': {'0': 'NewGuy_CleanUp_transfer'} 
                
            }
        }
    }
    
    SomeRoleName = 'NewGuy_Gunner' 
    if (!wf[SomeRoleName] ) { wf[SomeRoleName] = {'role': SomeRoleName, 'roleCount': 0 } }
    wf[SomeRoleName].roleMax = 0;
    wf[SomeRoleName].roleRatio = wf[SomeRoleName].roleCount / wf[SomeRoleName].roleMax;
    wf[SomeRoleName].Parts = [MOVE, CARRY, MOVE, CARRY, MOVE, CARRY]
    wf[SomeRoleName].ResponsibleSpawns = [aSpawn.id];
    wf[SomeRoleName].InitMemory = {'role': SomeRoleName, 'Debug': false, 
        'RoleDefs': {'TOF': SomeRoleName, 'CurrentTask': '0', 'GetGiveSwitch': 'get',
            'targ': {'id': '', 'rp': {'x': 20, 'y': 20, 'roomName': 'E12S6'}, 'overrides': {'container': '596ce23b3c1b99000a4d32cd'}},
            
            'get': {'Searches': {'0': ['GetClosestStorage_pickup']}, 'Tasks': {'0': 'withdraw' }, 'Args': {'0': RESOURCE_ENERGY }, 'CleanUp': {'0': 'NewGuy_CleanUp_withdraw'} },
            'give': {'Searches': {'0': ['GetClosestTower', 'GetClosestExtensionSpawn', 'GetClosestLab', 'GetClosestStorage']}, 'Tasks': {'0': 'transfer' }, 'Args': {'0': RESOURCE_ENERGY }, 'CleanUp': {'0': 'NewGuy_CleanUp_transfer'} 
                
            }
        }
    }
    
    SomeRoleName = 'NewGuy_Builder' 
    if (!wf[SomeRoleName] ) { wf[SomeRoleName] = {'role': SomeRoleName, 'roleCount': 0 } }
    wf[SomeRoleName].roleMax = 0;
    wf[SomeRoleName].roleRatio = wf[SomeRoleName].roleCount / wf[SomeRoleName].roleMax;
    wf[SomeRoleName].Parts = [MOVE, MOVE,MOVE, WORK, CARRY, MOVE, MOVE, MOVE, MOVE, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY];
    wf[SomeRoleName].ResponsibleSpawns = [aSpawn.id];
    wf[SomeRoleName].InitMemory = {'role': SomeRoleName, 'Debug': false, 
        'RoleDefs': {'TOF': SomeRoleName, 'CurrentTask': '0', 'GetGiveSwitch': 'get',
            'targ': {'id': '', 'rp': {'x': 20, 'y': 20, 'roomName': 'E12S6'}, 'overrides': {'container': '596ce23b3c1b99000a4d32cd'}},
             'get': {'Searches': {'0': ['GetClosestStorage_pickup']}, 'Tasks': {'0': 'withdraw' }, 'Args': {'0': RESOURCE_ENERGY }, 'CleanUp': {'0': 'NewGuy_CleanUp_withdraw'} },
            'give': {'Searches': {'0': ['GetClosestConstructionSite'], '1': ['GetClosestRampartBelow_RAMPART_SEARCH_MULTIPLIER', 'GetClosestWallBelow_WALL_SEARCH_MULTIPLIER', 'GetClosestRepairContainer', 'GetClosestRepairRoad'], '2': ['GetClosestRoomController']},  
                     'Tasks': {'0': 'build', '1': 'repair', '2': 'upgradeController'}, 
                     'Args': {'0': undefined, '1': undefined, '2': undefined},
                     'CleanUp': {'0': 'NewGuy_CleanUp_build', '1': 'NewGuy_CleanUp_repair', '2': 'NewGuy_CleanUp_upgradeController'} 
            }
        }
    }


    SomeRoleName = 'RCUpgradeOnly' 
    if (!wf[SomeRoleName] ) { wf[SomeRoleName] = {'role': SomeRoleName, 'roleCount': 0 } }
    wf[SomeRoleName].roleMax = 2;
    wf[SomeRoleName].roleRatio = wf[SomeRoleName].roleCount / wf[SomeRoleName].roleMax;
    wf[SomeRoleName].Parts = [MOVE, MOVE, WORK, WORK, CARRY, CARRY, MOVE, MOVE, WORK, WORK, CARRY, CARRY];
    wf[SomeRoleName].ResponsibleSpawns = [aSpawn.id];
    wf[SomeRoleName].InitMemory = {'role': SomeRoleName, 'Debug': false, 
        'RoleDefs': {'TOF': SomeRoleName, 'CurrentTask': '0', 'GetGiveSwitch': 'get' ,
            'targ': {'id': '', 'rp': {'x': 20, 'y': 20, 'roomName': 'E12S6'}, 'overrides': {'container': '596ce23b3c1b99000a4d32cd'}},
            
            'get': {'Searches': {'0': ['GetClosestStorage_pickup']}, 
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

    SomeRoleName = 'NewGuy' 
    if (!wf[SomeRoleName] ) { wf[SomeRoleName] = {'role': SomeRoleName, 'roleCount': 0 } }
    wf[SomeRoleName].roleMax = 0;
    wf[SomeRoleName].roleRatio = wf[SomeRoleName].roleCount / wf[SomeRoleName].roleMax;
    wf[SomeRoleName].Parts = [MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, CARRY]
    wf[SomeRoleName].ResponsibleSpawns = [aSpawn.id];
    wf[SomeRoleName].InitMemory = {'role': SomeRoleName, 'Debug': false, 
        'RoleDefs': {'TOF': SomeRoleName, 'CurrentTask': '0', 'GetGiveSwitch': 'get' ,
            'targ': {'id': '', 'rp': {'x': 20, 'y': 20, 'roomName': 'E12S6'}, 'overrides': {'container': '596ce23b3c1b99000a4d32cd'}},
            'get': {'Searches': {'0': ['GetClosestStorage_pickup']}, 'Tasks': {'0': 'withdraw' }, 'Args': {'0': RESOURCE_ENERGY }, 'CleanUp': {'0': 'NewGuy_CleanUp_withdraw'} },
            'give': {'Searches': {'0': ['GetClosestExtensionSpawn',  'GetClosestTower', 'GetClosestLab', 'GetClosestTerminal', 'GetClosestStorage']}, 'Tasks': {'0': 'transfer' }, 'Args': {'0': RESOURCE_ENERGY }, 'CleanUp': {'0': 'NewGuy_CleanUp_transfer'} 
                
            }
        }
    }
    
    SomeRoleName = 'LinkMaster_Storage' 
    if (!wf[SomeRoleName] ) { wf[SomeRoleName] = {'role': SomeRoleName, 'roleCount': 0 } }
    wf[SomeRoleName].roleMax = 1;
    wf[SomeRoleName].roleRatio = wf[SomeRoleName].roleCount / wf[SomeRoleName].roleMax;
    wf[SomeRoleName].Parts = [MOVE, CARRY];
    wf[SomeRoleName].ResponsibleSpawns = [aSpawn.id];
    wf[SomeRoleName].InitMemory = {'role': SomeRoleName, 'Debug': false, 
        'RoleDefs': {'TOF': SomeRoleName, 'CurrentTask': '0', 'GetGiveSwitch': 'get',
            'targ': {'id': '', 'rp': {'x': 8, 'y': 14, 'roomName': 'E12S6'}, 'overrides': {'storage_pickup': '5ab7163a3bf4d5001f90de60', 'storage_dropoff': '5aa0012e8f89d00001adb2ac'} },
            'get': {'Searches': {'0': ['GetClosestStorage_pickup']}, 'Tasks': {'0': 'withdraw' }, 'Args': {'0': RESOURCE_ENERGY }, 'CleanUp': {'0': 'NewGuy_CleanUp_withdraw'} },
            'give': {'Searches': {'0': ['GetClosestStorage']}, 'Tasks': {'0': 'transfer' }, 'Args': {'0': RESOURCE_ENERGY }, 'CleanUp': {'0': 'NewGuy_CleanUp_transfer'} 
                
            }
        }
    }
    
    SomeRoleName = 'LinkMaster_Container_South' 
    if (!wf[SomeRoleName] ) { wf[SomeRoleName] = {'role': SomeRoleName, 'roleCount': 0 } }
    wf[SomeRoleName].roleMax = 1;
    wf[SomeRoleName].roleRatio = wf[SomeRoleName].roleCount / wf[SomeRoleName].roleMax;
    wf[SomeRoleName].Parts = [MOVE, CARRY];
    wf[SomeRoleName].ResponsibleSpawns = [aSpawn.id];
    wf[SomeRoleName].InitMemory = {'role': SomeRoleName, 'Debug': false, 
        'RoleDefs': {'TOF': SomeRoleName, 'CurrentTask': '0', 'GetGiveSwitch': 'get',
            'targ': {'id': '', 'rp': {'x': 23, 'y': 41, 'roomName': 'E12S6'}, 'overrides': {'storage_pickup': '5ab183fd7ef9e90014a467a1', 'storage_dropoff': '5ab726df109ccc001d89b86b', 'link_target': '5ab7163a3bf4d5001f90de60'} },
            'get': {'Searches': {'0': ['GetClosestStorage_pickup']}, 'Tasks': {'0': 'withdraw' }, 'Args': {'0': RESOURCE_ENERGY }, 'CleanUp': {'0': 'NewGuy_CleanUp_withdraw'} },
            'give': {'Searches': {'0': ['GetClosestStorage']}, 'Tasks': {'0': 'transfer' }, 'Args': {'0': RESOURCE_ENERGY }, 'CleanUp': {'0': 'NewGuy_CleanUp_LinkMaster'} 
                
            }
        }
    }
    
    SomeRoleName = 'NewGuy_HARVESTER' 
    if (!wf[SomeRoleName] ) { wf[SomeRoleName] = {'role': SomeRoleName, 'roleCount': 0 } }
    wf[SomeRoleName].roleMax = 1;
    wf[SomeRoleName].roleRatio = wf[SomeRoleName].roleCount / wf[SomeRoleName].roleMax;
    wf[SomeRoleName].Parts = [MOVE, MOVE, MOVE, CARRY, WORK, WORK, WORK, WORK, WORK]
    wf[SomeRoleName].ResponsibleSpawns = [aSpawn.id];
    wf[SomeRoleName].InitMemory = {'role': SomeRoleName, 'Debug': false, 
        'RoleDefs': {'TOF': SomeRoleName, 'CurrentTask': '0', 'GetGiveSwitch': 'get',
            'targ': {'id': '', 'rp': {'x': 20, 'y': 20, 'roomName': 'E12S6'}, 'overrides': {'container': '5ab183fd7ef9e90014a467a1', 'source': '596ce23b3c1b99000a4d32cf'}},

            'get': {'Searches': {'0': ['GetSourceFromHardcodedContainerID']}, 'Tasks': {'0': 'harvest' }, 'Args': { }, 'CleanUp': {'0': 'NewGuy_CleanUp_harvest'} },
            'give': {'Searches': {'0': ['GetContainerInRangeForDrop']}, 'Tasks': {'0': 'transfer' }, 'Args': {'0': RESOURCE_ENERGY }, 'CleanUp': {'0': 'NewGuy_CleanUp_transfer'} 
                
            } 
        }
    }
    
    SomeRoleName = 'E12S6_HARVESTER_Minerals' 
    if (!wf[SomeRoleName] ) { wf[SomeRoleName] = {'role': SomeRoleName, 'roleCount': 0 } }
    wf[SomeRoleName].roleMax = 0;
    wf[SomeRoleName].roleRatio = wf[SomeRoleName].roleCount / wf[SomeRoleName].roleMax;
    wf[SomeRoleName].Parts = [MOVE, MOVE, WORK, WORK, WORK, WORK]
    wf[SomeRoleName].ResponsibleSpawns = [aSpawn.id];
    wf[SomeRoleName].InitMemory = {'role': SomeRoleName, 'Debug': false, 
        'RoleDefs': {'TOF': SomeRoleName, 'CurrentTask': '0', 'GetGiveSwitch': 'get',
            'targ': {'id': '', 'rp': {'x': 20, 'y': 20, 'roomName': 'E12S6'}, 'overrides': {'container': '5ab6fa792f3077001cd18859', 'source': '596ce23b3c1b99000a4d32cf'}},
            'get': {'Searches': {'0': ['GetSourceFromHardcodedContainerID']}, 'Tasks': {'0': 'harvest' }, 'Args': { }, 'CleanUp': {'0': 'NewGuy_CleanUp_harvest'} },
            'give': {'Searches': {'0': ['GetContainerInRangeForDrop']}, 'Tasks': {'0': 'transfer' }, 'Args': {'0': RESOURCE_ENERGY }, 'CleanUp': {'0': 'NewGuy_CleanUp_transfer'} 
                
            } 
        }
    }
    
    SomeRoleName = 'LinkMaster_Container_North' 
    if (!wf[SomeRoleName] ) { wf[SomeRoleName] = {'role': SomeRoleName, 'roleCount': 0 } }
    wf[SomeRoleName].roleMax = 1;
    wf[SomeRoleName].roleRatio = wf[SomeRoleName].roleCount / wf[SomeRoleName].roleMax;
    wf[SomeRoleName].Parts = [MOVE, CARRY];
    wf[SomeRoleName].ResponsibleSpawns = [aSpawn.id];
    wf[SomeRoleName].InitMemory = {'role': SomeRoleName, 'Debug': false, 
        'RoleDefs': {'TOF': SomeRoleName, 'CurrentTask': '0', 'GetGiveSwitch': 'get',
            'targ': {'id': '', 'rp': {'x': 23, 'y': 41, 'roomName': 'E12S6'}, 'overrides': {'storage_pickup': '5ab189af00f1ff0014a30199', 'storage_dropoff': '5ab73293635609001d83da50', 'link_target': '5ab7163a3bf4d5001f90de60'} },
            'get': {'Searches': {'0': ['GetClosestStorage_pickup']}, 'Tasks': {'0': 'withdraw' }, 'Args': {'0': RESOURCE_ENERGY }, 'CleanUp': {'0': 'NewGuy_CleanUp_withdraw'} },
            'give': {'Searches': {'0': ['GetClosestStorage']}, 'Tasks': {'0': 'transfer' }, 'Args': {'0': RESOURCE_ENERGY }, 'CleanUp': {'0': 'NewGuy_CleanUp_LinkMaster'} 
                
            }
        }
    }
    
    SomeRoleName = 'NewGuy_HARVESTER_TOP' 
    if (!wf[SomeRoleName] ) { wf[SomeRoleName] = {'role': SomeRoleName, 'roleCount': 0 } }
    wf[SomeRoleName].roleMax = 1;
    wf[SomeRoleName].roleRatio = wf[SomeRoleName].roleCount / wf[SomeRoleName].roleMax;
    wf[SomeRoleName].Parts = [MOVE, MOVE, MOVE, CARRY, WORK, WORK, WORK, WORK, WORK]
    wf[SomeRoleName].ResponsibleSpawns = [aSpawn.id];
    wf[SomeRoleName].InitMemory = {'role': SomeRoleName, 'Debug': false, 
        'RoleDefs': {'TOF': SomeRoleName, 'CurrentTask': '0', 'GetGiveSwitch': 'get',
            'targ': {'id': '', 'rp': {'x': 20, 'y': 20, 'roomName': 'E12S6'}, 'overrides': {'container': '5ab189af00f1ff0014a30199', 'source': '596ce23b3c1b99000a4d32cd'}},

            'get': {'Searches': {'0': ['GetSourceFromHardcodedContainerID']}, 'Tasks': {'0': 'harvest' }, 'Args': { }, 'CleanUp': {'0': 'NewGuy_CleanUp_harvest'} },
            'give': {'Searches': {'0': ['GetContainerInRangeForDrop']}, 'Tasks': {'0': 'transfer' }, 'Args': {'0': RESOURCE_ENERGY }, 'CleanUp': {'0': 'NewGuy_CleanUp_transfer'} 
            } 
        }
    }
    
    SomeRoleName = 'E12S6_TheSavior' 
    if (!wf[SomeRoleName] ) { wf[SomeRoleName] = {'role': SomeRoleName, 'roleCount': 0 } }
    wf[SomeRoleName].roleMax = 1;
    wf[SomeRoleName].roleRatio = wf[SomeRoleName].roleCount / wf[SomeRoleName].roleMax;
    wf[SomeRoleName].Parts = [MOVE, CARRY, MOVE, CARRY, MOVE, CARRY] //Purposely small and put at the top of the spawn order so itll always be there to fill the ext.
    wf[SomeRoleName].ResponsibleSpawns = [aSpawn.id];
    wf[SomeRoleName].InitMemory = {'role': SomeRoleName, 'Debug': false, 
        'RoleDefs': {'TOF': SomeRoleName, 'CurrentTask': '0', 'GetGiveSwitch': 'get' ,
            'targ': {'id': '', 'rp': {'x': 20, 'y': 20, 'roomName': 'E12S6'}, 'overrides': {'container': '596ce23b3c1b99000a4d32cd'}},
            
            //TODO: Use this.memory.RoleDefs.get.tasks' string to call an exit function that checks for tasks completetion. 
            //The idea on this one is that, your in get mode so you loop through the entire this.memory.RoleDefs.get.Search object, executeing the searches found there, one at a time.
            //The first search that is found, apply that target to the task found in the same key like: this.memory.RoleDefs.get.Tasks[ KEY_SearchResult ](this.memory.RoleDefs.get.Args[ KEY_SearchResult ])
            //Not sure if tasks that require no args will mind being passed an undefined, but well see. 
            'get': {'Searches': {'0': ['GetClosestStorage_pickup', 'GetClosestContainer_ForPickup']}, 'Tasks': {'0': 'withdraw' }, 'Args': {'0': RESOURCE_ENERGY }, 'CleanUp': {'0': 'NewGuy_CleanUp_withdraw'} },
            'give': {'Searches': {'0': ['GetClosestExtensionSpawn', 'GetClosestTower', 'GetClosestStorage']}, 'Tasks': {'0': 'transfer' }, 'Args': {'0': RESOURCE_ENERGY }, 'CleanUp': {'0': 'NewGuy_CleanUp_transfer'} 
                
            }
        }
    }

} ///END


////////////Room Visuals
//Room Title
myRoom = aSpawn.pos.roomName;
new RoomVisual(myRoom).text(myRoom, 5, 25.765, {color: 'yellow', font: 2});

//Room E12S6 Storage
myStorage = Game.getObjectById('5aa0012e8f89d00001adb2ac')
new RoomVisual(myRoom).text(myStorage.store[RESOURCE_ENERGY].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 5, 15, { color: 'yellow', font: 0.85});

//Room E12S6 MINER CONTAINER (South)
myStorage = Game.getObjectById('5ab183fd7ef9e90014a467a1')
if (myStorage) {
    new RoomVisual(myRoom).text("Container: " + myStorage.store[RESOURCE_ENERGY].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 24, 39, 
    { color: getColorForPercentage(myStorage.store[RESOURCE_ENERGY]/myStorage.storeCapacity), font: 0.5});
}

//Room E12S6 MINER CONTAINER (North)
myStorage = Game.getObjectById('5ab189af00f1ff0014a30199')
if (myStorage) {
    new RoomVisual(myRoom).text("Container: " + myStorage.store[RESOURCE_ENERGY].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 37, 12, 
    { color: getColorForPercentage(myStorage.store[RESOURCE_ENERGY]/myStorage.storeCapacity), font: 0.5});
}


//Room E12S6 Spawn Point Energy Details
new RoomVisual(myRoom).text(Game.rooms[myRoom].energyAvailable.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " of " + Game.rooms[myRoom].energyCapacityAvailable.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 7, 17.60, 
    {color: getColorForPercentage(Game.rooms[myRoom].energyAvailable/Game.rooms[myRoom].energyCapacityAvailable), font: 0.5});



//Room E12S6 Source Details (North)
var mySource = Game.getObjectById('596ce23b3c1b99000a4d32cd')
if (mySource) {
    //VISUAL OUTPUT - Text showing energy avail and tics to regen of Energy Harvest Node.
    new RoomVisual(myRoom).text("Energy: " + mySource.energy.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 37, 11, 
        {color: getColorForPercentage(mySource.energy/mySource.energyCapacity), font: 0.5});
        if (mySource.energy < 3000) {
            new RoomVisual(myRoom).text("Tics to Regen: " + mySource.ticksToRegeneration.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 37.5, 11.5, 
            {color: getColorForPercentage(mySource.energy/mySource.energyCapacity), font: 0.5});
        }
}

//Room E12S6 Source Details (South)
var mySource = Game.getObjectById('596ce23b3c1b99000a4d32cf')
if (mySource) {
    new RoomVisual(myRoom).text("Energy: " + mySource.energy.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 23, 38, 
        {color: getColorForPercentage(mySource.energy/mySource.energyCapacity), font: 0.5});
        if (mySource.energy < 3000) {
            new RoomVisual(myRoom).text("Tics to Regen: " + mySource.ticksToRegeneration.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 23.5, 38.5, 
            {color: getColorForPercentage(mySource.energy/mySource.energyCapacity), font: 0.5});
        }
}
//Room E12S6 Room Controller Details
myRoomController = Game.getObjectById('596ce23b3c1b99000a4d32ce')
if (myRoomController) {
    new RoomVisual(myRoom).text(myRoomController.progress.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 5, 23.25, {color: getColorForPercentage(myRoomController.progress/myRoomController.progressTotal), font: 0.75});
    new RoomVisual(myRoom).text(myRoomController.progressTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 5, 24, {color: getColorForPercentage(myRoomController.progress/myRoomController.progressTotal), font: 0.75});
}





