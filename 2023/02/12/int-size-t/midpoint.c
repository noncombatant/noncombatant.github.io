#include <assert.h>
#include <inttypes.h>
#include <limits.h>
#include <stdio.h>

int main() {
  {
    static_assert(sizeof(unsigned) == sizeof(uint32_t),
                  "Assuming `unsigned` is `uint32_t`");
    printf("32-bit:\n");
    const uint32_t low = UINT_MAX - 2;
    const uint32_t high = UINT_MAX;
    uint32_t mid = (low + high) / 2;
    printf("(%" PRIu32 " + %" PRIu32 ") / 2 = %" PRIu32 "\n", low, high, mid);

    mid = low + ((high - low) / 2);
    printf("%" PRIu32 " + ((%" PRIu32 " - %" PRIu32 ") / 2) = %" PRIu32 "\n",
           low, high, low, mid);
  }

  {
    static_assert(sizeof(size_t) == sizeof(uint64_t),
                  "Assuming `size_t` is `uint64_t`");
    printf("64-bit:\n");
    const uint64_t low = SIZE_T_MAX - 2;
    const uint64_t high = SIZE_T_MAX;
    uint64_t mid = (low + high) / 2;
    printf("(%" PRIu64 " + %" PRIu64 ") / 2 = %" PRIu64 "\n", low, high, mid);

    mid = low + ((high - low) / 2);
    printf("%" PRIu64 " + ((%" PRIu64 " - %" PRIu64 ") / 2) = %" PRIu64 "\n",
           low, high, low, mid);
  }
}
