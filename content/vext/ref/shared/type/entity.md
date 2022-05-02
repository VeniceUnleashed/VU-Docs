---
title: Entity
---

## Summary

### Constructors

|  |
| --- |
| **[Entity](#constructor-0)**(other: [EntityBusPeer](/vext/ref/shared/type/entitybuspeer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "uniqueId" true >}} | int |
| {{< prop "isPendingDestruction" true >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Init](#init)**(realm: [Realm](/vext/ref/fb/realm), enableAllowed: bool, isGhost: bool = false) | void |
| **[Destroy](#destroy)**() | void |
| **[RegisterInitCallback](#registerinitcallback)**(callback: callable) | int |
| **[RegisterInitCallback](#registerinitcallback-1)**(context: any, callback: callable) | int |
| **[UnregisterInitCallback](#unregisterinitcallback)**(handle: int) | void |
| **[RegisterDeinitCallback](#registerdeinitcallback)**(callback: callable) | int |
| **[RegisterDeinitCallback](#registerdeinitcallback-1)**(context: any, callback: callable) | int |
| **[UnregisterDeinitCallback](#unregisterdeinitcallback)**(handle: int) | void |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "Entity" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### Entity {#constructor-0}

> **Entity**(other: [EntityBusPeer](/vext/ref/shared/type/entitybuspeer))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityBusPeer](/vext/ref/shared/type/entitybuspeer) |  |

## Properties

### {{% prop-heading "uniqueId" true %}}

> **int**

### {{% prop-heading "isPendingDestruction" true %}}

> **bool**

## Methods

### Init {#init}

> **Init**(realm: [Realm](/vext/ref/fb/realm), enableAllowed: bool, isGhost: bool = false)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **realm** | [Realm](/vext/ref/fb/realm) |  |
| **enableAllowed** | bool |  |
| **isGhost** | bool |  |

### Destroy {#destroy}

> **Destroy**()

### RegisterInitCallback {#registerinitcallback}

> **RegisterInitCallback**(callback: callable): int

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **callback** | callable | A callback in the form `function(entity: Entity): bool`. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |

### RegisterInitCallback {#registerinitcallback-1}

> **RegisterInitCallback**(context: any, callback: callable): int

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **context** | any | A context value to pass to the callback. |
| **callback** | callable | A callback in the form `function(context: any, entity: Entity): bool`. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |

### UnregisterInitCallback {#unregisterinitcallback}

> **UnregisterInitCallback**(handle: int)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **handle** | int |  |

### RegisterDeinitCallback {#registerdeinitcallback}

> **RegisterDeinitCallback**(callback: callable): int

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **callback** | callable | A callback in the form `function(entity: Entity): bool`. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |

### RegisterDeinitCallback {#registerdeinitcallback-1}

> **RegisterDeinitCallback**(context: any, callback: callable): int

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **context** | any | A context value to pass to the callback. |
| **callback** | callable | A callback in the form `function(context: any, entity: Entity): bool`. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |

### UnregisterDeinitCallback {#unregisterdeinitcallback}

> **UnregisterDeinitCallback**(handle: int)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **handle** | int |  |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

