import unittest
import answer

class TestLast(unittest.TestCase):
    def test_prints_total(self):
        actual = answer.total_grades(["2\n", "2\n", "3\n"])
        self.assertEqual(actual, 5)

    def test_handles_empty(self):
        actual = answer.total_grades([])
        self.assertEqual(actual, "Empty")

    def test_handles_negative(self):
        actual = answer.total_grades(["3\n", "15\n", "22\n", "-10"])
        self.assertEqual(actual, 37)

if __name__ == '__main__':
    unittest.main()
