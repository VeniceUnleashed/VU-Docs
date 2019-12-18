---
title: GameEntity (Client Class)
---
### Base Classes

[SpatialEntity](/vext/ref/cls/shr/spatialentity)

## Description

## Constructors

| Constructor                                                                                                | Description |
| ---------------------------------------------------------------------------------------------------------- | ----------- |
| [GameEntity](/vext/ref/cls/clt/gameentity)([Entity](/vext/ref/cls/shr/entity) **ref**)               |             |
| [GameEntity](/vext/ref/cls/clt/gameentity)([SpatialEntity](/vext/ref/cls/shr/spatialentity) **ref**) |             |

## Static Members

| Type                                                    | Name                | Description |
| ------------------------------------------------------- | ------------------- | ----------- |
| [TypeInformation](/vext/ref/cls/shr/typeinformation) | GameEntity.typeInfo |             |

## Properties

| Name     | Type                                                    | Writable | Description |
| -------- | ------------------------------------------------------- | -------- | ----------- |
| typeInfo | [TypeInformation](/vext/ref/cls/shr/typeinformation) |          |             |

## Methods

| Type | Name                                                    | Parameters                                                                                      |
| ---- | ------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| void | [Spawn](#spawn)                                         | [LinearTransform](/vext/ref/cls/shr/lineartransform) **transform**, bool **fireEnableEvent** |
| int  | [RegisterSpawnCallback](#registerspawncallback)         | function **cb**                                                                                 |
| int  | [RegisterSpawnCallback](#registerspawncallback)         | object, **obj**, function **cb**                                                                |
| int  | [UnregisterSpawnCallback](#unregisterspawncallback)     | int **handle**                                                                                  |
| int  | [RegisterUnspawnCallback](#registerunspawncallback)     | function **cb**                                                                                 |
| int  | [RegisterUnspawnCallback](#registerunspawncallback)     | object, **obj**, function **cb**                                                                |
| int  | [UnregisterUnspawnCallback](#unregisterunspawncallback) | int **handle**                                                                                  |

### Spawn

> void **Spawn**([LinearTransform](/vext/ref/cls/shr/lineartransform) **transform**, bool **fireEnableEvent**)

#### Parameters

| Name            | Type                                                    | Description |
| --------------- | ------------------------------------------------------- | ----------- |
| transform       | [LinearTransform](/vext/ref/cls/shr/lineartransform) |             |
| fireEnableEvent | bool                                                    |             |

### RegisterSpawnCallback

> int **RegisterSpawnCallback**(function cb)

#### Parameters

| Name | Type     | Description                                       |
| ---- | -------- | ------------------------------------------------- |
| cb   | function | Callback Handler should be `function(Entity ent)` |

### RegisterSpawnCallback

> int **RegisterSpawnCallback**(object obj, function cb)

#### Parameters

| Name | Type     | Description |
| ---- | -------- | ----------- |
| obj  | object   |             |
| cb   | function |             |

### UnregisterSpawnCallback

> int **UnregisterSpawnCallback**(int handle)

#### Parameters

| Name   | Type | Description |
| ------ | ---- | ----------- |
| handle | int  |             |

### RegisterUnspawnCallback

> int **RegisterUnspawnCallback**(function cb)

#### Parameters

| Name | Type     | Description                                       |
| ---- | -------- | ------------------------------------------------- |
| cb   | function | Callback Handler should be `function(Entity ent)` |

### RegisterUnspawnCallback

> int **RegisterUnspawnCallback**(object obj, function cb)

#### Parameters

| Name | Type     | Description |
| ---- | -------- | ----------- |
| obj  | object   |             |
| cb   | function |             |

### UnregisterUnspawnCallback

> int **UnregisterUnspawnCallback**(int handle)

#### Parameters

| Name   | Type | Description |
| ------ | ---- | ----------- |
| handle | int  |             |
