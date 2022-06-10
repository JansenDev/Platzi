def pyramid_sum(lower, upper, margin = 0):
    """Returns the sum of the numbers from lower to upper,
    and outputs a trace of the arguments and return values
    on each call."""
    blanks = " " * margin
    print(blanks, lower, upper) # Print the arguments

    if lower > upper:
        print(blanks, 0) # Print the returned value
        return 0
    else:
        result = lower + pyramid_sum(lower + 1, upper, margin + 4)
        print(blanks, result) # Print the returned value
        return result

pyramid_sum(1, 4)