let values = document.querySelector('.num');
let intervalue = 4000;

let valuesArray = Array.from(values);

valuesArray.forEach((value) => {
    let startValue =0;
    let endValue = parseInt(value.getAttribute('data-val'));
    let duration = math.floor(intervalue / endValue);
    let counter = setInterval(function(){
        startValue += 1;
        value.textcontent = startValue;
        if(startValue == endValue){
            clearInterval(counter);
        }
    },duration)
})

// active section


  const boxes = document.querySelectorAll('.ser-boxs');

  boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
      // Remove 'active' class from all boxes
      boxes.forEach((box) => {
        box.classList.remove('active');
      });

      // Add 'active' class to the clicked box
      box.classList.add('active');
    });

    box.addEventListener('mouseover', () => {
      // Remove 'active' class from all boxes except the first one
      if (index !== 0) {
        boxes.forEach((box) => {
          box.classList.remove('active');
        });

        // Add 'active' class to the hovered box
        box.classList.add('active');
      }
    });
  });


  const item = document.querySelectorAll('.type-box');

  item.forEach((box, index) => {
    box.addEventListener('click', () => {
      // Remove 'active' class from all item
      item.forEach((box) => {
        box.classList.remove('active');
      });

      // Add 'active' class to the clicked box
      box.classList.add('active');
    });

    box.addEventListener('mouseover', () => {
      // Remove 'active' class from all item except the first one
      if (index !== 0) {
        item.forEach((box) => {
          box.classList.remove('active');
        });

        // Add 'active' class to the hovered box
        box.classList.add('active');
      }
    });
  });

