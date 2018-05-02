# Notes-node
A command line CRUD operation based application using Node.js

## Requirement
- [Node.js](https://nodejs.org/en/ )
- Application dependencies NPM modules

### Steps to download required modules:
1. Open node command promt

2. Guide to root Notes-node folder using cd command.
```sh
$ cd Desktop/Notes-node
```

3. Install dependencies modules
```sh
$ npm install
```

## Commands for application

1. View all commands using help feature
```sh
$ node app.js --help
```

2. To view command requirement using help
```sh
$ node app.js command_name --help
```

3. Add a new note command
```sh
$ node app.js add -t="Note_title" -b="Note content"
```

4. To view all the notes
```sh
$ node app.js list
```

5. To read a note
```sh
$ node app.js read -t="Note_title"
```

6. To remove a note
```sh
$ node app.js remove -t="Note_title"
```

License
----

MIT
