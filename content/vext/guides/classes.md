---
title: The built-in class system
description: Information about VeniceEXT's built-in class system and how you can use it to improve your mods.
readingTime: true
weight: 6
---

Sometimes, when you have complex mods where you need to maintain complex state and separate different concerns, defining free-standing global functions can quickly lead to confusion and errors. In order to help avoid that, VeniceEXT comes with a built-in class system based on a modified version of the [middleclass](https://github.com/kikito/middleclass) lua library. In this short guide we'll explain how to use it.

## Defining classes

You can define a new class as seen below:

```lua
local MyClass = class('MyClass')
```

This will define a new class with the name `MyClass`. You can then start specifying methods for that class as seen below:

```lua
function MyClass:__init()
  self.someValue = 123
end

function MyClass:getSomeValueTimesTen()
  return self.someValue * 10
end
```

The first method we defined, with the name `__init`, is the constructor for that class. That means that this is the method that will get called when we create a new object of that class. It is usually in here where you want to define your class variables and perform any relevant initialization. In the original middleclass library, this method was called `initialize`. We also define a second method called `getSomeValueTimesTen` which returns the value of the variable `someValue` multiplied by `10`.

## Creating objects

Now that we have defined our class let's see how to create an object of it:

```lua
local myObject = MyClass()
```

As seen above, we just "call" the name of the class, similar to how we would create a VeniceEXT type object. In the original middleclass library this would work by calling `new()` on the class. We can then access the properties and methods of that object in a similar way to VeniceEXT types, as seen below:

```lua
print(myObject.someValue)
myObject.someValue = 456
print(myObject:getSomeValueTimesTen())
```

The code above will print:

```
123
4560
```

For more information about middleclass and its various features refer to its [official documentation](https://github.com/kikito/middleclass/wiki).

## Typical usage

Let's see how one would typically use the class system in a VEXT mod. Usually, a class definition will live within its own script, and the class itself will be returned at the end of that script, as seen below:

```lua
local MyClass = class('MyClass')

function MyClass:__init()
  self.someValue = 123
end

function MyClass:getSomeValueTimesTen()
  return self.someValue * 10
end

return MyClass
```

Then, from another script you would use it like this (assuming the snippet above was placed in a script called `myclass.lua`):

```lua
local MyClass = require('myclass')

local myObject = MyClass()
```

### Using with callbacks

Another typical scenario is binding certain events or hooks (or any other callback-based mechanism) to an object. This is achieved using the user data bound methods we have mentioned in other guides and usually looks like this:

```lua
local MyClass = class('MyClass')

function MyClass:__init()
  self._someEvent = Events:Subscribe('SomeEvent', self, self._onSomeEvent)
end

function MyClass:__gc()
  self._someEvent:Unsubscribe()
end

function MyClass:_onSomeEvent()
  print('SomeEvent received!')
end
```

In this example, as soon as a new object of the `MyClass` type is created, we register a handler for the `SomeEvent` event by passing `self` as the user data and the `_onSomeEvent` method as the callback. The reason we pass `self` is because when the callback gets called, we want it to be called in the context of the object that subscribed to it. We also store the returned [Event](/vext/ref/shared/type/event/) object in a property (`_someEvent`) and we also define a function for the `__gc` metamethod. When the engine garbage collects this object, the `__gc` method will be called and we will [Unsubscribe](/vext/ref/shared/type/event/#unsubscribe) from that event, so the callback on our destroyed object no longer gets called. 