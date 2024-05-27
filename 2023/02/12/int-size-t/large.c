#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
  size_t gib = 1 << 30;
  size_t ten_gib = 10 * gib;
  printf("About to allocate %zu bytes\n", ten_gib);
  char* large = malloc(ten_gib);
  memset(large, 'A', ten_gib);
  printf("The last byte is: %c\n", large[ten_gib - 1]);
}
