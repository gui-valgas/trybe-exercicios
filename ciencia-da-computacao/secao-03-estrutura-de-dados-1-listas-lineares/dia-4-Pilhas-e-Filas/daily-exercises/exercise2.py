from linked_list import LinkedList


class Stack:
    def __init__(self):
        self._data = LinkedList()

    def push(self, value):
        self._data.insert_last(value)

    def pop(self):
        return self._data.remove_last()

    def peek(self):
        return self._data.get_element_at(len(self._data))

    def is_empty(self):
        return not len(self._data)
