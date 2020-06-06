# Run using http-server

npm install --global http-server
http-server --proxy http://localhost:8081?

# Why use Modules?
There are numerous benefits of modules for a sprawling, interdependent codebase. Some of the most important ones are as follows:

Maintainability – Since modules are self-contained, they reduce the dependencies on parts of the codebase as much as possible to improve them independently. Also, updating a single module is much more convenient than updating the complete code. Updating one module doesn’t affect the other modules.

Namespacing – Since variables outside the scope of a top-level function are global, it’s common to have “namespace pollution” in our code. This means that totally unrelated code shares those global variables, creating confusion, resulting in unexpected outputs. Modules help us avoid these situations by creating private space for the variables.

Reusability – JavaScript modules let us copy the previous code into our program and reuse it over and over again. Writing the complete code for the same task is time-consuming; modules provide us with a better approach to optimize our code.

# Core JavaScript Module Features
Regular scripts are different from the modules, differentiated by its core features. These features are valid for the browser as well as server-side JavaScript. The following are the core module features that distinguish modules:

### Always use “strict”
By default, modules use the strict mode. For example, if you try to assign a value to an undeclared variable, you will get an error.

Code:
```
<script type="module">
    var1 = 5; // error
</script>
```

### Module-level Scope
All modules have their own top-level scope. This means that other scripts cannot access the modules’ global (top-level) variables and functions. The module has to export everything it wants to grant access to the scripts. If you try to do so, the import fails and doesn’t add any functionality.

To create a window-level global variable, we can explicitly assign the variable to the window and access window.userName. But only use these variables with a reason because this is an exception to the case mentioned before.

# Javascript Modular Design Pattern
1. The objective is to hide the variable accessibility from the outside world.


https://data-flair.training/blogs/javascript-modules/
https://alligator.io/js/modules-es6/
https://javascript.info/import-export
https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript
https://www.tutorialspoint.com/es6/es6_modules.htm#:~:text=A%20module%20is%20nothing%20more,code%20written%20in%20a%20file.&text=Variables%20and%20functions%20within%20a,will%20not%20be%20accessible%20globally.
https://www.youtube.com/watch?v=s9kNndJLOjg
https://www.youtube.com/watch?v=cRHQNNcYf6s
https://jakearchibald.com/2017/es-modules-in-browsers/
https://ringojs.org/documentation/module_and_global_scope/