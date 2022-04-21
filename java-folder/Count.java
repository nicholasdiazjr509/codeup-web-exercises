class Count {
    public static void countingSort(int a[], int outputArray[], int k, int size){
        int[] tempArray = new int[k + 1];

        for(int i = 1; i <= k; i++){
            tempArray[i] = 0;
        }
        for(int i = 1; i <= size; i++){
            tempArray[a[i]] = tempArray[a[i]] + 1;
        }
        for(int i = 1; i <= k; i++){
            tempArray[i] = tempArray[i] + tempArray[i - 1];
        }
        for(int i = size; i >= 1; i--){
            outputArray[tempArray[a[i]]] = a[i];
            tempArray[a[i]] = tempArray[a[i]] - 1;
        }
    }    
    public static void main(String[] args) {
        //array is starting from 1. So, fake element -100 at index 0.
        int a[] = {-100, 4, 8, 1, 3, 10, 9, 2, 7, 5, 6};
        int[] outputArray = new int[11];

        countingSort(a, outputArray, 10, 10); //k is 10. size for function is 10, array from 1 to 10.

        //print array
        for(int i=1; i <= 10; i++){
            System.out.println(outputArray[i] + " ");
        }
        System.out.println("");
    }
}
