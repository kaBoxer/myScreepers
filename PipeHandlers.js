Creep.prototype.GetNewTarget = function() {
    var peon = this
    var rd = peon.memory.RoleDefs;
    if (this.pos.roomName != rd.targ.rp.roomName) { return } //If your target is not in this room, these searches are no good to you. leave this function with your targ unscathed. moveTo in clean up.
    for (iSearch in rd[rd.GetGiveSwitch].Searches) {
        for (n in rd[rd.GetGiveSwitch].Searches[iSearch]) {
            var SearchText = rd[rd.GetGiveSwitch].Searches[iSearch][n];
            peon.print("Executing Search: " + SearchText)
            var tSearch = peon[SearchText]();
            if (tSearch) {
                peon.print("New Task - " + rd[rd.GetGiveSwitch].Tasks[iSearch] + " - New Target - " + tSearch );
                var oTask = peon[rd[rd.GetGiveSwitch].Tasks[iSearch]](tSearch, rd[rd.GetGiveSwitch].Args[iSearch]); //The task is executed here.
                //rd.targ.NewTargetAcquire = false;
                rd.targ.id = tSearch.id;
                rd.targ.rp = {'x': tSearch.pos.x, 'y': tSearch.pos.y, 'roomName': tSearch.pos.roomName};
                rd.CurrentTask = iSearch;
                peon.print("New Task Output " + ErrText(oTask));
                return this.ExecuteCurrent();
                 
            }
            peon.print("Search Failed: " + SearchText + " Is " + tSearch);
        }
    }
    
}

Creep.prototype.ExecuteCurrent = function() {
    var rd = this.memory.RoleDefs;
    var rp = rd.targ.rp;
    var target = Game.getObjectById(rd.targ.id);
    
    //For construction sites... but it is interfeering with IDs of things that are out of this room, also just because another creep is in the room, doesnt mean you can ID it. RoomPosition of overrides should be saved.
    //theres got to be another way to know what construction sites are finished.
    if (target == null) {
        return false;
    }
    
    //This is what needs to be run, but with the memory address, not the search result.
    this.print("Current Task - " + rd[rd.GetGiveSwitch].Tasks[rd.CurrentTask] + " - Current Target - " + target )
    var oTask = this[rd[rd.GetGiveSwitch].Tasks[rd.CurrentTask]](target, rd[rd.GetGiveSwitch].Args[rd.CurrentTask]); //The task is executed here.
    this.print("Current ARgs: " + rd[rd.GetGiveSwitch].Args[rd.CurrentTask])
    /*
    if (rd[rd.GetGiveSwitch].Args[rd.CurrentTask] == "RESOURCE_ENERGY") {
      rd[rd.GetGiveSwitch].Args[rd.CurrentTask] = RESOURCE_ENERGY  
    }
    */
    
    this.print("Task Output - " + ErrText(oTask));
    return ErrText(oTask);
    //End execute here.
}