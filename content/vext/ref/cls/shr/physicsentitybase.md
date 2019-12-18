---
title: PhysicsEntityBase (Shared Class)
---
### Base Classes

[SpatialEntity](/vext/ref/cls/shr/spatialentity)

## Description

## Constructors

| Constructor                                                                                                              | Description |
| ------------------------------------------------------------------------------------------------------------------------ | ----------- |
| [PhysicsEntityBase](/vext/ref/cls/shr/physicsentitybase)([Entity](/vext/ref/cls/shr/entity) **ref**)               |             |
| [PhysicsEntityBase](/vext/ref/cls/shr/physicsentitybase)([SpatialEntity](/vext/ref/cls/shr/spatialentity) **ref**) |             |

## Static Members

| Type                                                    | Name                       | Description |
| ------------------------------------------------------- | -------------------------- | ----------- |
| [TypeInformation](/vext/ref/cls/shr/typeinformation) | PhysicsEntityBase.typeInfo |             |

## Properties

| Name            | Type                                                    | Writable | Description |
| --------------- | ------------------------------------------------------- | -------- | ----------- |
| typeInfo        | [TypeInformation](/vext/ref/cls/shr/typeinformation) |          |             |
| mass            | float                                                   |          |             |
| invMass         | float                                                   |          |             |
| linearVelocity  | [Vec3](/vext/ref/cls/shr/vec3)                       | Y        |             |
| angularVelocity | [Vec3](/vext/ref/cls/shr/vec3)                       | Y        |             |
| position        | [Vec3](/vext/ref/cls/shr/vec3)                       |          |             |
| sleeping        | bool                                                    | Y        |             |
| addedToWorld    | bool                                                    |          |             |
| partCount       | int                                                     |          |             |
| gravityFactor   | float                                                   | Y        |             |
| friction        | float                                                   | Y        |             |
| restitution     | float                                                   | Y        |             |
| linearDamping   | float                                                   | Y        |             |
| angularDamping  | float                                                   | Y        |             |

## Methods

| Type                                                | Name                                          | Parameters                                               |
| --------------------------------------------------- | --------------------------------------------- | -------------------------------------------------------- |
| void                                                | [AddToWorld](#addtoworld)                     |                                                          |
| void                                                | [RemoveFromWorld](#removefromworld)           |                                                          |
| [Entity](/vext/ref/cls/shr/entity)               | [GetPart](#getpart)                           | int **index**                                            |
| [QuatTransform](/vext/ref/cls/shr/quattransform) | [GetPartTransform](#getparttransform)         | int **index**                                            |
| [DataContainer](/vext/ref/cls/shr/datacontainer) | [GetPartMaterial](#getpartmaterial)           | int **index**                                            |
| [DataContainer](/vext/ref/cls/shr/datacontainer) | [GetPartMaterial](#getpartmaterial)           | int **index**, [Vec3](/vext/ref/cls/shr/vec3) **pos** |
| int                                                 | [GetPartMaterialFlags](#getpartmaterialflags) | int **index**                                            |
| int                                                 | [GetProperty](#getproperty)                   | int **property**                                         |
| void                                                | [SetProperty](#setproperty)                   | int **property**, int **value**                          |
| int                                                 | [RemoveProperty](#removeproperty)             | int **property**                                         |
| void                                                | [SetMass](#setmass)                           | float **mass**, bool **updateInertia**                   |

### AddToWorld

> void **AddToWorld**()

### RemoveFromWorld

> void **RemoveFromWorld**()

### GetPart

> [Entity](/vext/ref/cls/shr/entity) **GetPart**(int **index**)

#### Parameters

| Name  | Type | Description |
| ----- | ---- | ----------- |
| index | int  |             |

### GetPartTransform

> [QuatTransform](/vext/ref/cls/shr/quattransform) **GetPartTransform**(int **index**)

#### Parameters

| Name  | Type | Description |
| ----- | ---- | ----------- |
| index | int  |             |

### GetPartMaterial

> [DataContainer](/vext/ref/cls/shr/datacontainer) **GetPartMaterial**(int **index**)

#### Parameters

| Name  | Type | Description |
| ----- | ---- | ----------- |
| index | int  |             |

### GetPartMaterial

> [DataContainer](/vext/ref/cls/shr/datacontainer) **GetPartMaterial**(int **index**, [Vec3](/vext/ref/cls/shr/vec3) **pos**)

#### Parameters

| Name  | Type                              | Description |
| ----- | --------------------------------- | ----------- |
| index | int                               |             |
| pos   | [Vec3](/vext/ref/cls/shr/vec3) |             |

### GetPartMaterialFlags

> int **GetPartMaterialFlags**(int **index**)

#### Parameters

| Name  | Type | Description |
| ----- | ---- | ----------- |
| index | int  |             |

### GetProperty

> int **GetProperty**(int **property**)

#### Parameters

| Name     | Type | Description |
| -------- | ---- | ----------- |
| property | int  |             |

### SetProperty

> void **SetProperty**(int **property**, int **value**)

#### Parameters

| Name     | Type | Description |
| -------- | ---- | ----------- |
| property | int  |             |
| value    | int  |             |

### RemoveProperty

> int **RemoveProperty**(int **property**)

#### Parameters

| Name     | Type | Description |
| -------- | ---- | ----------- |
| property | int  |             |

### SetMass

> int **SetMass**(float **mass**, bool **updateInertia**)

#### Parameters

| Name          | Type  | Description |
| ------------- | ----- | ----------- |
| mass          | float |             |
| updateInertia | bool  |             |
