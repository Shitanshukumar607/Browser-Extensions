// import { TagsDescription } from "./allTags.js";
// console.log(TagsDescription);

const TagsDescription = {
  Array: 1,
  String: 1,
  "Hash Table": 1,
  "Dynamic Programming": 0,
  Math: 1,
  Sorting: 1,
  Greedy: 0,
  "Depth-First Search": 0,
  Database: 0,
  "Binary Search": 1,
  Matrix: 1,
  Tree: 0,
  "Breadth-First Search": 0,
  "Bit Manipulation": 0,
  "Two Pointers": 1,
  "Prefix Sum": 0,
  "Heap (Priority Queue)": 0,
  "Binary Tree": 0,
  Simulation: 0,
  Stack: 0,
  Counting: 0,
  Graph: 0,
  "Sliding Window": 1,
  Design: 0,
  Backtracking: 0,
  Enumeration: 0,
  "Union Find": 0,
  "Linked List": 0,
  "Ordered Set": 0,
  "Number Theory": 0,
  "Monotonic Stack": 0,
  Trie: 0,
  "Segment Tree": 0,
  Bitmask: 0,
  "Divide and Conquer": 0,
  Queue: 0,
  Recursion: 0,
  Combinatorics: 0,
  "Binary Search Tree": 0,
  "Hash Function": 0,
  "Binary Indexed Tree": 0,
  Geometry: 0,
  Memoization: 0,
  "String Matching": 0,
  "Topological Sort": 0,
  "Shortest Path": 0,
  "Rolling Hash": 0,
  "Game Theory": 0,
  Interactive: 0,
  "Data Stream": 0,
  "Monotonic Queue": 0,
  Brainteaser: 0,
  Randomized: 0,
  MergeSort: 0,
  "Doubly-Linked List": 0,
  "Counting Sort": 0,
  Iterator: 0,
  Concurrency: 0,
  "Probability and Statistics": 0,
  Quickselect: 0,
  "Suffix Array": 0,
  "Bucket Sort": 0,
  "Minimum Spanning Tree": 0,
  Shell: 0,
  "Line Sweep": 0,
  "Reservoir Sampling": 0,
  "Strongly Connected Component": 0,
  "Eulerian Circuit": 0,
  "Radix Sort": 0,
  "Rejection Sampling": 0,
  "Biconnected Component": 0,
};


(function () {
  const colorTags = () => {
    console.log("colorTags");

    const allTags = document.querySelectorAll(
      ".inline-flex.items-center.border.px-2\\.5.py-0\\.5.text-xs.font-semibold.transition-colors.focus\\:outline-none.focus\\:ring-2.focus\\:ring-sd-ring.focus\\:ring-offset-2.border-transparent.bg-sd-secondary.text-sd-secondary-foreground.hover\\:bg-sd-secondary\\/80.rounded-full"
    );
    console.log(allTags);

    allTags.forEach((tag) => {
      const tagText = tag.textContent;

      if (TagsDescription[tagText] === 1) {
        tag.classList.remove("bg-sd-secondary");
        tag.style.backgroundColor = "rgb(21 128 61)";
      } else if (TagsDescription[tagText] === 0) {
        tag.style.color = "rgb(220 38 38)";
      } else {
        console.log(tag.textContent);
      }
    });
  };

  window.addEventListener("load", () => {
    setInterval(colorTags, 1000);
  });
})();
