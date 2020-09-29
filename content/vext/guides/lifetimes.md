---
title: The DataContainer lifetime
description: Information about how to manage DataContainers and their lifetime.
readingTime: true
weight: 11
---

Instance object (ie. [DataContainers](/vext/ref/shared/type/datacontainer/)) hold a very special place in VeniceEXT. Since they are such an integral part of the Frostbite engine, they come with a bunch of limitations and caveats to their use, and as such are a very common source of problems in mods. Many seemingly random crashes and other issues are caused by misuse and / or mismanagement of DataContainers. In this guide we'll go into what you need to be aware of when dealing with them.

## The lifetime of data-based instances

As we mentioned in the [introduction to data modifications](/vext/guides/datamod) guide, VeniceEXT is provided with [DataContainer](/vext/ref/shared/type/datacontainer/) object that represent instances from the game's data. It is very common to use these in your mods, either to modify them or to piece them together with other parts of the engine. However, you need to be aware of their lifetime.

What that means is that you need to be careful about how long you keep them around for. While instances you create yourself do not have this issue, instances that come from game data will only be around for as long as that data is loaded. If you keep around a reference to an instance for longer than its data is around, then you could experience a variety of issues, like crashes and other odd behavior. 

In simpler terms, imagine that you grab an instance as soon a level loads and store it in a variable somewhere. The match plays out and ends, so the level gets unloaded and switched to a different one. That instance you stored now points to something that doesn't exist anymore, so attempting to use it will result in issues. Let's look at an example that demonstrates this issue:

```lua
levelData = nil

Events:Subscribe('Partition:Loaded', function(partition)
  for _, instance in pairs(partition.instances) do
    if instance:Is('LevelData') then
      levelData = LevelData(instance)
    end
  end
end)
```

Can you spot the mistake? In the code above, we store a data-based [LevelData](/vext/ref/fb/leveldata/) instance into the global variable `levelData`. This variable will keep referencing the same instance until someone modifies it. When the level unloads, the [LevelData](/vext/ref/fb/leveldata/) it points to will no longer exist and whenever something tried to touch the `levelData` variable, things will break in mysterious ways.

> Some of you may wonder why VeniceEXT itself doesn't prevent you from accessing any such invalid instances. The answer is two fold: For starters, when VeniceEXT was originally designed, the intricacies of instances were not fully understood yet. When they finally were, it was too late to make changes to how the system works. Secondly, even though there are ways to mitigate this issue in the current system, they would come with a severe performance penalty.

## Preventing dangling references

So, with that being said, how do you make sure your mods don't break in spectacular ways? The simple answer: **Don't ever store instances, only look them up when you need to use them!** However, that's not always possible or a good idea (eg. for performance reasons). There are legitimate use cases for keeping instances around, so the real answer to this question is: **Wherever possible, don't store instances. Otherwise, be aware of the instances your store and get rid of them before they get unloaded!**

For instances that are loaded when the level gets loaded (which are basically contained in the main level bundle or one of the gamemode-specific bundles) the way to do this is pretty straight forward. Let's look again at our example from before, but this time also introducing a way to get rid of that dangling instance reference:

```lua
levelData = nil

Events:Subscribe('Partition:Loaded', function(partition)
  for _, instance in pairs(partition.instances) do
    if instance:Is('LevelData') then
      levelData = LevelData(instance)
    end
  end
end)

Events:Subscribe('Level:Destroy', function()
  levelData = nil
end)
```

In the example above, even though we're still storing the [LevelData](/vext/ref/fb/leveldata/) instance, we make sure that we clear it out by setting it to `nil` as soon as the level gets destroyed, signaled by the [Level:Destroy](/vext/ref/shared/event/level_destroy/) event. This makes sure that even if someone tried to access the `levelData` variable (eg. the lua garbage collector), it no longer holds anything, and nothing bad will happen.
