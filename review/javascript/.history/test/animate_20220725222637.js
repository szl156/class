function animate(obj, target, callback) {
    obj.timer = setInterval(function() {
        let step = Math.ceil((target - obj.offsetLeft) / 10)
        if (obj.offsetLeft >= target) {
            clearInterval(obj.timer)
            if (callback) {
                callback()
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px'
    }, 40)
}