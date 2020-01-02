---
title: PhysicsEntity
---
### Base Classes

[GameEntity](/vext/ref/cls/clt/gameentity)

## Description

## Constructors

| Constructor                                                                                                      | Description |
| ---------------------------------------------------------------------------------------------------------------- | ----------- |
| [PhysicsEntity](/vext/ref/cls/clt/physicsentity)([Entity](/vext/ref/shared/class/entity) **ref**)               |             |
| [PhysicsEntity](/vext/ref/cls/clt/physicsentity)([SpatialEntity](/vext/ref/shared/class/spatialentity) **ref**) |             |
| [PhysicsEntity](/vext/ref/cls/clt/physicsentity)([GameEntity](/vext/ref/cls/clt/gameentity) **ref**)       |             |

## Static Members

| Type                                                    | Name                   | Description |
| ------------------------------------------------------- | ---------------------- | ----------- |
| [TypeInformation](/vext/ref/shared/class/typeinformation) | PhysicsEntity.typeInfo |             |

## Properties

| Name                  | Type                                                        | Writable | Description |
| --------------------- | ----------------------------------------------------------- | -------- | ----------- |
| typeInfo              | [TypeInformation](/vext/ref/shared/class/typeinformation)     |          |             |
| internalHealth        | float                                                       | Y        |             |
| velocity              | [Vec3](/vext/ref/shared/class/vec3)                           |          |             |
| defaultMaterial       | [DataContainer](/vext/ref/shared/class/datacontainer)         |          |             |
| belongsInPhysicsWorld | bool                                                        |          |             |
| isAnimatable          | bool                                                        |          |             |
| physicsEntityBase     | [PhysicsEntityBase](/vext/ref/shared/class/physicsentitybase) |          |             |

## Methods

| Type                                                | Name                                                        | Parameters                                     |
| --------------------------------------------------- | ----------------------------------------------------------- | ---------------------------------------------- |
| [DataContainer](/vext/ref/shared/class/datacontainer) | [GetMaterial](#getmaterial)                                 | [Vec3](/vext/ref/shared/class/vec3) **position** |
| void                                                | [ReenablePart](#reenablepart)                               | int **index**                                  |
| int                                                 | [RegisterCollisionCallback](#registercollisioncallback)     | function **cb**                                |
| int                                                 | [RegisterCollisionCallback](#registercollisioncallback)     | object, **obj**, function **cb**               |
| int                                                 | [UnregisterCollisionCallback](#unregistercollisioncallback) | int **handle**                                 |
| int                                                 | [RegisterDamageCallback](#registerdamagecallback)           | function **cb**                                |
| int                                                 | [RegisterDamageCallback](#registerdamagecallback)           | object, **obj**, function **cb**               |
| int                                                 | [UnregisterDamageCallback](#unregisterdamagecallback)       | int **handle**                                 |

### GetMaterial

> [DataContainer](/vext/ref/shared/class/datacontainer) **GetMaterial**([Vec3](/vext/ref/shared/class/vec3) **position**)

#### Parameters

| Name     | Type                              | Description |
| -------- | --------------------------------- | ----------- |
| position | [Vec3](/vext/ref/shared/class/vec3) |             |

### ReenablePart

> void **ReenablePart**(int **index**)

#### Parameters

| Name  | Type | Description |
| ----- | ---- | ----------- |
| index | int  |             |

### RegisterCollisionCallback

> int **RegisterCollisionCallback**(function cb)

#### Parameters

| Name | Type     | Description                                                           |
| ---- | -------- | --------------------------------------------------------------------- |
| cb   | function | Callback Handler should be `function(Entity ent, CollisionInfo info)` |

### RegisterCollisionCallback

> int **RegisterCollisionCallback**(object obj, function cb)

#### Parameters

| Name | Type     | Description |
| ---- | -------- | ----------- |
| obj  | object   |             |
| cb   | function |             |

### UnregisterCollisionCallback

> int **UnregisterCollisionCallback**(int handle)

#### Parameters

| Name   | Type | Description |
| ------ | ---- | ----------- |
| handle | int  |             |

### RegisterDamageCallback

> int **RegisterDamageCallback**(function cb)

#### Parameters

| Name | Type     | Description                                                                                   |
| ---- | -------- | --------------------------------------------------------------------------------------------- |
| cb   | function | Callback Handler should be `function(Entity ent, DamageInfo info, DamageGiverInfo giverInfo)` |

### RegisterDamageCallback

> int **RegisterDamageCallback**(object obj, function cb)

#### Parameters

| Name | Type     | Description |
| ---- | -------- | ----------- |
| obj  | object   |             |
| cb   | function |             |

### UnregisterDamageCallback

> int **UnregisterDamageCallback**(int handle)

#### Parameters

| Name   | Type | Description |
| ------ | ---- | ----------- |
| handle | int  |             |
