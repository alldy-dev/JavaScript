var width = 600;
var shape = { width: 300 };
var showWidth = function() { 
    return this.width; 
  };

shape.getWidth = showWidth;
document.write(shape.getWidth()); // 300