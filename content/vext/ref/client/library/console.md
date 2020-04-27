---
title: Console
---

## Summary

### Methods

| Method | Returns |
| ------ | ------- |
| **[Register](#register)**(name: string, description: string, callback: callable) | [ConsoleCommand](/vext/ref/client/type/consolecommand) |
| **[Register](#register-1)**(name: string, description: string, context: any, callback: callable) | [ConsoleCommand](/vext/ref/client/type/consolecommand) |
| **[Deregister](#deregister)**(name: string) | bool |
| **[Deregister](#deregister-1)**(command: [ConsoleCommand](/vext/ref/client/type/consolecommand)) | bool |
| **[DeregisterAll](#deregisterall)**() | void |

## Methods

### Register {#register}

> **Register**(name: string, description: string, callback: callable): [ConsoleCommand](/vext/ref/client/type/consolecommand)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **name** | string |  |
| **description** | string |  |
| **callback** | callable | A callback in the form `function(args: string{}): string \| nil`. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[ConsoleCommand](/vext/ref/client/type/consolecommand)** |  |

#### Example

```lua
Console:Register('SomeCommand', 'Incredible command description.', function(args)
  if #args == 1 and args[1] == 'hello' then
    return 'goodbye'
  end
end)
```

### Register {#register-1}

> **Register**(name: string, description: string, context: any, callback: callable): [ConsoleCommand](/vext/ref/client/type/consolecommand)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **name** | string |  |
| **description** | string |  |
| **context** | any |  |
| **callback** | callable | A callback in the form `function(context: any, args: string{}): string \| nil`. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[ConsoleCommand](/vext/ref/client/type/consolecommand)** |  |

### Deregister {#deregister}

> **Deregister**(name: string): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **name** | string |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

### Deregister {#deregister-1}

> **Deregister**(command: [ConsoleCommand](/vext/ref/client/type/consolecommand)): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **command** | [ConsoleCommand](/vext/ref/client/type/consolecommand) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

### DeregisterAll {#deregisterall}

> **DeregisterAll**()

