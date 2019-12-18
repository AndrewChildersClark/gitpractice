/*
AFRAME.registerComponent('example-listener', {
    init: function() {

        const exampleEntity = document.querySelector("#example");
        // const aEntity = document.querySelector("#animated-model");

        // every click, we make our model grow in size :)
        exampleEntity.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (exampleEntity && intersectedElement === exampleEntity) {
                document.querySelector('#example').emit('exampleAnimation');
            }
        });
    }
});
*/

/*
AFRAME.registerComponent('example-listener', {
    init: function () {
        const exampleEntity = document.querySelector("#example");
        exampleEntity.addEventListener('click', function (event) {
            document.querySelector('#example').emit('exampleAnimation');
        });
    }
});
*/

/*
AFRAME.registerComponent('example-listener', {
    init: function () {
      window.addEventListener('click', function (event) {
        document.querySelector('#example').emit('exampleAnimation');
      });
    }
});
*/