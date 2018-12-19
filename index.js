
!function(t, e) {
    t.DeviceOrientationEvent && t.addEventListener("deviceorientation", function(t) {
        t.beta && t.gamma && (doc.onmousemove = null);
        var o = (t.beta - 20) / 3
        , a = -t.gamma / 3;
        o = Math.min(o, 20),
        o = Math.max(o, -20),
        a = Math.min(a, 20),
        a = Math.max(a, -20),
        n(o, a)
    }, !1);
    var n = function(x, y) {
        test.style.transform = `
            rotateX(${x}deg)
            rotateY(${y}deg)
        `
    }
    , o = e.documentElement;
    b = e.body,
    e.onmousemove = function(t) {
        var e = t.clientX - b.offsetWidth / 2;
        e /= 100;
        var a = t.clientY - o.clientHeight / 2;
        a /= 100,
        a = -a,
        n(a, e)
    };
    var a = [0, 700, 1800, 2650, 3550];
    setTimeout(function() {
        t.onscroll = function() {
            for (var t, e = 0; e < a.length; e++)
                if (t = a[e],
                t > Math.max(o.scrollTop, b.scrollTop) + o.clientHeight / 2)
                    return o.setAttribute("step", e)
        }
        ,
        t.onscroll()
    }, 1e3)
}(this, document);

// function move(e) {
//     console.log(e)
//     const width = document.body.offsetWidth
//     const height = document.documentElement.clientHeight
//     let { clientX: x, clientY: y} = e
//     const factor = 100
    
//     let xWalk = x - width / 2
//     xWalk /= factor
//     let yWalk = y - height / 2
//     yWalk /= factor
//     yWalk = -yWalk

//     test.style.transform = `
//         rotateX(${yWalk}deg)
//         rotateY(${xWalk}deg)
//     `
// }

// test.addEventListener('mouseover', move)