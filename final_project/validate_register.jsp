<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <script src="https://kit.fontawesome.com/c85d62c8b6.js"></script>
  <title>Web programming</title>
  <link rel="stylesheet" href="../css/style.css">
</head>

<body>

<%@ page import ="java.sql.*" %>
<% String firstName="";
    try{
    	
        String username = request.getParameter("username");   
        String password = request.getParameter("password");
        firstName = request.getParameter("firstname");
        Class.forName("com.mysql.cj.jdbc.Driver");  // MySQL database connection
        Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/website_info?" + "user=root&password=root");
        
        String sql = "insert into testtable(user_name,password,first_name)values(?,?,?)";
        PreparedStatement ps = null;
        ps = conn.prepareStatement(sql);
        ps.setString(1,username);
        ps.setString(2, password);
        ps.setString(3, firstName);
        
        int i=ps.executeUpdate();
                                   
        if(i==0)  {         
        	firstName="";
        }   
   }
   catch(Exception e){       
       out.println("Something went wrong !! Please try again");  
       response.sendRedirect("registerError.html");
   }      
%>



<div class="wrapper">
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
      <script src="jquery-3.6.0.min.js" type="text/javascript"></script>
      <link rel="stylesheet" href="style.css">
      <script src="script.js" type="text/JavaScript"></script>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  </head>
  <style>
  .bg{
    position: relative;
    text-align: center;
    color: white;
  }
  .centered{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  </style>
  <body>
  <div class="header">
        <h3 style="padding-left:90px;padding-top:15px; color:#002E47">~ SKKU Pomodoro! ~</h3>
      </div>
    <div class="register_page" style="padding-left:300px;padding-top:50px">
    
       <div class="card_main" style="height:500px;width:800px">
        <div class="first_half" style="padding-top:150px">
          <h2>Congratulations!</h2>
          <h4>You have successfully registered, enjoy the SKKU Pomodoro!</h4> <br>
          <button onclick="parent.location='login.html'" type="button" name="button" style="height:60px;width:180px;font-size:14pt;border:2px solid black;border-radius:10px;background-color:white">Login To Your Account</button>
        </div>
        
      </div>
</div>
<!-- wrapper ends -->

</body>

</html>
