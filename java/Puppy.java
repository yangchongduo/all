public class Puppy{
   int puppyAge;// 声明 一个变量 是int
   public Puppy(String name){ // 这个是构造器 构造器有很多
      System.out.println("dog name is : " + name );
   }

   public void setAge( int age ){// void 是一个函数
       puppyAge = age;
   }

   public int getAge( ){
       System.out.println("dog name is  : " + puppyAge );
       return puppyAge;
   }

   public static void main(String []args){

      Puppy myPuppy = new Puppy( "tommy" );


      myPuppy.setAge( 2 );

      myPuppy.getAge( );

      System.out.println(myPuppy.puppyAge );
   }
}