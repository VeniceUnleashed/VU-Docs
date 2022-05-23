---
title: Component
---

Inherits from [EntityBusPeer](/vext/ref/shared/type/entitybuspeer)

## Summary

### Constructors

|  |
| --- |
| **[Component](#constructor-0)**(other: [EntityBusPeer](/vext/ref/shared/type/entitybuspeer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "componentData" true >}} | [DataContainer](/vext/ref/shared/type/datacontainer) |
| {{< prop "localBoundingBox" true >}} | [AxisAlignedBox](/vext/ref/shared/type/axisalignedbox) \| nil |

### Methods

| Method | Returns |
| ------ | ------- |
| **[SetTransform](#settransform)**(transform: [LinearTransform](/vext/ref/shared/type/lineartransform)) | void |
| **[RegisterDeinitCallback](#registerdeinitcallback)**(callback: callable) | int |
| **[RegisterDeinitCallback](#registerdeinitcallback-1)**(context: any, callback: callable) | int |
| **[UnregisterDeinitCallback](#unregisterdeinitcallback)**(handle: int) | void |
| **[RegisterSpawnCallback](#registerspawncallback)**(callback: callable) | int |
| **[RegisterSpawnCallback](#registerspawncallback-1)**(context: any, callback: callable) | int |
| **[UnregisterSpawnCallback](#unregisterspawncallback)**(handle: int) | void |
| **[RegisterUnSpawnCallback](#registerunspawncallback)**(callback: callable) | int |
| **[RegisterUnSpawnCallback](#registerunspawncallback-1)**(context: any, callback: callable) | int |
| **[UnregisterUnSpawnCallback](#unregisterunspawncallback)**(handle: int) | void |
| **[RegisterImpulseCallback](#registerimpulsecallback)**(callback: callable) | int |
| **[RegisterImpulseCallback](#registerimpulsecallback-1)**(context: any, callback: callable) | int |
| **[UnregisterImpulseCallback](#unregisterimpulsecallback)**(handle: int) | void |
| **[RegisterComponentMessageCallback](#registercomponentmessagecallback)**(callback: callable) | int |
| **[RegisterComponentMessageCallback](#registercomponentmessagecallback-1)**(context: any, callback: callable) | int |
| **[UnregisterComponentMessageCallback](#unregistercomponentmessagecallback)**(handle: int) | void |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "Component" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### Component {#constructor-0}

> **Component**(other: [EntityBusPeer](/vext/ref/shared/type/entitybuspeer))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityBusPeer](/vext/ref/shared/type/entitybuspeer) |  |

## Properties

### {{% prop-heading "componentData" true %}}

> **[DataContainer](/vext/ref/shared/type/datacontainer)**

### {{% prop-heading "localBoundingBox" true %}}

> **[AxisAlignedBox](/vext/ref/shared/type/axisalignedbox)** \| **nil**

## Methods

### SetTransform {#settransform}

> **SetTransform**(transform: [LinearTransform](/vext/ref/shared/type/lineartransform))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **transform** | [LinearTransform](/vext/ref/shared/type/lineartransform) |  |

### RegisterDeinitCallback {#registerdeinitcallback}

> **RegisterDeinitCallback**(callback: callable): int

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **callback** | callable | A callback in the form `function(component: Component): bool`. |

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
| **callback** | callable | A callback in the form `function(context: any, component: Component): bool`. |

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

### RegisterSpawnCallback {#registerspawncallback}

> **RegisterSpawnCallback**(callback: callable): int

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **callback** | callable | A callback in the form `function(component: Component): bool`. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |

### RegisterSpawnCallback {#registerspawncallback-1}

> **RegisterSpawnCallback**(context: any, callback: callable): int

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **context** | any | A context value to pass to the callback. |
| **callback** | callable | A callback in the form `function(context: any, component: Component): bool`. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |

### UnregisterSpawnCallback {#unregisterspawncallback}

> **UnregisterSpawnCallback**(handle: int)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **handle** | int |  |

### RegisterUnSpawnCallback {#registerunspawncallback}

> **RegisterUnSpawnCallback**(callback: callable): int

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **callback** | callable | A callback in the form `function(component: Component): bool`. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |

### RegisterUnSpawnCallback {#registerunspawncallback-1}

> **RegisterUnSpawnCallback**(context: any, callback: callable): int

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **context** | any | A context value to pass to the callback. |
| **callback** | callable | A callback in the form `function(context: any, component: Component): bool`. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |

### UnregisterUnSpawnCallback {#unregisterunspawncallback}

> **UnregisterUnSpawnCallback**(handle: int)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **handle** | int |  |

### RegisterImpulseCallback {#registerimpulsecallback}

> **RegisterImpulseCallback**(callback: callable): int

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **callback** | callable | A callback in the form `function(component: Component, data: ImpulseData | null): bool`. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |

### RegisterImpulseCallback {#registerimpulsecallback-1}

> **RegisterImpulseCallback**(context: any, callback: callable): int

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **context** | any | A context value to pass to the callback. |
| **callback** | callable | A callback in the form `function(context: any, component: Component, data: ImpulseData | null): bool`. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |

### UnregisterImpulseCallback {#unregisterimpulsecallback}

> **UnregisterImpulseCallback**(handle: int)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **handle** | int |  |

### RegisterComponentMessageCallback {#registercomponentmessagecallback}

> **RegisterComponentMessageCallback**(callback: callable): int

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **callback** | callable | A callback in the form `function(component: Component, message: Message): bool`. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |

### RegisterComponentMessageCallback {#registercomponentmessagecallback-1}

> **RegisterComponentMessageCallback**(context: any, callback: callable): int

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **context** | any | A context value to pass to the callback. |
| **callback** | callable | A callback in the form `function(context: any, component: Component, message: Message): bool`. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |

### UnregisterComponentMessageCallback {#unregistercomponentmessagecallback}

> **UnregisterComponentMessageCallback**(handle: int)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **handle** | int |  |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

