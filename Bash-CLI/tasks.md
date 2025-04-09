## Tasks

1. Print out the contents of errors.log using 'cat'.
2. Use grep to filter out all of the logs that contain 'database'.
3. Insert the output from step 2 into a file called "errors_database.txt.
4. Using grep, how many ERRORS are there in the errors.log file?

## Answers

1. cat errors.log
2. cat errors.log | grep database
3. cat errors.log | grep database > errors_database.txt
4. cat errors.log | grep ERRORS: | wc -l