# Critical Thinking

1. What is the purpose of a loop structure?

2. Explain the difference between a `while` and a `do-while` loop.

3. 
  a) What is an infinite loop?
  b) How do you know if your program is caught in an infinite loop?
  c) What should you check in your loop to make sure it won't be infinite?

4. How many times will this do-while loop iterate?

```
var x = 0;
do {
  x = x + 2;
} while (x < 120);
```
60 times

5. Replace the ????? with an expression that changes x each loop iteration, such that eventually the loop will break.

> a. 
```
x = 0
do {
  x += 5;
} while (x < 120);
```

> b.
```
x = 30
while (x > 0) {
  x --;
}
```

6. Write a conditional expression in the bracket so that NO INFINITE LOOP is created.

> a.
```
y = 20
while ( y <= 100> ) {
  y++;
}
```

> b.
```
y = 0
while ( y >= -50 ) {
  y -= 5;
}
```

7. What is a counter? What is an accumulator? What are they used for?

8. What for loop would add the integers from 3 to 10 inclusive?

9. Use a break statement in an infinite loop to prompt the user to enter a single letter. If they don't, keep asking them until they do.

10. Write a loop that logs the numbers 0 to 4 to the console.
    let i = 0;
    while (i <= 4) {
      console.log(i);
      i++;
    }

11. Write a loop that logs the numbers 5 to 15 to the console.
    let i = 5;
    while (i <= 15) {
      console.log(i);
      i++;
    }

12. Write a loop that logs the even numbers from 0 to 10 to the console.
    let i = 0;
    while (i <= 10) {
      console.log(i);
      i+=2;
    }

13. Write a loop that logs the odd numbers from 5 to 15 to the console.
    let i = 5;
    while (i <= 15) {
      console.log(i);
      i+=2;
    }

14. Write a loop that logs the numbers from 10 down to 0 to the console.
    let i = 10;
    while (i >= 0) {
      console.log(i);
      i--;
    }

15. Write a loop that logs the numbers from 10 down to 0, skipping over the number 5, to the console.
    let i = 10;
    while (i >= 0) {
      if (i!= 5) {
      console.log(i);}
      i--;
    }

16. Write a loop that logs the numbers from 1 to 100 to the console. For numbers divisible by 3, log "Fizz" instead of the number. For numbers divisible by 5, log "Buzz" instead of the number. For numbers divisible by both 3 and 5, log "FizzBuzz" instead of the number.
    let i = 1;
    while (i <= 100) {
      if (i%3 == 0 && i%5) {
      console.log("FizzBuzz");
      } else if (i%5 == 0) {
      console.log("Buzz");
      } else if (i%3 == 0) {
      console.log("Fizz");
      } else {
        console.log(i);
      }
      i++;
    }

