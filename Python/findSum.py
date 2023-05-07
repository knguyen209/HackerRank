def findSum(n):
    multiplesOf3 = (n - 1) // 3
    multiplesOf5 = (n - 1) // 5
    multiplesOf15 = (n - 1) // 15

    sumOf3 = 3 * multiplesOf3 * (multiplesOf3 + 1) // 2 
    sumOf5 = 5 * multiplesOf5 * (multiplesOf5 + 1) // 2  
    sumOf15 = 15 * multiplesOf15 * (multiplesOf15 + 1) // 2  

    return sumOf3 + sumOf5 - sumOf15


print(findSum(10))