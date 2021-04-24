# Part 1a
1. values added: 20
2. final result: 20
3. values added: 20
4. ReferenceError: result is not defined. Because `result` is defined with the `let` keyword, its scope only exists in the if block. Thus, it throws a reference error when it attempts to refer back to the same variable from outside the if block
5. TypeError: Assignment to constant variable. Because `result` is defined with `const` keyword, it throws an error when it is modified in line 7. Hence the error
6. Line 13 does not execute because line 7 throws an error

# Part 1b
1. Prints the then value of `i` to the console which is `3`
2. Prints the list `discounted` to the console which is `[50,100,150]`
3. Prints the then value of `finalPrice` to the console which is `150`
4. This function returns `[50,100,150]` which is the list `discounted` containing the discounted prices as per the arguments. The function applies the `discount` to each price in `price`, then rounds it down to the nearest two decimals and stores this `finalPrice` in the `discounted` list which is returned at the end. 
5. ReferenceError: i is not defined. Line 12 attempts to access the variable `i` but since `i` is defined using the keyword `let` inside the for loop block, it is not defined outside the loop. Hence, the reference error
6. ReferenceError: discountedPrice is not defined. Again, line 13 attempts to access a variable `discountedPrice` (defined using `let` inside for loop) whose scope lies within the for loop block. 
7. Line 14 prints `150`, the then value of `finalPrice`. It is the final discounted price of the last last proce in the `prices` list obtained after applying the discount and rounding it down. 
8. The function returns `[50,100,150]` which is the list `discounted` containing the final prices for each price in `prices` obtained after applying teh discount and rounding it down. 
9. ReferenceError: i is not defined. Line 11 attempts to access the variable `i` but since `i` is defined using the keyword `let` inside the for loop block, it is not defined outside the loop. Hence, the reference error.
10. Line 12 prints the value stored in `length` which is `3`. This value is equal to the length of the input `prices` list. 
11. This function returns `[50,100,150]` which is the list of discounedt prices `discounted`. Though in this case it does not round the discounted prices down to two decimal places, it does not affect the output for this set of input. 
12. Answers:
    A. `student.name`
    B. `student['Grad Year']`
    C. `student.greeting()`
    D. `student['Favorite Teacher'].name`
    E. `student.courseLoad[0]`

13. Arithmetic
    A. '32'
    B. 1
    C. 3
    D. '3null'
    E. 4
    F. 0
    G. '3undefined'
    H. NaN

14. Comparison
    A. true
    B. false
    C. true
    D. false
    E. false
    F. true

15. The `===` operator checks for equality without type conversion of any of its operands. However, if `==` operator has operands of different types, it converts them to numbers and then compares them. 

For example, `2 == '2'` is `true` but `2 === '2'` is false because `2` and `'2'` are of different types. 

17.  The result will be `[2,4,6]`. Overall role of the function `modifyArray` is it takes an `array` and `callback` and then applies `callback` function on each item in `array` and then stores the applied value in a new array.

In detail, the for loop in line 3 iterates through each element in the list `array`. It then applies `callback` function on the array item and pushes that item onto the new array. In this example, it applies the function which doubles its input. Therefore, every element of the list returned is the double of the corresponding element in the input array `array`. 

19. Output (Note: 2 is printed after about 1s after 3 is printed):
1
4
3
2
