/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  for (let index = 0; index < nums1.length; index++) {
    if (index >= m) {
      nums1[index] = nums2[index - m];
    }
  }
  nums1.sort((a, b) => a - b); 
};