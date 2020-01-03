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
| FogEffectState([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FogEffectState](/vext/ref/fb/fogeffectstate/). |

## Properties

| Name                     | Type                              | Description |
| ------------------------ | --------------------------------- | ----------- |
| fogColorCurve            | [Vec4](/vext/ref/shared/class/vec4) |             |
| curve                    | [Vec4](/vext/ref/shared/class/vec4) |             |
| fogColor                 | [Vec3](/vext/ref/shared/class/vec3) |             |
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
| [FogEffectState](/vext/ref/fb/fogeffectstate/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FogEffectState](/vext/ref/fb/fogeffectstate/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
