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