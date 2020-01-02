---
title: Console
---
## Description

## Methods

| Type                                                  | Name                         | Parameters                                                                     |
| ----------------------------------------------------- | ---------------------------- | ------------------------------------------------------------------------------ |
| [ConsoleCommand](/vext/ref/cls/clt/consolecommand) | [Register](#register)        | string **name**, string **description**, function **callback**                 |
| [ConsoleCommand](/vext/ref/cls/clt/consolecommand) | [Register](#register)        | string **name**, string **description**, object **obj**, function **callback** |
| bool                                                  | [Deregister](#deregister)    | [ConsoleCommand](/vext/ref/cls/clt/consolecommand) **command**              |
| bool                                                  | [Deregister](#deregister)    | string **name**                                                                |
| void                                                  | [DeregisterAll](#deregister) |                                                                                |

### Register

> [ConsoleCommand](/vext/ref/cls/clt/consolecommand) **Register**(string **name**, string **description**, function **callback**)

The `callback` function has a single table argument, containing all the arguments passed to the console command by the user when executing it and can optionally return a string, which will be printed to the console output.

All commands will be automatically deregistered when the player leaves the server or when the mod in question gets unloaded.

#### Parameters

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| name        | string   |             |
| description | string   |             |
| callback    | function |             |

#### Example

``` lua
Console:Register("SomeCommand", "Incredible command description.", function(args)
    if #args == 1 and args[1] == "hello" then
        return "goodbye"
    end
end)
```

Then, the command will be executable via the in-game console as `modname.SomeCommand`, where `modname` is the name of the mod that has registered it.

### Register

> [ConsoleCommand](/vext/ref/cls/clt/consolecommand) **Register**(string **name**, string **description**, object **obj**, function **callback**)

The `callback` function has a single table argument, containing all the arguments passed to the console command by the user when executing it and can optionally return a string, which will be printed to the console output.

All commands will be automatically deregistered when the player leaves the server or when the mod in question gets unloaded.

#### Parameters

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| name        | string   |             |
| description | string   |             |
| obj         | object   |             |
| callback    | function |             |

### Deregister

> bool **Deregister**([ConsoleCommand](/vext/ref/cls/clt/consolecommand) **command**)

#### Parameters

| Name    | Type                                                  | Description |
| ------- | ----------------------------------------------------- | ----------- |
| command | [ConsoleCommand](/vext/ref/cls/clt/consolecommand) |             |

### Deregister

> bool **Deregister**(string **name**)

#### Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| name | string |             |

### DeregisterAll

> void **DeregisterAll**()
