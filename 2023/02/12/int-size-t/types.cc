#include <stdio.h>
#include <limits>
#include <type_traits>

using namespace std;

int main() {
  constexpr bool is_int_signed = is_signed<int>::value;
  printf("sizeof(int): %zu; signed: %d\n", sizeof(int), is_int_signed);
  printf("largest int value: %d\n", numeric_limits<int>::max());

  constexpr bool is_uint_signed = is_signed<unsigned>::value;
  printf("sizeof(unsigned): %zu; signed: %d\n", sizeof(unsigned), is_uint_signed);
  printf("largest unsigned value: %u\n", numeric_limits<unsigned>::max());

  constexpr bool is_size_t_signed = is_signed<size_t>::value;
  printf("sizeof(size_t): %zu; signed: %d\n", sizeof(size_t), is_size_t_signed);
  printf("largest size_t value: %zu\n", numeric_limits<size_t>::max());
}
