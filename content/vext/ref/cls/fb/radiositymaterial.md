---
title: RadiosityMaterial (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| RadiosityMaterial()                                                          | Create a new instance of this container type.                                                                             |
| RadiosityMaterial(RadiosityMaterial other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| RadiosityMaterial([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [RadiosityMaterial](RadiosityMaterial). |

## Properties

| Name     | Type                              | Description |
| -------- | --------------------------------- | ----------- |
| color    | [Vec3](/vext/ref/cls/shr/Vec3) |             |
| name     | string                            |             |
| emissive | bool                              |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [RadiosityMaterial](RadiosityMaterial) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [RadiosityMaterial](RadiosityMaterial) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
