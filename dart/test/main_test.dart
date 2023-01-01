import 'package:test/test.dart';
import '../bin/main.dart';

void tester(List<int> nums, int exp) =>
    test("maxSubArray($nums)", () => expect(maxSubArray(nums), equals(exp)));
void main() {
  group("Basic tests", () {
    tester([-2, 1, -3, 4, -1, 2, 1, -5, 4], 6);
    tester([1], 1);
    tester([5, 4, -1, 7, 8], 23);
    tester([-1], -1);
  });
}
