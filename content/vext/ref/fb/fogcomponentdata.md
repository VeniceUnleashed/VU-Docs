---
title: FogComponentData
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| FogComponentData()                                                          | Create a new instance of this container type.                                                                           |
| FogComponentData(FogComponentData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| FogComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [FogComponentData](FogComponentData).                      |
| FogComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [FogComponentData](FogComponentData).                    |
| FogComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [FogComponentData](FogComponentData).              |
| FogComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FogComponentData](FogComponentData). |

## Properties

| Name                     | Type                              | Description |
| ------------------------ | --------------------------------- | ----------- |
| curve                    | [Vec4](/vext/ref/shared/class/Vec4) |             |
| fogColorCurve            | [Vec4](/vext/ref/shared/class/Vec4) |             |
| fogColor                 | [Vec3](/vext/ref/shared/class/Vec3) |             |
| fogColorStart            | number                            |             |
| fogDistanceMultiplier    | number                            |             |
| realm                    | [Realm](Realm)                    |             |
| endValue                 | number                            |             |
| transparencyFadeStart    | number                            |             |
| start                    | number                            |             |
| transparencyFadeEnd      | number                            |             |
| fogColorEnd              | number                            |             |
| transparencyFadeClamp    | number                            |             |
| heightFogVisibilityRange | number                            |             |
| heightFogAltitude        | number                            |             |
| heightFogDepth           | number                            |             |
| heightFogFollowCamera    | number                            |             |
| fogGradientEnable        | bool                              |             |
| enable                   | bool                              |             |
| heightFogEnable          | bool                              |             |
| fogColorEnable           | bool                              |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [FogComponentData](FogComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FogComponentData](FogComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
