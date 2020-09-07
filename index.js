import("./pkg").catch(console.error).then(rust_module => {
    let handle = null;
    let drop_handle = function () {
        if (handle != null) {
            handle.free();
            handle = null;
        }
    }
    const play_button = document.getElementById("play");
    play_button.addEventListener("click", event => {
        drop_handle();
        handle = rust_module.beep();
    });
    const play_music_button = document.getElementById("play_music");
    play_music_button.addEventListener("click", event => {
        drop_handle();
        handle = rust_module.play_music();
    });
    const stop_button = document.getElementById("stop");
    stop_button.addEventListener("click", event => {
        drop_handle();
    });
});