window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}
import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'

neonCursor({
    el: document.getElementById('app'),
    shaderPoints: 16,
    curvePoints: 30,
    curveLerp: 0.5,
    radius1: 2,
    radius2: 20,
    velocityTreshold: 100,
    sleepRadiusX: 100,
    sleepRadiusY: 100,
    sleepTimeCoefX: 0.0025,
    sleepTimeCoefY: 0.0025
})


window.addEventListener('DOMContentLoaded', () => {
    // get all progress bar
    const elements = [].slice.call(document.querySelectorAll('.pie'));
    // call to function
    const circle = new CircularProgressBar('pie');

    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    // if IntersectionObserver is supported by the browser
    if ('IntersectionObserver' in window) {
        const config = {
            root: null,
            rootMargin: '0px',
            threshold: 0.75,
        };

        const ovserver = new IntersectionObserver((entries, observer) => {
            entries.map((entry) => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.75) {
                    circle.initial(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, config);

        elements.map((item) => {
            ovserver.observe(item);
        });
    } else {
        // if the browser does not support IntersectionObserver
        // we run all progress bars at once
        elements.map((element) => {
            circle.initial(element);
        });
    }
});


