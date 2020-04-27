---
title: GameEntity
---

Inherits from [SpatialEntity](/vext/ref/shared/type/spatialentity)

## Summary

### Constructors

|  |
| --- |
| **[GameEntity](#constructor-0)**(other: [Entity](/vext/ref/shared/type/entity)) |
| **[GameEntity](#constructor-1)**(other: [SpatialEntity](/vext/ref/shared/type/spatialentity)) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Spawn](#spawn)**(transform: [LinearTransform](/vext/ref/shared/type/lineartransform), fireEnableEvent: bool) | void |
| **[RegisterSpawnCallback](#registerspawncallback)**(callback: callable) | int |
| **[RegisterSpawnCallback](#registerspawncallback-1)**(context: any, callback: callable) | int |
| **[UnregisterSpawnCallback](#unregisterspawncallback)**(handle: int) | void |
| **[RegisterUnspawnCallback](#registerunspawncallback)**(callback: callable) | int |
| **[RegisterUnspawnCallback](#registerunspawncallback-1)**(context: any, callback: callable) | int |
| **[UnregisterUnspawnCallback](#unregisterunspawncallback)**(handle: int) | void |

## Constructors

### GameEntity {#constructor-0}

> **GameEntity**(other: [Entity](/vext/ref/shared/type/entity))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Entity](/vext/ref/shared/type/entity) |  |

### GameEntity {#constructor-1}

> **GameEntity**(other: [SpatialEntity](/vext/ref/shared/type/spatialentity))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntity](/vext/ref/shared/type/spatialentity) |  |

## Methods

### Spawn {#spawn}

> **Spawn**(transform: [LinearTransform](/vext/ref/shared/type/lineartransform), fireEnableEvent: bool)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **transform** | [LinearTransform](/vext/ref/shared/type/lineartransform) |  |
| **fireEnableEvent** | bool |  |

### RegisterSpawnCallback {#registerspawncallback}

> **RegisterSpawnCallback**(callback: callable): int

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **callback** | callable | A callback in the form `function(entity: Entity): bool`. |

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
| **callback** | callable | A callback in the form `function(context: any, entity: Entity): bool`. |

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

### RegisterUnspawnCallback {#registerunspawncallback}

> **RegisterUnspawnCallback**(callback: callable): int

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **callback** | callable | A callback in the form `function(entity: Entity): bool`. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |

### RegisterUnspawnCallback {#registerunspawncallback-1}

> **RegisterUnspawnCallback**(context: any, callback: callable): int

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **context** | any | A context value to pass to the callback. |
| **callback** | callable | A callback in the form `function(context: any, entity: Entity): bool`. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |

### UnregisterUnspawnCallback {#unregisterunspawncallback}

> **UnregisterUnspawnCallback**(handle: int)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **handle** | int |  |

