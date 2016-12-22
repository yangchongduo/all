import java.io.*;

public class Employee{
   String name;
   int age;
   String designation;
   double salary;
// 每个类都至少有一个构造器
   public Employee(String name){
      this.name = name;
   }
// es6 好像也是可以直接 作的
   public void empAge(int empAge){
      age =  empAge;
   }

   public void empDesignation(String empDesig){
      designation = empDesig;
   }

   public void empSalary(double empSalary){
      salary = empSalary;
   }

   public void printEmployee(){
      System.out.println("name:"+ name );
      System.out.println("age:" + age );
      System.out.println("designation:" + designation );
      System.out.println("salary:" + salary);
   }
}