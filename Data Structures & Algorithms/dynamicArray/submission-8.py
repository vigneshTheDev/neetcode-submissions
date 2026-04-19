class DynamicArray:
    arr = [];
    capacity = 1;
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.arr = []

    def get(self, i: int) -> int:
        return self.arr[i]

    def set(self, i: int, n: int) -> None:
        self.arr[i] = n

    def pushback(self, n: int) -> None:
        if (len(self.arr) == self.capacity):
            print(len(self.arr), self.capacity)
            self.resize()
        print('Inside pushback')
        print(self.arr)
        print(len(self.arr), self.capacity)
        self.arr.append(n)

    def popback(self) -> int:
        lastIndex = len(self.arr) - 1
        result = self.arr[lastIndex]
        del self.arr[lastIndex]
        return result

    def resize(self) -> None:
        self.capacity *= 2

    def getSize(self) -> int:
        return len(self.arr)
    
    def getCapacity(self) -> int:
        return self.capacity