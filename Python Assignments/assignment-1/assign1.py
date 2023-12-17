class Marks:
    def __init__(self, subject):
        self.subject = subject
        self.marks = float(input(f"Enter marks for {self.subject} (1-100): "))
        self.total = 0
    def checkMarks(self):
        keep_alive = True
        while keep_alive:
            if self.marks >= 0 and self.marks <= 100:
                self.total += self.marks
                return self.marks
            else:
                print(f"ALERT!!! {self.subject} marks should be between 1-100!!!")
                self.marks = float(input(f"Enter marks for {self.subject} (1-100): "))



bangla = Marks("Bangla")
banglaMarks = bangla.checkMarks()
english = Marks("English")
englishMarks = english.checkMarks()
math = Marks("Math")
mathMarks = math.checkMarks()
science = Marks("Science")
scienceMarks = science.checkMarks()

totalMarks = banglaMarks + englishMarks + mathMarks + scienceMarks
average = totalMarks/4

print("---------- Result ----------")
print(f"Bangla: {banglaMarks}")
print(f"English: {englishMarks}")
print(f"Math: {mathMarks}")
print(f"Science: {scienceMarks}")
print(f"CGPA Mark: {average}")
if average >= 0 and average <= 40:
    print("Grade: F")
elif average >= 41 and average <= 60:
    print("Grade: D")
elif average >= 61 and average <= 70:
    print("Grade: C")
elif average >= 71 and average <= 80:
    print("Grade: B")
elif average >= 81 and average <= 90:
    print("Grade: A")
elif average >= 91 and average <= 100:
    print("Grade: A+")





