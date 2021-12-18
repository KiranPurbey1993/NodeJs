# NodeJs

  Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient.

# Node.js as a File Server
  The Node.js file system module allows you to work with the file system on your computer.

# Common use for the File System module:
  1> Read files   - The fs.readFile() method is used to read files and return content of file on your computer.

  2> Create files
    # Create Files
    The File System module has methods for creating new files:

    `fs.appendFile()` - The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created
    `fs.open()` - The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not                     exist, an empty file is created
    `fs.writeFile()` - The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content,                         will be created.

  3> Update files
    `fs.appendFile()`
    `fs.writeFile()`

  4> Delete files - To delete a file with the File System module,  use the `fs.unlink()` method.

  5> Rename files - To rename a file with the File System module,  use the `fs.rename()` method.
  
 # Nodemailer Module
 The Nodemailer module makes it easy to send emails from your computer.
