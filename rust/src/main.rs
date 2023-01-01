fn main() {
    println!("{}", max_sub_array(vec![-2, 1, -3, 4, -1, 2, 1, -5, 4]));
    println!("{}", max_sub_array(vec![1]));
    println!("{}", max_sub_array(vec![5, 4, -1, 7, 8]));
    println!("{}", max_sub_array(vec![-1]));
}

fn max_sub_array(nums: Vec<i32>) -> i32 {
    let mut max = nums[0];
    let mut sum = 0;
    for i in 0..nums.len() {
        sum += nums[i];
        if sum > max {
            max = sum;
        }
        if sum < 0 {
            sum = 0;
        }
    }
    max
}
