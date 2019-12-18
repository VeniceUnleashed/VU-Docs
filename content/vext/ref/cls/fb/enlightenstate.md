---
title: EnlightenState (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| EnlightenState()                                                          | Create a new instance of this container type.                                                                       |
| EnlightenState(EnlightenState other)                                      | Create a reference copy of an instance of the same type.                                                            |
| EnlightenState([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [EnlightenState](EnlightenState). |

## Properties

| Name                     | Type                              | Description |
| ------------------------ | --------------------------------- | ----------- |
| skyBoxGroundColor        | [Vec3](/vext/ref/cls/shr/Vec3) |             |
| skyBoxSunLightColor      | [Vec3](/vext/ref/cls/shr/Vec3) |             |
| skyBoxBackLightColor     | [Vec3](/vext/ref/cls/shr/Vec3) |             |
| skyBoxSkyColor           | [Vec3](/vext/ref/cls/shr/Vec3) |             |
| sunScale                 | number                            |             |
| outputScale              | number                            |             |
| bounceScale              | number                            |             |
| skyBoxSunLightColorSize  | number                            |             |
| skyBoxBackLightRotationY | number                            |             |
| skyBoxBackLightColorSize | number                            |             |
| skyBoxBackLightRotationX | number                            |             |
| skyBoxEnable             | bool                              |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [EnlightenState](EnlightenState) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [EnlightenState](EnlightenState) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
