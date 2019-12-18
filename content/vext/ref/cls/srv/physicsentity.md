---
title: PhysicsEntity (Server Class)
---
### Base Classes

[GameEntity](/vext/ref/cls/srv/gameentity)

## Description

## Constructors

| Constructor                                                                                                      | Description |
| ---------------------------------------------------------------------------------------------------------------- | ----------- |
| [PhysicsEntity](/vext/ref/cls/srv/physicsentity)([Entity](/vext/ref/cls/shr/entity) **ref**)               |             |
| [PhysicsEntity](/vext/ref/cls/srv/physicsentity)([SpatialEntity](/vext/ref/cls/shr/spatialentity) **ref**) |             |
| [PhysicsEntity](/vext/ref/cls/srv/physicsentity)([GameEntity](/vext/ref/cls/srv/gameentity) **ref**)       |             |

## Static Members

| Type                                                    | Name                   | Description |
| ------------------------------------------------------- | ---------------------- | ----------- |
| [TypeInformation](/vext/ref/cls/shr/typeinformation) | PhysicsEntity.typeInfo |             |

## Properties

| Name                  | Type                                                        | Writable | Description |
| --------------------- | ----------------------------------------------------------- | -------- | ----------- |
| typeInfo              | [TypeInformation](/vext/ref/cls/shr/typeinformation)     |          |             |
| internalHealth        | float                                                       | Y        |             |
| velocity              | [Vec3](/vext/ref/cls/shr/vec3)                           |          |             |
| defaultMaterial       | [DataContainer](/vext/ref/cls/shr/datacontainer)         |          |             |
| belongsInPhysicsWorld | bool                                                        |          |             |
| isPredestructible     | bool                                                        |          |             |
| physicsEntityBase     | [PhysicsEntityBase](/vext/ref/cls/shr/physicsentitybase) |          |             |

## Methods

| Type                                                | Name                                                        | Parameters                                             |
| --------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------------------ |
| [DataContainer](/vext/ref/cls/shr/datacontainer) | [GetMaterial](#getmaterial)                                 | [Vec3](/vext/ref/cls/shr/vec3) **position**         |
| void                                                | [SetActiveHealthState](#setactivehealthstate)               | int **state**                                          |
| void                                                | [ApplyDamage](#applydamage)                                 | [DamageInfo](/vext/ref/cls/srv/damageinfo) **info** |
| int                                                 | [RegisterCollisionCallback](#registercollisioncallback)     | function **cb**                                        |
| int                                                 | [RegisterCollisionCallback](#registercollisioncallback)     | object, **obj**, function **cb**                       |
| int                                                 | [UnregisterCollisionCallback](#unregistercollisioncallback) | int **handle**                                         |
| int                                                 | [RegisterDamageCallback](#registerdamagecallback)           | function **cb**                                        |
| int                                                 | [RegisterDamageCallback](#registerdamagecallback)           | object, **obj**, function **cb**                       |
| int                                                 | [UnregisterDamageCallback](#unregisterdamagecallback)       | int **handle**                                         |
| int                                                 | [RegisterInteractCallback](#registerinteractcallback)       | function **cb**                                        |
| int                                                 | [RegisterInteractCallback](#registerinteractcallback)       | object, **obj**, function **cb**                       |
| int                                                 | [UnregisterInteractCallback](#unregisterinteractcallback)   | int **handle**                                         |

### GetMaterial

> [DataContainer](/vext/ref/cls/shr/datacontainer) **GetMaterial**([Vec3](/vext/ref/cls/shr/vec3) **position**)

#### Parameters

| Name     | Type                              | Description |
| -------- | --------------------------------- | ----------- |
| position | [Vec3](/vext/ref/cls/shr/vec3) |             |

### SetActiveHealthState

> void **SetActiveHealthState**(int **state**)

#### Parameters

| Name  | Type | Description |
| ----- | ---- | ----------- |
| state | int  |             |

### ApplyDamage

> void **ApplyDamage**([DamageInfo](/vext/ref/cls/srv/damageinfo) **info**)

#### Parameters

| Name | Type                                          | Description |
| ---- | --------------------------------------------- | ----------- |
| info | [DamageInfo](/vext/ref/cls/srv/damageinfo) |             |

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

### RegisterInteractCallback

> int **RegisterInteractCallback**(function cb)

#### Parameters

| Name | Type     | Description                                                              |
| ---- | -------- | ------------------------------------------------------------------------ |
| cb   | function | Callback Handler should be `function(Entity ent, SoldierEntity soldier)` |

### RegisterInteractCallback

> int **RegisterInteractCallback**(object obj, function cb)

#### Parameters

| Name | Type     | Description |
| ---- | -------- | ----------- |
| obj  | object   |             |
| cb   | function |             |

### UnregisterInteractCallback

> int **UnregisterInteractCallback**(int handle)

#### Parameters

| Name   | Type | Description |
| ------ | ---- | ----------- |
| handle | int  |             |
