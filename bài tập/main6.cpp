#include <iostream>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main(int argc, char** argv) {
	int a,b,c;
	int (a+b+c)/3;
	printf("a=");
	scanf("%d",&a);
	printf("b=");
	scanf("%d",&b);
	printf("c=");
	scanf("%d",&c);
	printf("(%d+%d+%d)/3",a,b,c,(a+b+c)/3);
	if((a+b+c)/3>8){
		printf("xep loai gioi");
	}
	if((a+b+c)/3>6){
	    printf("xep loai kha");
	}
    if((a+b+c)/3<6){
    	printf("xep loai trung binh");
	}
	return 0;
}
