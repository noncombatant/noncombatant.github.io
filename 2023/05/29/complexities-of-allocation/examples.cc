#include <cstdio>
#include <iostream>
#include <limits>
#include <memory>
#include <thread>

using namespace std;

namespace {

static constexpr size_t MESSAGE_SIZE = 100;

void caller_acquires_caller_releases_implicitly() {
  // Acquire `message` on the stack:
  char message[MESSAGE_SIZE];

  // Callees `snprintf` and `cout` use `message`:
  snprintf(message, MESSAGE_SIZE, "Hello from %s", __PRETTY_FUNCTION__);
  cout << message << "\n";

  // `message` is implicitly released here upon `return`.
}

void caller_acquires_caller_releases_explicitly() {
  // Acquire `message` on the heap:
  char* message = new char[MESSAGE_SIZE];

  // Callees `snprintf` and `cout` use `message`:
  snprintf(message, MESSAGE_SIZE, "Hello from %s", __PRETTY_FUNCTION__);
  cout << message << "\n";

  // Without this explicit release, `message` would leak:
  delete[] message;
}

void callee_acquires_caller_releases_implicitly() {
  // Callee `string` allocates an internal buffer:
  string message = "Hello from ";

  // Callee `string` may need to grow the buffer:
  message += __PRETTY_FUNCTION__;
  cout << message << "\n";

  // `~string` is implicitly called here, and `delete[]`s the internal buffer. 
}

void callee_acquires_caller_releases_explicitly() {
  // A handle to the storage that `asprintf` will allocate:
  char* message;

  // Callee `asprintf` allocates and sets `message` to point to it:
  asprintf(&message, "Hello from %s", __PRETTY_FUNCTION__);
  cout << message << "\n";

  // Without this explicit release, `message` would leak:
  free(message);
}

struct Thing {
  Thing(int legs) {
    legs_ = legs;
    cout << "Created `Thing` with " << legs << " legs.\n";
  }

  ~Thing() { cout << "Wow! I'm being deleted! This is great.\n"; }

  void report() { cout << "Yep, still got " << legs_ << " legs.\n"; }

  int legs_;
};

void use_thing(shared_ptr<Thing> t) {
  // At this point, we hold a reference to a `Thing`, and `t`'s reference count
  // for it is incremented.

  t->report();
  cout << "use_count: " << t.use_count() << "\n";

  // `t` goes out of scope, so we lose our reference to the `Thing`, and
  // therefore `t`'s reference count is decremented.
}

void anyone_acquires_anyone_releases_when_ref_count_is_0(
    shared_ptr<Thing> thing) {
  // At this point, we hold a reference to a `Thing`, and `thing`'s reference
  // count for it is incremented.

  // And we give each of 3 `thread`s a reference to `thing`, as well.
  thread t1(use_thing, thing);
  thread t2(use_thing, thing);
  thread t3(use_thing, thing);
  t1.join();
  t2.join();
  t3.join();

  // When the `thread`s go out of scope, their `~thread`s are called, and they
  // drop their references to `thing`.
}

}  // namespace

int main() {
  // A `Thing` and a `shared_ptr` to it are born.
  auto thing = make_shared<Thing>(17);

  // Let's do some other stuff:
  caller_acquires_caller_releases_implicitly();
  caller_acquires_caller_releases_explicitly();
  callee_acquires_caller_releases_implicitly();
  callee_acquires_caller_releases_explicitly();

  // Oh yeah, we should do something with `thing`:
  anyone_acquires_anyone_releases_when_ref_count_is_0(thing);

  // When `thing` goes out of scope, `~shared_ptr` is implicitly called,
  // decrementing the reference count to 0, and so it calls `~Thing`.
}
