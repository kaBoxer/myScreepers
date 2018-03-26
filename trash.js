/*


    
    SomeRoleName = 'NewGuy_BigMomma' 
    if (!wf[SomeRoleName] ) { wf[SomeRoleName] = {'role': SomeRoleName, 'roleCount': 0 } }
    wf[SomeRoleName].roleMax = 0;
    wf[SomeRoleName].roleRatio = wf[SomeRoleName].roleCount / wf[SomeRoleName].roleMax;
    wf[SomeRoleName].Parts = [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY];
    wf[SomeRoleName].ResponsibleSpawns = [aSpawn.id];
    wf[SomeRoleName].InitMemory = {'role': SomeRoleName, 'Debug': false, 
        'RoleDefs': {'TOF': SomeRoleName, 'CurrentTask': '0', 'GetGiveSwitch': 'get',
            'targ': {'id': '', 'rp': {'x': 35, 'y': 14, 'roomName': 'E12S6'}, 'overrides': {'storage_pickup': '5aae338edca04b00018216ac', 'storage_dropoff': '5aa0012e8f89d00001adb2ac'} },
            'get': {'Searches': {'0': ['GetClosestStorage_pickup']}, 'Tasks': {'0': 'withdraw' }, 'Args': {'0': RESOURCE_ENERGY }, 'CleanUp': {'0': 'NewGuy_CleanUp_withdraw'} },
            'give': {'Searches': {'0': ['GetClosestStorage']}, 'Tasks': {'0': 'transfer' }, 'Args': {'0': RESOURCE_ENERGY }, 'CleanUp': {'0': 'NewGuy_CleanUp_transfer'} 
                
            }
        }
    }


SomeRoleName = 'Big_Mother_Trucker_NORTH' 
    if (!wf[SomeRoleName] ) { wf[SomeRoleName] = {'role': SomeRoleName, 'roleCount': 0 } }
    wf[SomeRoleName].roleMax = 0;
    wf[SomeRoleName].roleRatio = wf[SomeRoleName].roleCount / wf[SomeRoleName].roleMax;
    //wf[SomeRoleName].Parts = [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY]
    wf[SomeRoleName].Parts = [MOVE, CARRY]
    wf[SomeRoleName].ResponsibleSpawns = [aSpawn.id];
    wf[SomeRoleName].InitMemory = {'role': SomeRoleName, 'Debug': false, 
        'RoleDefs': {'TOF': SomeRoleName, 'CurrentTask': '0', 'GetGiveSwitch': 'get' ,
            'targ': {'id': '', 'rp': {'x': 35, 'y': 14, 'roomName': 'E12S5'}, 'overrides': {'storage_pickup': '5aae338edca04b00018216ac', 'storage_dropoff': '5aa0012e8f89d00001adb2ac'} },
            'get': {'Searches': {'0': ['GetClosestStorage_pickup']}, 'Tasks': {'0': 'withdraw' }, 'Args': {'0': RESOURCE_ENERGY }, 'CleanUp': {'0': 'NewGuy_CleanUp_withdraw'} },
            'give': {'Searches': {'0': ['GetClosestStorage']}, 'Tasks': {'0': 'transfer' }, 'Args': {'0': RESOURCE_ENERGY }, 'CleanUp': {'0': 'NewGuy_CleanUp_transfer'} 
                
            }
        }
    }

SomeRoleName = 'NewGuy_CLAIMER_NORTH' 
    if (!wf[SomeRoleName] ) { wf[SomeRoleName] = {'role': SomeRoleName, 'roleCount': 0 } }
    wf[SomeRoleName].roleMax = 0;
    wf[SomeRoleName].roleRatio = wf[SomeRoleName].roleCount / wf[SomeRoleName].roleMax;
    wf[SomeRoleName].Parts = [CLAIM, MOVE, MOVE]
    wf[SomeRoleName].ResponsibleSpawns = [aSpawn.id];
    wf[SomeRoleName].InitMemory = {'role': SomeRoleName, 'Debug': true, 
        'RoleDefs': {'TOF': SomeRoleName, 'CurrentTask': '0', 'GetGiveSwitch': 'get',
            'targ': {'id': '', 'rp': {'x': 42, 'y': 15, 'roomName': 'E12S5'}, 'overrides': {'source': '596ce23b3c1b99000a4d3303'}},

            'get': {
                'Searches': 
                    {'0': ['GetClosestRoomController']}, 
                'Tasks': 
                    {'0': 'claimController' }, 
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











































*/