class DynamicArray:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self._arr = []

    def get(self, i: int) -> int:
        return self._arr[i]

    def set(self, i: int, n: int) -> None:
        self._arr[i] = n

    def pushback(self, n: int) -> None:
        if (len(self._arr) == self.capacity):
            self.resize()
        self._arr.append(n)

    def popback(self) -> int:
        lastIndex = len(self._arr) - 1
        result = self._arr[lastIndex]
        del self._arr[lastIndex]
        return result

    def resize(self) -> None:
        self.capacity *= 2

    def getSize(self) -> int:
        return len(self._arr)
    
    def getCapacity(self) -> int:
        return self.capacity