---
title: NetworkableLoosePartPhysicsData
---
### Base Classes

[LoosePartPhysicsData](/vext/ref/fb/loosepartphysicsdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| NetworkableLoosePartPhysicsData()                                                          | Create a new instance of this container type.                                                                                                         |
| NetworkableLoosePartPhysicsData(NetworkableLoosePartPhysicsData other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| NetworkableLoosePartPhysicsData([LoosePartPhysicsData](/vext/ref/fb/loosepartphysicsdata/) other)        | Upcast an instance of type [LoosePartPhysicsData](/vext/ref/fb/loosepartphysicsdata/) to [NetworkableLoosePartPhysicsData](/vext/ref/fb/networkableloosepartphysicsdata/).        |
| NetworkableLoosePartPhysicsData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [NetworkableLoosePartPhysicsData](/vext/ref/fb/networkableloosepartphysicsdata/). |

## Properties

| Name      | Type | Description |
| --------- | ---- | ----------- |
| networked | bool |             |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [NetworkableLoosePartPhysicsData](/vext/ref/fb/networkableloosepartphysicsdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [NetworkableLoosePartPhysicsData](/vext/ref/fb/networkableloosepartphysicsdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
