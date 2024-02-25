#include <assert.h>
#include <stdbool.h>
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

static_assert(sizeof(size_t) == 8,
              "This program is written for a 64-bit machine.");

static const size_t kUint32TMax = 0x0ffffffff;

// Avoid the semipredicate problem in the original.
typedef struct {
  uint32_t hit;
  bool valid;
} Result;

static Result binarySearch(uint32_t* a,
                           uint32_t count,
                           uint32_t key,
                           bool correct) {
  if (count == 0) {
    return (Result){.hit = 0, .valid = false};
  }
  uint32_t low = 0;
  uint32_t high = count - 1;

  while (low <= high) {
    uint32_t mid;
    if (correct) {
      mid = low + ((high - low) / 2);
    } else {
      mid = (low + high) / 2;
    }
    uint32_t midVal = a[mid];

    if (midVal < key) {
      low = mid + 1;
    } else if (midVal > key) {
      high = mid - 1;
    } else {
      return (Result){.hit = mid, .valid = true};
    }
  }
  return (Result){.hit = 0, .valid = false};
}

static void do_exhaustive(uint32_t* values, bool correct) {
  for (uint32_t i = 0; i < kUint32TMax; i++) {
    const Result r = binarySearch(values, kUint32TMax, i, correct);
    if (!r.valid) {
      fprintf(stderr, "Could not find %u!\n", i);
      abort();
    }
    if (r.hit != i) {
      fprintf(stderr, "Found %u at the wrong index: %u\n", i, r.hit);
      abort();
    }
    //printf("%d %u %u\n", correct, r.hit, i);
    //fflush(stdout);
  }
}

int main(int count, char* arguments[]) {
  uint32_t* values = calloc(kUint32TMax, sizeof(uint32_t));
  for (uint32_t i = 0; i < kUint32TMax; i++) {
    values[i] = i;
  }
  printf("Created sorted array of `uint32_t` values.\n");

  if (count == 1 || arguments[1][0] == 'c') {
    do_exhaustive(values, true);
  } else {
    do_exhaustive(values, false);
  }
}
