import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
public class TryWithResources_Example {
public static void main(String args[]) {

//Getting the connection
String mysqlUrl = "jdbc:mysql://localhost/mydatabase";
System.out.println("Connection established......");
//Registering the Driver
Connection con;

try{
con = DriverManager.getConnection(mysqlUrl, "root", "password");
Statement stmt = con.createStatement(); {
}} catch (SQLException e) {
e.printStackTrace();
}
}
