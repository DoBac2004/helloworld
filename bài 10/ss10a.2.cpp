#include <iostream>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main(int argc, char** argv) {
	int cnt, cnt1;
	cnt=cnt1=0;
	do{
		printf("\n enter a number:");
		scanf("%d",&cnt);
		printf("no. is %d",cnt);
		cnt1++;		
	}while(cnt!=0);
	printf("\n the total numbers entered were %d",--cnt1);
	return 0;
}
