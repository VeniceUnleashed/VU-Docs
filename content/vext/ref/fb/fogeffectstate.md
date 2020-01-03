---
title: FogEffectState
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| FogEffectState()                                                          | Create a new instance of this container type.                                                                       |
| FogEffectState(FogEffectState other)                                      | Create a reference copy of an instance of the same type.                                                            |
| FogEffectState([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FogEffectState](FogEffectState). |

## Properties

| Name                     | Type                              | Description |
| ------------------------ | --------------------------------- | ----------- |
| fogColorCurve            | [Vec4](/vext/ref/shared/class/Vec4) |             |
| curve                    | [Vec4](/vext/ref/shared/class/Vec4) |             |
| fogColor                 | [Vec3](/vext/ref/shared/class/Vec3) |             |
| start                    | number                            |             |
| endValue                 | number                            |             |
| fogColorStart            | number                            |             |
| fogColorEnd              | number                            |             |
| heightFogVisibilityRange | number                            |             |
| transparencyFadeStart    | number                            |             |
| transparencyFadeEnd      | number                            |             |
| transparencyFadeClamp    | number                            |             |
| heightFogDepth           | number                            |             |
| heightFogFollowCamera    | number                            |             |
| heightFogAltitude        | number                            |             |
| heightFogEnable          | bool                              |             |
| enable                   | bool                              |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [FogEffectState](FogEffectState) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FogEffectState](FogEffectState) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
