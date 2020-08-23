---
title: In-depth Hooks guide
description: In-depth guide to VeniceEXT hooks, which allow you to modify game behavior on-the-fly. Find out how to install them and process them.
weight: 4
---

As explained in the [Introduction to VeniceEXT concepts](/vext/guides/concepts/) guide, hooks are a way for you to modify game engine behavior on the fly, or prevent certain behavior from happening. In this guide we'll go in a bit more detail on how hooks work and how to use them. Before reading this guide make sure you first have a good understanding of how [Events](/vext/guides/events/) work as some concepts are similar.

## Hook basics

You can think of hooks as functions called by the engine. Every hook is identified by a unique string name, has a set of parameters, and in some cases a return value. For example, the [EntityFactory:Create](/vext/ref/server/hook/entityfactory_create/) hook is called whenever the engine tries to create a new entity, with the entity creation data and world position as parameters, and returns the created Entity (or `nil` if one couldn't be created). Similarly to events, hooks are split into [client](/vext/ref/client/hook/), [server](/vext/ref/server/hook/), and [shared](/vext/ref/shared/hook/) categories meaning that some are only available to `client` scripts, some only to `server` scripts and others to both (`shared`). 

## Using hooks

Let's look at an example of the [EntityFactory:Create](/vext/ref/server/hook/entityfactory_create/) hook we mentioned above. 

### Installing hooks 

First, we need to declare to the engine that we want to use this hook. We do this via a call to the [Install](/vext/ref/shared/library/hooks/#install) method of the [Hooks](/vext/ref/shared/library/hooks/) library.

```lua
Hooks:Install('EntityFactory:Create', 100, function(hookCtx, entityData, transform)
  print('Creating entity at position:')
  print(transform)
end)
```

In this example, we "install" a handler function for the [EntityFactory:Create](/vext/ref/server/hook/entityfactory_create/) hook by passing it as the third parameter to the [Install](/vext/ref/shared/library/hooks/#install) call. This makes it so every time the engine attempts to create a new [Entity](/vext/ref/shared/type/entity/) this function will be called, giving us an opportunity to modify its behavior. In this case, when that happens, the script will call that function and print `Creating entity at position:` followed by the `transform` the entity will be placed at after creation.

You might have noticed that while in the documentation for the [EntityFactory:Create](/vext/ref/server/hook/entityfactory_create/) hook there are only two parameters described (`entityData` and `transform`), but in this example we have an extra one before them called `hookCtx`. This parameter is known as the hook context and it's what we have to use to modify the behavior of this hook. It is an object of the [HookContext](/vext/ref/shared/type/hookcontext/) type and we'll explain how to use it below. The important thing to note for now is that this object will be passed into the installed hook handler before the parameters of the hook.

You might have also noticed we passed another parameter to the [Install](/vext/ref/shared/library/hooks/#install) call: the number `100`. This defines the priority of this hook installation. Since multiple scripts from different mods can install handlers for the same hook, this number lets the engine know in which order to call those handler functions. The higher the number, the higher priority this installation will have, and the higher priority it has the sooner it will get called. If for example we installed another handler for the same hook with `200` as its priority, it would be called before the one we installed above with priority `100`.

#### Hook user data

Similarly to Events and NetEvents, there is a version of the [Install](/vext/ref/shared/library/hooks/#install-1) method which allows us to pass some custom user data that will be provided to our handler alongside the rest of the hook data, as seen in the example below:

```lua
local x = 123

Hooks:Install('EntityFactory:Create', 100, x, function(userData, hookCtx, entityData, transform)
  print(userData)
end)
```

The custom user data will be passed in as the first argument in the handler function and in this example, when the engine attempts to create a new entity, the script will print `123`.

### Modifying the parameters

As we saw in the example above, the [EntityFactory:Create](/vext/ref/server/hook/entityfactory_create/) hook has two parameters: the data of the entity to create and the world position to place the entity at after creation. As we can see from the documentation of the hook, neither of these parameters are read-only (if they were they would have a red "RO" box next to them), which means we have the ability to modify them.

To modify them we need to use the hook context object we mentioned above. Let's look at an example of how to modify the position the entity will be spawned in:

```lua
Hooks:Install('EntityFactory:Create', 100, function(hookCtx, entityData, transform)
  -- We want to move every entity that's spawned 10 units up.
  transform.trans.y = transform.trans.y + 10
  
  -- Changing the transform in itself isn't enough. We now need to use the
  -- hook context to provide the engine with our modified data:
  hookCtx:Pass(entityData, transform)
end)
```

In the example above, we modify the transform (position) of the to-be-created entities by moving it 10 units upwards. However, just changing the value won't have any effect. For our changes to do anything, we need to use the [Pass](/vext/ref/shared/type/hookcontext/#pass) method on the [HookContext](/vext/ref/shared/type/hookcontext/) object that's provided to us (`hookCtx`). The way to use this method is by passing in all the hook parameters in the order they were provided to us, even if we didn't modify them.

Let's look at one more example:

```lua
Hooks:Install('UI:CreateChatMessage', 100, function(hookCtx, message, channelId, playerId, recipientMask, isSenderDead)
  hookCtx:Pass(message .. '!', channelId, playerId, recipientMask, isSenderDead)
end)
```

The [UI:CreateChatMessage](/vext/ref/client/hook/ui_createchatmessage/) hook we install a handler for above is a client-side hook that gets called whenever the UI attempts to render a new chat message. In this example, we modify the chat message by appending an exclamation mark (`!`) at its end. This makes it so every chat message in the UI has an exclamation mark at the end. Just like before, we pass in all the rest of the hook parameters to the [Pass](/vext/ref/shared/type/hookcontext/#pass) call, even though we did not modify them.

### Getting the return value

Some hooks can return values. For example, the [EntityFactory:Create](/vext/ref/server/hook/entityfactory_create/) hook we've been using in the examples above can return an [Entity](/vext/ref/shared/type/entity/) object, representing the entity that was created. We can use the hook context object to execute the original engine functionality for that hook and get back that return value, as seen in the example below:

```lua
Hooks:Install('EntityFactory:Create', 100, function(hookCtx, entityData, transform)
  local createdEntity = hookCtx:Call()
  
  if createdEntity ~= nil then
    print(createdEntity.typeInfo.name)
  end
end)
```

In this example, we use the [Call](/vext/ref/shared/type/hookcontext/#call) method on the [HookContext](/vext/ref/shared/type/hookcontext/) object to call the original function and get its return value (in this case an [Entity](/vext/ref/shared/type/entity/)). We can also see that the documentation for this hook tells us that it can also return `nil`, so we check for that. If it doesn't return `nil`, then we print the type of the entity that was just created.

A thing to note about using the [Call](/vext/ref/shared/type/hookcontext/#call) method is that it stops execution of the hook. This means that any other handlers installed with a lower priority than this one will never get called. We should also note that before using the [Call](/vext/ref/shared/type/hookcontext/#call) method we are free to use the [Pass](/vext/ref/shared/type/hookcontext/#pass) method to modify the hook parameters.

### Modifying the return value

Now that we know how to get the original return value let's look at how we can modify it. Similarly to parameters, we can bypass the original return value of the hook and instead return something of our own. We can do this by using the [Return](/vext/ref/shared/type/hookcontext/#return-1) method on the [HookContext](/vext/ref/shared/type/hookcontext/) object and passing in our custom return value.

```lua
Hooks:Install('EntityFactory:Create', 100, function(hookCtx, entityData, transform)
  local createdEntity = hookCtx:Call()
  local someOtherEntity = doSomethingWithTheCreatedEntity(createdEntity)
  hookCtx:Return(someOtherEntity)
end)
```

In the example above, we use [Call](/vext/ref/shared/type/hookcontext/#call) to make the original code run and get back the created entity, and then we pass that entity to a custom function (`doSomethingWithTheCreatedEntity`) which does something with said entity (it could for example be modifying some of its properties or replacing it with a different type of entity) and then returns a different [Entity](/vext/ref/shared/type/entity/) (`someOtherEntity`). We then pass that value into the [Return](/vext/ref/shared/type/hookcontext/#return-1) call to give it back to the engine. 

You might have noticed that in the [Call](/vext/ref/shared/type/hookcontext/#call) example above we didn't use the [Return](/vext/ref/shared/type/hookcontext/#return-1) method at all. In the cases where we don't explicitly call it, the engine will call it for us with the value returned by the [Call](/vext/ref/shared/type/hookcontext/#call) method.

### Preventing execution

The last usage scenario for hooks is preventing the engine from doing what it was intending to do, preventing execution. The way we do this is by calling the [Return](/vext/ref/shared/type/hookcontext/#return-1) method on the [HookContext](/vext/ref/shared/type/hookcontext/) object **without** calling the [Call](/vext/ref/shared/type/hookcontext/#call) method before that. This makes it so the original code never runs and we instead take full control over what this hook returns (if anything). Let's look at an example with the [UI:CreateChatMessage](/vext/ref/client/hook/ui_createchatmessage/) hook we used previously:

```lua
Hooks:Install('UI:CreateChatMessage', 100, function(hookCtx, message, channelId, playerId, recipientMask, isSenderDead)
  local player = PlayerManager:GetPlayerById(playerId)

  if player ~= nil and player.name == 'kiwidog' then
    hookCtx:Return()
  end
end)
```

In this example, whenever a chat message is about to be rendered in the UI, this hook handler gets called. We use the `playerId` parameter to get the [Player](/vext/ref/client/type/player/) object of the player with that id by using the [GetPlayerById](/vext/ref/client/library/playermanager/#getplayerbyid) method of the [PlayerManager](/vext/ref/client/library/playermanager/) library and if that player exists and their name is `kiwidog` then we call the [Return](/vext/ref/shared/type/hookcontext/#return) method on the [HookContext](/vext/ref/shared/type/hookcontext/) object. This makes it so any messages sent by a player with the name `kiwidog` will never be rendered (since we didn't use the [Call](/vext/ref/shared/type/hookcontext/#call) method before calling [Return](/vext/ref/shared/type/hookcontext/#return)).

As with [Call](/vext/ref/shared/type/hookcontext/#call), [Return](/vext/ref/shared/type/hookcontext/#return) will stop execution of the hook. This means that any other handlers installed with a lower priority than this one will never get called.

## Uninstalling hooks

You may want to uninstall a specific hook at some point if it is no longer useful to you. To do that you'll need to use the return value of the [Hooks:Install](/vext/ref/shared/library/hooks/#install) method. When you call that methods, it returns a [Hook](/vext/ref/shared/type/hook/) object back to you. You can keep this object around and at a later time call the [Uninstall](/vext/ref/shared/type/hook/#uninstall) method on it to uninstall the hook:

```lua
local hook = Hooks:Install(...)

-- Some time later.
hook:Uninstall()
```

After you call that method the hook handler will not be called again until you install it again.