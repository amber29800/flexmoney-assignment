# flexmoney-assignment


# I have used React.js for frontend of the assignment.

# I have used Node.js and Express for the backend.

# I have used MySQL as the database.

# Coming to the problem statement, the main part of the assignment is to check weather the user is already registered or not. I have used phone number as the keyto check weather the user with same phone number exists or not, because the phone number is always unique for all the registered people.

# All the data of users is stored in "users" table.

# For payment part, I have stored the details in "payments" table.

# As told in the problem statement I have not implemented completePayments() function.

# -----------------------------------------------------------------------------------------------------------------------------------------------------------------------

# ER DIAGRAM 
          +----------------+
          |   users        |
          +----------------+
          |   id           |
          |   name         |
          |   password     |
          |   age          |
          |   mobile number|
          |   batch        |
          +----------------+
                 |
                 |
                 |
                 |
          +----------------+
          |   payments     |
          +----------------+
          |   payment_id   |
          |   user_id (fk) |
          |   amount       |
          |   date |
          +----------------+
          
# SCHEMA DIAGRAM

          +---------------+
          |    payments   |
          +---------------+
          | payment_id            |
          | user_id (FK)  |
          | amount        |
          | date          |
          +---------------+
                  |
                  |
                  v
          +----------------+
          |    users       |
          +----------------+
          |   id           |
          |   name         |
          |   password     |
          |   age          |
          |   mobile number|
          |   batch        |
          +----------------+
