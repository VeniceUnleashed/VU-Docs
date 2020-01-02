---
title: BoxFloatPhysicsData
---
### Base Classes

[FloatPhysicsData](FloatPhysicsData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| BoxFloatPhysicsData()                                                          | Create a new instance of this container type.                                                                                 |
| BoxFloatPhysicsData(BoxFloatPhysicsData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| BoxFloatPhysicsData([FloatPhysicsData](FloatPhysicsData) other)                | Upcast an instance of type [FloatPhysicsData](FloatPhysicsData) to [BoxFloatPhysicsData](BoxFloatPhysicsData).                |
| BoxFloatPhysicsData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BoxFloatPhysicsData](BoxFloatPhysicsData). |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [BoxFloatPhysicsData](BoxFloatPhysicsData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BoxFloatPhysicsData](BoxFloatPhysicsData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
