import time


def func_one(n):
    return [str(num) for num in range(n)]


start_time=time.time()

result=func_one(1000000)

end_time=time.time()

elapsed_time=end_time-start_time

print(elapsed_time)