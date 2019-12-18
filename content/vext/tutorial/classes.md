---
title: Classes
---

VeniceEXT provides an out-of-the box class system, both for internally represented types (such as Frostbite types), but also for user convenience.

All classes are referenced globally or locally by name, and follow the following syntax:

``` lua
-- Create a new instance of type "Vec3", passing "1, 2, 3" as parameters
-- in the class constructor. The equivalent of this in languages that use
-- the "new" keyword would be something like "var a = new Vec3(1, 2, 3)".
local a = Vec3(1, 2, 3)

-- Read and write a member variable.
print(a.x)
a.y = 123.45

-- Call a function on the object and store the result. In this case we're 
-- calculating the dot product of two vectors (assuming b is another Vec3).
local res = a:Dot(b)
print(res)
```

In the above example, Vec3 is one of the built-in Frostbite types that VeniceEXT exposes. However, one can also introduce their own classes, as seen below:

``` lua
-- Define a new class called "MyClass".
local MyClass = class("MyClass")

-- Define our constructor.
function MyClass:__init(x)
    -- Constructors can accept parameters and we can then
    -- store them as member variables.
    self.y = x * 2
end

-- Define a method.
function MyClass:SomeMethod()
    return "Hello world!"
end

-- Create a new object of type "MyClass".
local a = MyClass(2)

-- Print the stored variable.
print(a.y)

-- Call the defined method and prints its result.
print(a:SomeMethod())
```

## Modules

In VeniceEXT, only the main initialization script (`__init__.lua`) will be loaded and executed for each respective loading mode (ie. client, server, shared). However, only allowing modders to write code in that single file would be incredibly counter-intuitive. For that reason, VeniceEXT provides the concept of "modules".

Every lua script in your mod is considered a different self-contained module. The initialization script and other modules can access other modules within the same mod to perform their various functions. To better visualize this, you can think of every lua script as a big function. Other scripts can call that function and get its result (if it exists). This allows for better code organization and an overall more pleasant development experience.

This pattern is especially useful because of VeniceEXT's class system. Let's look at a simple example:

``` lua
-- In this script we will define a simple class.
local MyClass = class("MyClass")

function MyClass:__init()
    self.x = "y"
end

function MyClass:DoSomething()
    print("Hey!")
end

-- Now, at the end of the script, we will return our class descriptor.
return MyClass
```

From what you can see in the file above, the descriptor for the "MyClass" class is being returned from the script at the end. This allows other scripts to use this "exported" descriptor, as seen below:

``` lua
-- The first thing we have to do is "import" the class descriptor.
local MyClass = require("myclass")

-- Create an object instance.
local a = MyClass()

-- Call a method on the object.
a:DoSomething()
```

The `require` keyword that's presented above works in a similar way to Lua's standard `require` keyword. The parameter passed into it is a path to the required lua script. For client-mode scripts it is relative to the client directory, and for server-mode to the server directory. If you want to require scripts from the shared code location you have to prefix the path with `__shared/`. Please note that you have use that prefix even when requiring shared scripts from another shared script.

Even though in the example we returned a class definition, you can return anything (or nothing at all). For example, you can store your configuration in a lua file and export it like this:

``` lua
return {
    ConfigKey1 = "ConfigValue1",
    ConfigKey2 = "ConfigValue2"
}
```

And then use it from another script like so:

``` lua
local config = require("config")

if config.ConfigKey1 == "SomeConfigValue" then
    -- Do something.
end
```
