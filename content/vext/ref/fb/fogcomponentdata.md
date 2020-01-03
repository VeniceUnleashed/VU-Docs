---
title: FogComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| FogComponentData()                                                          | Create a new instance of this container type.                                                                           |
| FogComponentData(FogComponentData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| FogComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [FogComponentData](/vext/ref/fb/fogcomponentdata/).                      |
| FogComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [FogComponentData](/vext/ref/fb/fogcomponentdata/).                    |
| FogComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [FogComponentData](/vext/ref/fb/fogcomponentdata/).              |
| FogComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FogComponentData](/vext/ref/fb/fogcomponentdata/). |

## Properties

| Name                     | Type                              | Description |
| ------------------------ | --------------------------------- | ----------- |
| curve                    | [Vec4](/vext/ref/shared/class/vec4) |             |
| fogColorCurve            | [Vec4](/vext/ref/shared/class/vec4) |             |
| fogColor                 | [Vec3](/vext/ref/shared/class/vec3) |             |
| fogColorStart            | number                            |             |
| fogDistanceMultiplier    | number                            |             |
| realm                    | [Realm](/vext/ref/fb/realm/)                    |             |
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
| [FogComponentData](/vext/ref/fb/fogcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FogComponentData](/vext/ref/fb/fogcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
