const qualifiers = [
  "Variadic",
  "Polymorphic",
  "Monomorphic",
  "Semi-const",
  "Non-const",
  "Mutated",
  "Amoral",
  "R-valued",
  "L-valued",
  "GL-valued",
  "X-valued",
  "PR-valued",
  "Amorphous",
  "Virtualized",
  "Virtual",
  "Fixed-size",
  "Mostly-mutable",
  "Nearly-mutable",
  "Remutable",
  "Inline",
  "Register",
  "Implicit",
  "Agonistic",
  "Antagonistic",
  "Strongly Monadic",
  "Weakly Monadic",
  "Untyped",
  "Purely Functional",
  "Aspect-oriented",
  "Haskell-compatible",
  "Polite",
  "Permeable",
  "Domain-specific",
  "Optimal",
  "Extrinsic",
  "Static",
  "Dynamic",
  "Runtime",
  "Non-local",
  "Non-monotonic",
  "Zero-cost",
  "Type-like",
  "Non-virtual",
  "Malleable",
  "Fungible",
  "Abstract",
  "Unobservable",
  "Vague",
  "Algebraic",
  "Zegnatronic",
  "Quiescent",
  "Memoized",
  "Tagged",
  "Concrete",
  "Undefined",
  "User-friendly",
  "User-defined",
  "Well-defined",
  "Recursive",
  "Modern",
  "Temporal",
  "Signednessless",
  "Genericized",
  "Constexpr",
  "Type-safe",
  "Memory-safe",
  "Ranged",
  "Deranged",
  "Overloadable",
  "Multi-paradigmatic",
  "Intrinsic",
  "Lexical",
  "Automatic",
  "Tail-recursive",
  "Mutually Recursive",
  "Higher-order",
  "Vectorized",
  "Reified",
  "Category-theoretic",
  "Throwable",
]

const adjectiveyNouns = [
  "Type",
  "Monad",
  "Statement",
  "Expression",
  "Qualifier",
  "Storage",
  "Unicode",
  "Syntactic",
  "Templated",
  "Variable",
  "Constant",
  "Inline",
  "Move",
  "Elision",
  "Erasure",
  "Reification",
  "Diacritic",
  "Pragma",
  "Lambda",
  "Iterator",
  "Behavior",
  "Functor",
  "Qualified",
  "Vector",
  "Map",
  "Nothrow",
]

const nouns = [
  "Literals",
  "Expressions",
  "Numerics",
  "Polynomials",
  "Serializers",
  "Templates",
  "Statements",
  "Keywords",
  "Operators",
  "Generics",
  "Meta-programs",
  "Initializers",
  "Types",
  "Intrinsics",
  "Specifiers",
  "Virtuals",
  "Extrinsics",
  "Generators",
  "Morphemes",
  "Monads",
  "Semantics",
  "Monoids",
  "Sequence Points",
  "Objects",
  "Instances",
  "Functions",
  "Methods",
  "Classes",
  "Structs",
  "Parsers",
  "References",
  "L-values",
  "GL-values",
  "PR-values",
  "X-values",
  "Temploids",
  "Closures",
  "Functors",
  "Enums",
  "Unions",
  "Option Types",
  "Tuples",
  "Variants",
  "Lambdas",
  "Ranges",
  "Iterators",
  "Overloads",
  "Constexprs",
  "Type Qualifiers",
  "Syntagms",
  "Lexemes",
  "Categories",
  "Vulnerabilities",
  "Errors",
  "Exceptions",
  "Bugs",
]

const randomElement = function (a) {
  return a[Math.floor(Math.random() * a.length)]
}

const setSingleTextChild = function (element, text) {
  (element.childNodes[0] || element.appendChild(document.createTextNode(""))).data = text
}

const regenerate = function () {
  setSingleTextChild(version, "C++" + (26 + Math.floor(Math.random() * 10) * 3))
  setSingleTextChild(horror, randomElement(qualifiers) + " " + randomElement(adjectiveyNouns) + " " + randomElement(nouns))
  console.log("eep")
}

tryAgain.addEventListener("click", regenerate)
regenerate()
