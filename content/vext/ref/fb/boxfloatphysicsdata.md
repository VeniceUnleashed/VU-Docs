---
title: BoxFloatPhysicsData
---
### Base Classes

[FloatPhysicsData](/vext/ref/fb/floatphysicsdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| BoxFloatPhysicsData()                                                          | Create a new instance of this container type.                                                                                 |
| BoxFloatPhysicsData(BoxFloatPhysicsData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| BoxFloatPhysicsData([FloatPhysicsData](/vext/ref/fb/floatphysicsdata/) other)                | Upcast an instance of type [FloatPhysicsData](/vext/ref/fb/floatphysicsdata/) to [BoxFloatPhysicsData](/vext/ref/fb/boxfloatphysicsdata/).                |
| BoxFloatPhysicsData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BoxFloatPhysicsData](/vext/ref/fb/boxfloatphysicsdata/). |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [BoxFloatPhysicsData](/vext/ref/fb/boxfloatphysicsdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BoxFloatPhysicsData](/vext/ref/fb/boxfloatphysicsdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
