import java.io.*;
public class EmployeeTest{

   public static void main(String args[]){
// 使用其他的类 就需要使用 new Employee
      Employee empOne = new Employee("RUNOOB1");
      Employee empTwo = new Employee("RUNOOB2");
      empOne.empAge(26);
      empOne.empDesignation("cccccccc");
      empOne.empSalary(1000);
      empOne.printEmployee();

      empTwo.empAge(21);
      empTwo.empDesignation("xxx");
      empTwo.empSalary(500);
      empTwo.printEmployee();
   }
}