class Bubble{
    public static void bubbleSort(int a[]){
        for(int i=0; i < a.length; i++){
            boolean swapped = false;
            for(int j=0; j < a.length-i-1; j++){
                if(a[j] > a[j + 1]){
                    int temp = a[j];
                    a[j] = a[j + 1];
                    a[j + 1] = temp;
                    swapped = true;
                }
            }
            if(!swapped)
            break;
        }
    }
    public static void main(String[] args) {
        int a[] = {4, 6, 1, 3, 8, 10, 9, 5, 2};
        bubbleSort(a);

        //print the array
        for(int i=0; i < 10; i++){
            System.out.println(a[i] + " ");
        }
       System.out.println("");
    }
}

/* Optimized Version of Bubble Sort

To check if the array is sorted or not, we can check if any element is getting swapped in the iteration or not. 
If none of the elements are getting swapped, then it means that the array is sorted and we can stop the process of Bubble Sort. 
So, let's use a variable to keep the record of swapping and modify the previous code according to it. 

Here, we are using an extra variable 'swapped' to store whether we are swapping in the middle of the algorithm or not. 
We are setting the 'swapped' value to true after swapping something - swapped = TRUE and at last,
we are checking if something was swapped or not in the process - if not(swapped), 
then we are breaking the loop if nothing was swapped and hence meaning that the loop is already sorted.
*/