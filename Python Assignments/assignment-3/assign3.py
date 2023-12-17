import random
low = 1
high = 50
correctAnswer = random.randint(low, high)
for x in range(5):
    guessNum = int(input(f"Guess a number ({low}-{high}): "))
    if guessNum >= low and guessNum <= high:
        if correctAnswer == guessNum:
            print("---------- Result ----------")
            print(f"Correct Answer is: {correctAnswer}")
            print("You Win!!!")
            break
        elif correctAnswer > guessNum:
            print("HINT: Correct Answer is Greater!!!")
        else:
            print("HINT: Correct Answer is Smaller!!!")

        if x == 4:
            print("---------- Result ----------")
            print(f"Correct Answer is: {correctAnswer}")
            print("You Lose!!!")
        else:
            print(f"You have {4-x} attempts left!!!")
    else:
        print(f"ALERT!!! Guess a number between {low}-{high}!!!")