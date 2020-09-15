---
title: Splitting your code
description: Information on how to split your code into different scripts and use it from other scripts within the different VeniceEXT contexts.
readingTime: true
weight: 5
---

As we explained in the [Your first mod](/modding/your-first-mod/) tutorial, the only Lua scripts that get executed when the VeniceEXT engine starts up are the ones named `__init__.lua` in each of the respective `ext/client`, `ext/server`, and `ext/shared` folders. However, unless we're creating a very small mod, it is not ideal to keep all of our code in those files alone. It's instead better to split it into multiple scripts and use those when needed.

## Putting code in different files

As with `__init__.lua`, all your other scripts must also be within the `ext/client`, `ext/server`, and `ext/shared` folders. You are also free to create additional folders within those folders so you can organize your code better. As should be evident by the folder names, scripts in the `ext/client` directory will only be available to connecting clients, scripts in the `ext/server` directory only to the server, and scripts in the `ext/shared` directory to both.

For the sake of this guide, let's create a new file in the `ext/server` folder and name it `serverscript.lua`, and another file in the `ext/shared` folder and name it `sharedscript.lua`. We'll put the following code in them:

#### `ext/server/serverscript.lua`

```lua
print('This is a server script!')
serverThing = 'Some server thing'
```

#### `ext/shared/sharedscript.lua`

```lua
print('This is a shared script!')
sharedThing = 'Some shared thing'
```

## The `require` syntax

Now that we have created those two files, let's look at how we can use them from our other scripts. To do so, we need to use the global `require(path: string)` function. We call this function by passing the file path of the script we want to load to it, and in turn it will try to find this script and execute it. 

Let's look at an example. In this example we'll be assuming we're using the server-side `__init__.lua` script, present in the `ext/server` folder, and we'll be loading the two scripts we created above.

```lua
print('Main server script has loaded!')

require('serverscript')
require('__shared/sharedscript')

print(serverThing)
print(sharedThing)
```

Here, we make two calls to the require function:

1. `require('serverscript')` to load the `ext/server/serverscript.lua` script, and
2. `require('__shared/sharedscript')` to load the `ext/shared/sharedscript.lua` script

As you might have noticed, in order to load scripts in the `ext/shared` folder, we need to prefix the their require path with `__shared/`. If we don't, then `require` will try to look for a file in the `ext/server` or `ext/client` folder, depending on whether our mod is running on the server or the client. Keep in mind that even if we're in a shared script (eg. `ext/shared/__init__.lua`) and we want to require another shared script, we still need to prefix its path with `__shared`.

You might have also noticed that we don't add a `.lua` suffix to the require paths. This is because the `.lua` extension is optional when calling `require`. We can add it if we want, but if we don't, the engine will add it for us automatically. Requiring files with other extensions is not supported.

Now that we have established how to require files, let's look at what this example will actually do. As soon as our server starts up and our mod is loaded, the following lines will be printed in the server console:

```
Main server script has loaded!
This is a server script!
This is a shared script!
Some server thing
Some shared thing
```

What happens in this example is that as soon as our script requires another script, that script gets loaded and executed. This makes our `serverscript.lua` for example print the `This is a server script!` line and also define the global `serverThing` variable, which we then print from our `__init__.lua` script. 

### Requiring scripts in subfolders

As we mentioned before, we can put our scripts in subfolders inside the `ext/server,client,shared` folders. The way to load them remains exactly the same. For example, if we have this script: `ext/server/somefolder/somescript.lua`, we would load it by calling `require('somefolder/somescript')`. If we had a script in `ext/shared/somefolder/somescript.lua` we would load it by calling `require('__shared/somefolder/somescript.lua')`.

A thing to note is that the paths we pass to the `require` call are always relative to the `ext/server,client,shared` directories. What that means is that if we are have for example a `require('myscript')` call inside a script that's placed in `ext/server/somefolder/somescript.lua`, the engine will look for `ext/server/myscript.lua` and **not** `ext/server/somefolder/myscript.lua`.

### Requiring scripts multiple times

Let's look at this example:

```lua
print('Main server script has loaded!')

require('serverscript')
require('serverscript')
```

You might expect this script to print:

```
Main server script has loaded!
This is a server script!
This is a server script!
```

But it will instead print:

```
Main server script has loaded!
This is a server script!
```

That is because when we `require` a script, it will only get loaded and executed once, regardless of how many times we `require` it again in the future.

### Returning values from scripts

Another thing you can do is that you can return values from your required scripts. Let's change the `ext/server/serverscript.lua` script to this:

```lua
print('This is a server script!')
return 'Hello other script!'
```

As you see, we return a value at the end of the script by using the `return` keyword. If then in our `ext/server/__init__.lua` script we do the following:

```lua
print('Main server script has loaded!')

local serverScriptValue = require('serverscript')
print(serverScriptValue)
```

We will see the following lines printed in our console:

```
Main server script has loaded!
This is a server script!
Hello other script!
```

Basically, the value we `return` from our script will be returned by the call to `require`.

Another thing to note is that the rule about scripts being executed only once still applies to return values. If for example we change the `ext/server/serverscript.lua` script to return a random number:

```lua
return math.random()
```

And then we require it multiple times from another script and print its return value:

```lua
print(require('serverscript'))
print(require('serverscript'))
print(require('serverscript'))
```

We will notice that all three prints will print the exact same number.