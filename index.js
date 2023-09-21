window.AudioW={
    player:[],
    async Do(){(await new Promise(function(r){window.AudioW.player.push(r)}))()},
    Run(fn) {
        const ref=window.AudioW.player; // pointer
        if (ref.length==0) return false;
        const Fn=ref[0];
        ref.splice(ref.indexOf(Fn),1);
        Fn(fn);
        return true
    }
};
document.onclick=window.AudioW.Do;
//document.ontouchstart=window.AudioW.Do; // UNTEST
//document.onkeydown=window.AudioW.Do; // TESTED BUT NOT SURE
