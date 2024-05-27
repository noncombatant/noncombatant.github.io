#include <errno.h>
#include <stdio.h>
#include <stdlib.h>
#include <arpa/inet.h>

#define ArraySize(a) (sizeof((a)) / sizeof((a)[0]))

static struct in_addr ParseAddress(const char* string) {
  struct in_addr address;
  if (!inet_aton(string, &address)) {
    fprintf(stderr, "Could not parse '%s'\n", string);
    exit(1);
  }
  return address;
}

static void PrintSerializations(const char* serialized) {
  const struct in_addr deserialized = ParseAddress(serialized);
  const uint8_t* bytes = (uint8_t*)&deserialized;
  const char* reserialized = inet_ntoa(deserialized);
  printf("%-15s  0x%02hhX%02hhX%02hhX%02hhX    %-15s\n", serialized, bytes[0],
         bytes[1], bytes[2], bytes[3], reserialized);
}

int main(int count, char* arguments[]) {
  const char* serialized_forms[] = {
      "222.173.190.239", "0xDEADBEEF",    "033653337357",
      "222.11386607",    "222.173.48879", "127.0.0.1",
      "0x7F000001",      "127.1",         "127.0.1",
  };

  printf("%-15s  %-10s  %-15s\n", "Serialized", "Deserialized", "Reserialized");
  for (size_t i = 0; i < ArraySize(serialized_forms); ++i) {
    PrintSerializations(serialized_forms[i]);
  }

  for (int i = 1; i < count; ++i) {
    PrintSerializations(arguments[i]);
  }
}
