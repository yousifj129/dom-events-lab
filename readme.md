# how I did it:
I made a variable called expression and let the user write ANYTHING into it, and then made a function that takes that expression and separates numbers and operations and does them in the order the user inputed.
The problem with such method is that it doesn't take into account priorities in math, where multiplication must be done before addition.
So if I wrote "10+5*10" it will add first before multiplication.
I thought about making a priority system which takes this into account, but I thought that I was overcomplicating it and the instructions only asked for 2 number operations anyway.
I also added keyboard input so it would be easier to write them using the keyboard instead of the keypad.