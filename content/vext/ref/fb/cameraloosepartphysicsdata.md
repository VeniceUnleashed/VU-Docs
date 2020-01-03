---
title: CameraLoosePartPhysicsData
---
### Base Classes

[LoosePartPhysicsData](/vext/ref/fb/loosepartphysicsdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| CameraLoosePartPhysicsData()                                                          | Create a new instance of this container type.                                                                                               |
| CameraLoosePartPhysicsData(CameraLoosePartPhysicsData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| CameraLoosePartPhysicsData([LoosePartPhysicsData](/vext/ref/fb/loosepartphysicsdata/) other)        | Upcast an instance of type [LoosePartPhysicsData](/vext/ref/fb/loosepartphysicsdata/) to [CameraLoosePartPhysicsData](/vext/ref/fb/cameraloosepartphysicsdata/).        |
| CameraLoosePartPhysicsData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CameraLoosePartPhysicsData](/vext/ref/fb/cameraloosepartphysicsdata/). |

## Properties

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| scale | number |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CameraLoosePartPhysicsData](/vext/ref/fb/cameraloosepartphysicsdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CameraLoosePartPhysicsData](/vext/ref/fb/cameraloosepartphysicsdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
