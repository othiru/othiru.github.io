import random

def loseResult(x, correctAnswer):
    if x == 4:
        print("\n---------- Result ----------")
        print(f"Correct Answer is: {correctAnswer}")
        print("You Lose!!!")
        restart = True
    else:
        print(f"You have {4 - x} attempts left!!!")


def gameLoop():
    low = 1
    high = 50
    correctAnswer = random.randint(low, high)
    restart = False
    print("You have 5 attempts to play the game!!!")
    for x in range(5):
        try:
            guessNum = int(input(f"Guess a number ({low}-{high}): "))
            if low <= guessNum <= high:
                if correctAnswer == guessNum:
                    print("---------- Result ----------")
                    print(f"Correct Answer is: {correctAnswer}")
                    print("You Win!!!")
                    restart = True
                    break
                elif correctAnswer > guessNum:
                    print("HINT: Correct Answer is Greater!!!")
                else:
                    print("HINT: Correct Answer is Smaller!!!")

                loseResult(x, correctAnswer)
            else:
                print(f"ALERT!!! Guess a number between {low}-{high}!!!")
                loseResult(x, correctAnswer)
        except ValueError:
            print("ALERT!!! Wrong Entry!!!")
            loseResult(x, correctAnswer)


    while restart:
        restartQues = input("Do you want to play again (Yes/No)? ")

        if restartQues.lower() == "yes":
            gameLoop()
        elif restartQues.lower() == "no":
            print("Thank you for playing the game!!!")
            exit()
        else:
            print("ALERT!!! Wrong Choice!!!")


gameLoop()



