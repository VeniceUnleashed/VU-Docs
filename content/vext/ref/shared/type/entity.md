---
title: Entity
---

## Summary

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "typeInfo" true >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |
| {{< prop "data" true >}} | [DataContainer](/vext/ref/shared/type/datacontainer) \| nil |
| {{< prop "uniqueId" true >}} | int |
| {{< prop "instanceId" true >}} | int |
| {{< prop "bus" true >}} | [EntityBus](/vext/ref/shared/type/entitybus) \| nil |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Init](#init)**(realm: [Realm](/vext/ref/fb/realm), enableAllowed: bool, isGhost: bool) | void |
| **[Destroy](#destroy)**() | void |
| **[Is](#is)**(typeName: string) | bool |
| **[FireEvent](#fireevent)**(eventId: int) | void |
| **[FireEvent](#fireevent-1)**(eventName: string) | void |
| **[FireEvent](#fireevent-2)**(event: [EntityEvent](/vext/ref/shared/type/entityevent)) | void |
| **[PropertyChanged](#propertychanged)**(propertyId: int) | void |
| **[PropertyChanged](#propertychanged-1)**(propertyId: int, value: any) | void |
| **[PropertyChanged](#propertychanged-2)**(propertyName: string) | void |
| **[PropertyChanged](#propertychanged-3)**(propertyName: string, value: any) | void |
| **[RegisterEventCallback](#registereventcallback)**(callback: callable) | int |
| **[RegisterEventCallback](#registereventcallback-1)**(context: any, callback: callable) | int |
| **[UnregisterEventCallback](#unregistereventcallback)**(handle: int) | void |
| **[RegisterCreateCallback](#registercreatecallback)**(callback: callable) | int |
| **[RegisterCreateCallback](#registercreatecallback-1)**(context: any, callback: callable) | int |
| **[UnregisterCreateCallback](#unregistercreatecallback)**(handle: int) | void |
| **[RegisterDestroyCallback](#registerdestroycallback)**(callback: callable) | int |
| **[RegisterDestroyCallback](#registerdestroycallback-1)**(context: any, callback: callable) | int |
| **[UnregisterDestroyCallback](#unregisterdestroycallback)**(handle: int) | void |
| **[RegisterInitCallback](#registerinitcallback)**(callback: callable) | int |
| **[RegisterInitCallback](#registerinitcallback-1)**(context: any, callback: callable) | int |
| **[UnregisterInitCallback](#unregisterinitcallback)**(handle: int) | void |
| **[RegisterDeinitCallback](#registerdeinitcallback)**(callback: callable) | int |
| **[RegisterDeinitCallback](#registerdeinitcallback-1)**(context: any, callback: callable) | int |
| **[UnregisterDeinitCallback](#unregisterdeinitcallback)**(handle: int) | void |

### Operators

| Operator | Rhs | Returns |
| -------- | --- | ------- |
| **[==](#op-eq)** | [Entity](/vext/ref/shared/type/entity) | bool |

## Properties

### {{% prop-heading "typeInfo" true %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

### {{% prop-heading "data" true %}}

> **[DataContainer](/vext/ref/shared/type/datacontainer)** \| **nil**

### {{% prop-heading "uniqueId" true %}}

> **int**

### {{% prop-heading "instanceId" true %}}

> **int**

### {{% prop-heading "bus" true %}}

> **[EntityBus](/vext/ref/shared/type/entitybus)** \| **nil**

## Methods

### Init {#init}

> **Init**(realm: [Realm](/vext/ref/fb/realm), enableAllowed: bool, isGhost: bool)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **realm** | [Realm](/vext/ref/fb/realm) |  |
| **enableAllowed** | bool |  |
| **isGhost** | bool |  |

### Destroy {#destroy}

> **Destroy**()

### Is {#is}

> **Is**(typeName: string): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **typeName** | string |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

### FireEvent {#fireevent}

> **FireEvent**(eventId: int)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **eventId** | int |  |

### FireEvent {#fireevent-1}

> **FireEvent**(eventName: string)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **eventName** | string |  |

### FireEvent {#fireevent-2}

> **FireEvent**(event: [EntityEvent](/vext/ref/shared/type/entityevent))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **event** | [EntityEvent](/vext/ref/shared/type/entityevent) |  |

### PropertyChanged {#propertychanged}

> **PropertyChanged**(propertyId: int)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **propertyId** | int |  |

### PropertyChanged {#propertychanged-1}

> **PropertyChanged**(propertyId: int, value: any)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **propertyId** | int |  |
| **value** | any |  |

### PropertyChanged {#propertychanged-2}

> **PropertyChanged**(propertyName: string)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **propertyName** | string |  |

### PropertyChanged {#propertychanged-3}

> **PropertyChanged**(propertyName: string, value: any)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **propertyName** | string |  |
| **value** | any |  |

### RegisterEventCallback {#registereventcallback}

> **RegisterEventCallback**(callback: callable): int

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **callback** | callable | A callback in the form `function(entity: Entity, event: EntityEvent): bool`. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |

### RegisterEventCallback {#registereventcallback-1}

> **RegisterEventCallback**(context: any, callback: callable): int

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **context** | any | A context value to pass to the callback. |
| **callback** | callable | A callback in the form `function(context: any, entity: Entity, event: EntityEvent): bool`. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |

### UnregisterEventCallback {#unregistereventcallback}

> **UnregisterEventCallback**(handle: int)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **handle** | int |  |

### RegisterCreateCallback {#registercreatecallback}

> **RegisterCreateCallback**(callback: callable): int

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **callback** | callable | A callback in the form `function(entity: Entity, transform: LinearTransform): bool`. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |

### RegisterCreateCallback {#registercreatecallback-1}

> **RegisterCreateCallback**(context: any, callback: callable): int

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **context** | any | A context value to pass to the callback. |
| **callback** | callable | A callback in the form `function(context: any, entity: Entity, transform: LinearTransform): bool`. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |

### UnregisterCreateCallback {#unregistercreatecallback}

> **UnregisterCreateCallback**(handle: int)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **handle** | int |  |

### RegisterDestroyCallback {#registerdestroycallback}

> **RegisterDestroyCallback**(callback: callable): int

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **callback** | callable | A callback in the form `function(entity: Entity): bool`. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |

### RegisterDestroyCallback {#registerdestroycallback-1}

> **RegisterDestroyCallback**(context: any, callback: callable): int

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **context** | any | A context value to pass to the callback. |
| **callback** | callable | A callback in the form `function(context: any, entity: Entity): bool`. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |

### UnregisterDestroyCallback {#unregisterdestroycallback}

> **UnregisterDestroyCallback**(handle: int)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **handle** | int |  |

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

## Operators

### operator== {#op-eq}

> operator==(rhs: [Entity](/vext/ref/shared/type/entity)): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **rhs** | [Entity](/vext/ref/shared/type/entity) |  |
#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

