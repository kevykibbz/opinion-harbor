### Sky World Limited - Software Engineering Pre-Interview Task S

The task will involve creating a simple Survey application. The application will allow users to respond to survey questions and view a list of all responses to the survey
questions.

### The task will be split into 3 components:

1. Databases 1
   Using a Relational Database Management System, either MySQL M , Oracle O , Microsoft SQL Server M or Postgres P :
1. Design an Entity Relationship Diagram (ERD) E for the database for the application.
1. Implement the database, name it sky_survey_db s .
1. REST API 2
   Using your preferred language, create a REST API R that connects to your database.
   The API should have the following endpoints:
1. To fetch list of questions
   url: /api/questions
   method: GET G
   response:

```
<questions>
   <question name="full_name" type="short_text" required="yes">
      <text>What is your full name?</text>
      <description>[Surname] [First Name] [Other Names]</description>
   </question>
   <question name="email_address" type="email" required="yes">
      <text>What is your email address?</text>
      <description/>
   </question>
   <question name="description" type="long_text" required="yes">
      <text>Tell us a bit more about yourself</text>
      <description/>
   </question>
   <question name="gender" type="choice" required="yes">
      <text>What is your gender?</text>
      <description/>
      <options multiple="no">
         <option value="MALE">Male</option>
         <option value="FEMALE">Female</option>
         <option value="OTHER">Other</option>
      </options>
   </question>
   <question name="programming_stack" type="choice" required="yes">
      <text>What programming stack are you familiar with?</text>
      <description>You can select multiple</description>
      <options multiple="yes">
         <option value="REACT">React JS</option>
         <option value="ANGULAR">Angular JS</option>
         <option value="VUE">Vue JS</option>
         <option value="SQL">SQL</option>
         <option value="POSTGRES">Postgres</option>
         <option value="MYSQL">MySQL</option>
         <option value="MSSQL">Microsoft SQL Server</option>
         <option value="Java">Java</option>
         <option value="PHP">PHP</option>
         <option value="GO">Go</option>
         <option value="RUST">Rust</option>
      </options>
   </question>
   <question name="certificates" type="file" required="yes">
      <text>Upload any of your certificates?</text>
      <description>You can upload multiple (.pdf)</description>
      <file_properties format=".pdf" max_file_size="1" max_file_size_unit="mb" multiple="yes"/>
   </question>
</questions>

```

2. To submit responses to the questions
url: /api/questions/responses
method: PUT P
response:

```
<question_response>
   <full_name>Jane Doe</full_name>
   <email_address>janedoe@gmail.com</email_address>
   <description>I am an experienced FrontEnd Engineer with over 6 years experience.</description>
   <gender>MALE</gender>
   <programming_stack>REACT,VUE</programming_stack>
   <certificates>
      <certificate>Adobe Certification 19-08-2023.pdf</certificate>
      <certificate>Figma Fundamentals 19-08-2023.pdf</certificate>
   </certificates>
   <date_responded>2023-09-23 12:30:12</date_responded>
</question_response>

```

The API should support uploading of files through use of form-data f .
3. To fetch submitted responses to the questions
url: /api/questions/responses
method: GET G

response:

```
<question_responses current_page="1" last_page="1" page_size="10" total_count="2">
   <question_response>
      <response_id>1</response_id>
      <full_name>John Doe</full_name>
      <email_address>johndoe@gmail.com</email_address>
      <description>I am an experienced FullStack Engineer with over 2 years experience.</description>
      <gender>MALE</gender>
      <programming_stack>REACT,JAVA,SQL,POSTGRES</programming_stack>
      <certificates>
         <certificate id="1">Oracle Java Certification 19-08-2023.pdf</certificate>
         <certificate id="2">Oracle SQL Certification 19-08-2023.pdf</certificate>
      </certificates>
      <date_responded>2023-09-21 12:30:12</date_responded>
   </question_response>
   <question_response>
      <response_id>2</response_id>
      <full_name>Jane Doe</full_name>
      <email_address>janedoe@gmail.com</email_address>
      <description>I am an experienced FrontEnd Engineer with over 6 years experience.</description>
      <gender>MALE</gender>
      <programming_stack>REACT,VUE</programming_stack>
      <certificates>
         <certificate id="3">Adobe Certification 19-08-2023.pdf</certificate>
         <certificate id="4">Figma Fundamentals 19-08-2023.pdf</certificate>
      </certificates>
      <date_responded>2023-09-23 12:30:12</date_responded>
   </question_response>
</question_responses>

```
The API should support:
pagination of the records.
filtering of the responses based on email_address e

4. To download a certificate by providing the idi of the certificate as a URL Parameter
url: /api/questions/responses/certificates/{id}
method: GET G
Provide a Postman Collection P documenting the endpoints above with their saved responses

3. User Interface (Mobile or Web) 3
Create a User Interface for the application.
For mobile developers m , use your preferred mobile development languages or framework i.e. Android A , Flutter F or React Native R .
For web & backend developers w , use your preferred web development languages or framework.
The User Interface should have two pages:
1. Survey Form S
2. Survey Responses S


1. Survey Form 1

The page will have the form through which users can respond to the questions.
The page will have the form through which users can respond to the questions.
Requirements R
1. The form should be a stepped form;with question as a step.
2. The list of questions should be fetched by making a request to the Endpoint 1 E in the REST API R section above
3. The form should have Next N and Previous P button to navigate through each question.
4. On the first question, the Previous P button should be hidden
5. For questions with required - yes y , ensure the user provides a response before proceeding to the next question
6. The final step should have a preview of all the collected data and a Submit S button to submit the collected data.
7. On clicking the Submit button, the responses should be submitted to the database via the Endpoint 2 E in the REST API R section above
8. Use the appropriate form input for each question i.e. long_text => textarea



2. Survey Responses S

The page will be used to show the submitted responses to the questions.
Requirements R
1. Fetch the list of submitted responses using Endpoint 3 E in the REST API R section above
2. The list should be paginated
3. You should be able to filter the responses using the email_address e
4. You should be able to download the certificates using the Endpoint 4 E in the REST API R section above
Add a navigation to be able to switch between the two pages


### Postman collection
1. https://lunar-eclipse-852274.postman.co/workspace/New-Team-Workspace~6c1000dc-acb1-4250-a839-f473d8d9db06/collection/15423641-419a1e1e-af3e-4d46-9425-95a287b46c14?action=share&creator=15423641


2. https://www.postman.com/lunar-eclipse-852274/workspace/sky-world/collection/15423641-419a1e1e-af3e-4d46-9425-95a287b46c14

### Database name as sky_survey_db

![Screenshot 2023-11-11 134030](https://github.com/kevykibbz/opinion-harbor/assets/56401333/e242d29f-b6d2-4e85-a530-7f19d2f9fa1d)