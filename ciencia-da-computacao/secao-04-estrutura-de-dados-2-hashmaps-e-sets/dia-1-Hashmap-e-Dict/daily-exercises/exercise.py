class Hierarchy:
    def __init__(self, k):
        self.subordinates = {}
        self.scores = {}
        self.k = k
        self.immediate_boss = {}

    def add_person(self, boss, person):
        if not boss:
            self.subordinates[person] = []
            self.scores[person] = 1
            self.immediate_boss[person] = None
            return

        self.scores[boss] += 1
        self.immediate_boss[person] = boss

        if len(self.subordinates[boss]) < self.k:
            self.subordinates[boss].append(person)
            self.subordinates[person] = []
            self.scores[person] = 1
            self.immediate_boss[person] = boss
        else:
            self.add_person(self.subordinates[boss][0], person)

    def get_score(self, person):
        return self.scores[person]

    def get_immediate_boss(self, person):
        return self.immediate_boss[person]
