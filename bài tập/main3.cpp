#include <iostream>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main(int argc, char** argv) {
	int a;
	int b;
	int c;
	printf("a=");
	scanf("%d",&a);
	printf("b=");
	scanf("%d",&b);
	printf("c=");
	scanf("%d",&c);
	printf("%d + %d * %d = %d",a,b,c, a+b*c);
	return 0;
} 
