[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-8d59dc4de5201274e310e4c54b9627a8934c3b88527886e3b421487c677d23eb.svg)](https://classroom.github.com/a/VOKVqSaw)


Lab 7 Q1: Randomly Colored Ellipses

 https://editor.p5js.org/evansoucy17/sketches/o2MKO24WO
 
For this question I created a code that generates an array of random colors, and then draws two diagonal lines of ellipses with the colors randomly assigned from the array. I started y defining an array of colors containing 13 different colors. The starting coordinates are defined for the first line of ellipses, and also the second line, which starts from the bottom left corner of the canvas. Then I created a loop that runs 15 times to draw each ellipse in the first line. The random() function is used to select a color from the array for each ellipse. The drawSprite() function is called to draw each ellipse with the randomly selected color, and then the x and y coordinates are incremented using the offSet variable to move to the next position. Another loop runs to draw the second line of ellipses in the same manner as the first line, but with coordinates and offsets defined for the second line.


Lab 7 Q2: 5x5 grid w. Gradient 

https://editor.p5js.org/evansoucy17/sketches/v6uQzOTUc

For this question I created a code that creates a 5x5 grid of ellipses with a gradient effect from white to dark blue using the RGB color scale. The code I wrote uses two nested loops to draw a 5x5 grid of ellipses. The numRows and numCols variables represent the row and column index of each ellipse, respectively. Inside the loops, the program calculates the RGB color values for each ellipse based on their row and column index. The redVal variable is calculated as 255 - numRows * 50, which means that the red value will decrease from 255 to 55 as the row index increases from 0 to 4. The greenVal variable is calculated in a similar way based on the column index. The blueVal is set to 255, which means that all ellipses will have a blue component. Then the randomColor variable is created using the color() function, which takes the red, green, and blue values as arguments. This color is passed to the drawSprite() function, which draws the ellipse at the specified position with the specified color.

Lab 7 Q3: Adding Mouse Pressed 

https://editor.p5js.org/evansoucy17/sketches/i9fmE2zNY

For  Q3 I modified my previouse code so that when the mouse is pressed the blue gradient changes to a red gradient. Everything else is the same I just modified the RGB variables and added and if else statement as well as a bullian variable test so that if the mouse is pressed the gradient would change and if not the gradient would be redrawn. 
