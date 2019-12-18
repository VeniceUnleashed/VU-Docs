---
title: PathfindingSandboxAsset (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| PathfindingSandboxAsset()                                                          | Create a new instance of this container type.                                                                                         |
| PathfindingSandboxAsset(PathfindingSandboxAsset other)                             | Create a reference copy of an instance of the same type.                                                                              |
| PathfindingSandboxAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [PathfindingSandboxAsset](PathfindingSandboxAsset).                                      |
| PathfindingSandboxAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PathfindingSandboxAsset](PathfindingSandboxAsset). |

## Properties

| Name   | Type                                                       | Description |
| ------ | ---------------------------------------------------------- | ----------- |
| system | [PathfindingSystemEntityData](PathfindingSystemEntityData) |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PathfindingSandboxAsset](PathfindingSandboxAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PathfindingSandboxAsset](PathfindingSandboxAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
