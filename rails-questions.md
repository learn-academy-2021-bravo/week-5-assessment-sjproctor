# ASSESSMENT 5: Database and Active Record Practical Questions

1. What is SQL?

Structured Query Language - interact with dbs

2. What the PostgreSQL query that would return all the content in a particular table?

SELECT * FROM table_name

3. What is the command to create a new Rails application with a PostgreSQL database?

$ rails new app_name -d postgresql -T

4. What is the command to generate a Rails model for a meals table with columns named breakfast, lunch, and dinner?

$ rails g model Meal meals_breakfast:string meals_lunch:string meals_dinner:string

5. What is a migration? Why would you use one?

Migration is a tool for updating the schema

6. What is the command to generate a migration file?

$ rails g migration add_column_to_table
$ rails db:migrate

7. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

Model - class: PascalCase (singular), Table - snake_case (plural)

8. What is the schema file in a Rails application? Can you modify the schema directly? Why or why not?

Schema is a reflection of the current state of the db (not the actual db), cannot be modified, migrations are used to modify the db

9. What is the Rails console?

irb session, built into the Rails environment, $ rails c

10. What is the Rails console command to see all the content in a particular table?

ModelName.all
