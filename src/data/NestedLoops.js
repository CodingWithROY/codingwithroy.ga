import React from 'react'
import Navbar from '../components/Navbar'
import Page from '../components/Page'
import Sidebar from '../components/Sidebar'

const NestedLoops = () => {
  return (
    <>
    <Navbar/>
    <Sidebar/>
        <div className="dataContent">
                <h1 className="heading text-5xl text-black font-bold py-7 underline">Nested loops</h1>
                <div className="explain">
                    <div className="pb-4" id="defination_token">
                        <div className="explain tracking-wide">
                            A loop within another loop is called nested loop. C programming language supports nesting of one loop inside another
                        </div>
                    </div>
                    <div className="py-4" id="keyword">
                        <div className="explain tracking-wide ">
                            <p>Syntax of nested loop</p>
                            <pre className="line-numbers rounded-xl">
                                <code className={`language-c`}>
                                    {`outer_loop  
{
    inner_loop
{
    // Inner loop statement/s
}
  // Outer loop statement/s
}  `}
                                </code>
                            </pre>
                        </div>
                    </div>
                    <div className="py-4" id="imp_ques_1">
                        <h2 className="heading2 text-3xl text-black font-semibold py-2">
                            Important Questions
                        </h2>
                        <div className="explain tracking-wide">
                            <div className="pt-2">
                                <p className="font-semibold text-lg">Q1. C program to print multiplication table from 1 to 5.</p>
                                <p>Ans.
                                    <div className="explain tracking-wide">
                                        <pre className="line-numbers rounded-xl">
                                            <code className={`language-c`}>
                                                {`#include<stdio.h>
int main()
{
   int j,i,n;

   printf("Input upto the table number starting from 1 : ");
   scanf("%d",&n);

   printf("Multiplication table from 1 to %d \\n",n);
   for(i=1;i<=10;i++)
   {
     for(j=1;j<=n;j++)
     {
	    printf("%dx%d = %d, ",j,i,i*j);
      }
     printf("\\n");
    }
}`}
                                            </code>
                                        </pre>
                                    </div>
                                </p>
                            </div>
                            <div className="pt-2">
                                <p className="font-semibold text-lg">Q2. Display the pattern (lower triangular matrix)</p>
                                <p>Ans.
                                    <div className="explain tracking-wide">
                                        <pre className="line-numbers rounded-xl">
                                            <code className={`language-c`}>
                                                {`#include<stdio.h>
int main()
{
    for (int i = 0; i < 6; i++)
    {
        printf("\\n");
        for (int k = 0; k < i; k++)
        {
            printf("\tx");
        }
        printf("\\n");
    }
    return 0;
}`}
                                            </code>
                                        </pre>
                                    </div>
                                </p>
                            </div>
                            <div className="pt-2">
                                <p className="font-semibold text-lg">Q3. Display the pattern (upper triangular matrix)</p>
                                <p>Ans.
                                    <div className="explain tracking-wide">
                                        <pre className="line-numbers rounded-xl">
                                            <code className={`language-c`}>
                                                {`#include<stdio.h>
int main()
{
    // please send me this code at contact.royad@gmail.com

    return 0;
}`}
                                            </code>
                                        </pre>
                                    </div>
                                </p>
                            </div>
                            <div className="pt-2">
                                <p className="font-semibold text-lg">Q4. Display the pattern (fully square matrix )</p>
                                <p>Ans.
                                    <div className="explain tracking-wide">
                                        <pre className="line-numbers rounded-xl">
                                            <code className={`language-c`}>
                                                {`#include<stdio.h>
int main()
{
    for (int i = 5; i > 0; i--)
    {
        printf("\\n");
        for (int k = 5; k > 0; k--)
        {
            printf("\\n");
        }
        for (int k = 5; k > 0; k--)
        {
            printf("\tx");
        }  
    }
    return 0;
}`}
                                            </code>
                                        </pre>
                                    </div>
                                </p>
                            </div>
                            <div className="pt-2">
                                <p className="font-semibold text-lg">Q5. Addition, subtraction and Multiplication of matrix</p>
                                <p>Ans.
                                    <div className="explain tracking-wide">
                                        <pre className="line-numbers rounded-xl">
                                            <code className={`language-c`}>
                                                {`#include<stdio.h>
int main()
{
    int arr1[2][2];
    int arr2[2][2];
    int arr3[2][2];
    int arr4[2][2];
    int arr5[2][2];
    int sum[2][2];

    printf("\\nEnter Matrix 1\\n");
    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 2; j++)
        {
            printf("Enter vale of row %d and column %d : ", i, j);
            scanf("%d", &arr1[i][j]);
        }
    }

    printf("\\nEnter Matrix 2\\n");
    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 2; j++)
        {
            printf("Enter vale of row %d and column %d : ", i, j);
            scanf("%d", &arr2[i][j]);
        }
    }

    printf("\\nSum of matrix is");
    for (int i = 0; i < 2; i++)
    {
        printf("\\n");
        for (int j = 0; j < 2; j++)
        {
            arr3[i][j] = arr1[i][j] + arr2[i][j];
            printf("%d\t", arr3[i][j]);
        }
    }

    printf("\\n\\nDiff of matrix is");
    for (int i = 0; i < 2; i++)
    {
        printf("\\n");
        for (int j = 0; j < 2; j++)
        {
            arr4[i][j] = arr1[i][j] - arr2[i][j];
            printf("%d\t", arr4[i][j]);
        }
    }

    printf("\\n\\nMultiplication of matrix is");
    for (int i = 0; i < 2; i++)
    {
        printf("\\n");
        for (int j = 0; j < 2; j++)
        {
            sum[i][j] = 0;
            for (int k = 0; k < 2; k++)
            {
                sum[i][j] += arr1[i][k] * arr2[k][j];
            }

            printf("%d\t", sum[i][j]);
        }
    }

    return 0;
}`}
                                            </code>
                                        </pre>
                                    </div>
                                </p>
                            </div>
                            <div className="pt-2">
                                <p className="font-semibold text-lg">Q6. Lenght of Array</p>
                                <p>Ans.
                                    <div className="explain tracking-wide">
                                        <pre className="line-numbers rounded-xl">
                                            <code className={`language-c`}>
                                                {`#include<stdio.h>
int main()
{
    int a[10];

    for (int i = 0; i < 5; i++)
    {
        printf("Enter %d index element of array : ", i);
        scanf("%d", &a[i]);
    }

    int count = 0;
    for (int i = 0; i < 5; i++)
    {
        count += 1;
    }
    printf("\\n%d\\n", count);

    return 0;
}`}
                                            </code>
                                        </pre>
                                    </div>
                                </p>
                            </div>
                            <div className="pt-2">
                                <p className="font-semibold text-lg">Q7. Linear Search in array</p>
                                <p>Ans.
                                    <div className="explain tracking-wide">
                                        <pre className="line-numbers rounded-xl">
                                            <code className={`language-c`}>
                                                {`#include<stdio.h>
int main()
{
    int array[10];
    int num;
    ;
    int is_found = 0;

    for (int i = 0; i < 10; i++)
    {
        printf("Enter %d index element of array : ", i);
        scanf("%d", &array[i]);
    }

    printf("Enter the element which you want to search : ");
    scanf("%d", &num);

    for(int i = 0; i< 10;i++){
        if(array[i] == num){
            is_found = i;
        }
    }

    if(is_found == 0){
        printf("Not found");
    }
    else{
        printf("Element is at %d index",is_found);
    }

    return 0;
}`}
                                            </code>
                                        </pre>
                                    </div>
                                </p>
                            </div>
                            <div className="pt-2">
                                <p className="font-semibold text-lg">Q8. Bubble sort in array</p>
                                <p>Ans.
                                    <div className="explain tracking-wide">
                                        <pre className="line-numbers rounded-xl">
                                            <code className={`language-c`}>
                                                {`#include<stdio.h>
int main()
{
    int array[] = {4,10,2,5,6,1,4, 15, 19, 14, 20};

    int length = sizeof(array)/sizeof(array[0]);
    printf("Old \\n");
    for (int i = 0; i < length; i++){
        printf("\t%d",array[i]);
    }

    int temp = 0;
    for(int i = 0; i < length; i++){
        for (int j = i+1; j < length; j++)
        {
            if(array[i] > array[j]){
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }

    printf("\\nNew \\n");
    for (int i = 0; i < length; i++)
    {
        printf("\t%d",array[i]);
    }

    return 0;
}`}
                                            </code>
                                        </pre>
                                    </div>
                                </p>
                            </div>
                            <div className="pt-2">
                                <p className="font-semibold text-lg">Q8. Armstrong number using loop</p>
                                <p>Ans.
                                    <div className="explain tracking-wide">
                                        <pre className="line-numbers rounded-xl">
                                            <code className={`language-c`}>
                                                {`#include<stdio.h>
int main(){
    int num,a ,sum=0;
    printf("Enter a number ");
    scanf("%d",&num);
    for (int i =num; i >0; i=i/10)
    {
        a=i%10;
        sum=sum+(a*a*a);
    }
  
    if (sum==num)
    {
        printf("The number is armstrong number");

    } else {
        printf("The number is not armstrong number");
    }
    return 0;

}`}
                                            </code>
                                        </pre>
                                    </div>
                                </p>
                            </div>
                            <div className="pt-2">
                                <p className="font-semibold text-lg">Q9. Print prime numbers upto n</p>
                                <p>Ans.
                                    <div className="explain tracking-wide">
                                        <pre className="line-numbers rounded-xl">
                                            <code className={`language-c`}>
                                                {`#include<stdio.h>
int main()
{
    int user_input, count;

    printf("Enter last digit : ");
    scanf("%d", &user_input);

    for (int i = 1; i <= user_input; i++)
    {
        count = 0;
        for (int j = 1; j <= user_input; j++)
        {
            if (i % j == 0)
            {
                count++;
                printf("Inside if %d \\n", count);
            }
        }
        if (count == 2)
        {
            printf("\t%d", i);
        }
    }

    return 0;
}`}
                                            </code>
                                        </pre>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Page previous={`looping`} next={`jumping`} />
    </>
  )
}

export default NestedLoops