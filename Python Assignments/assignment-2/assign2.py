with open("input.txt") as file1:
    x = file1.read()
    if len(x) == 0:
        print("File is empty!!!")
    wordList = x.split("\n")

searchWords = ["Python", "C", "OOP", "Hello", "Java"]
print("Word List:", wordList)
print("Search List:", searchWords)
print("---------- Result ----------")
if len(searchWords) > 0:
    for word in searchWords:
        print(word, "->", wordList.count(word))
else:
    print("There's no words for searching")
