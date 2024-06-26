#include <limits.h>
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>

static bool checked_mul(int* result, int x, int y) {
  if (x == 0 || y == 0) {
    *result = 0;
    return false;
  }
  if (x < 0 || y < 0) {
    // You have even more work to do. See e.g.
    // https://github.com/coreutils/gnulib/blob/master/lib/intprops-internal.h#L370
    // for a type-generic macro that handles all cases. `ckd_mul` and the
    // non-standard intrinsics are lookin’ pretty good right about now... 😉
    abort();
  }
  if (INT_MAX / x < y || INT_MAX / y < x) {
    return true;
  }
  *result = x * y;
  return false;
}

int main() {
  int r = 0;
  if (checked_mul(&r, INT_MAX, 2)) {
    printf("INT_MAX * 2 would overflow\n");
  } else {
    printf("Hmm. %d\n", r);
  }

  if (checked_mul(&r, 1000000000, 3)) {
    printf("1000000000 * 3 would overflow\n");
  } else {
    printf("Yay %d\n", r);
  }

  if (checked_mul(&r, INT_MAX, INT_MAX)) {
    printf("max * max would overflow\n");
  } else {
    printf("Yay %d\n", r);
  }
}
