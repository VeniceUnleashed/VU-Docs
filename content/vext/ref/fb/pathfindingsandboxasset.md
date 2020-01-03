---
title: PathfindingSandboxAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| PathfindingSandboxAsset()                                                          | Create a new instance of this container type.                                                                                         |
| PathfindingSandboxAsset(PathfindingSandboxAsset other)                             | Create a reference copy of an instance of the same type.                                                                              |
| PathfindingSandboxAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [PathfindingSandboxAsset](/vext/ref/fb/pathfindingsandboxasset/).                                      |
| PathfindingSandboxAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PathfindingSandboxAsset](/vext/ref/fb/pathfindingsandboxasset/). |

## Properties

| Name   | Type                                                       | Description |
| ------ | ---------------------------------------------------------- | ----------- |
| system | [PathfindingSystemEntityData](/vext/ref/fb/pathfindingsystementitydata/) |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PathfindingSandboxAsset](/vext/ref/fb/pathfindingsandboxasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PathfindingSandboxAsset](/vext/ref/fb/pathfindingsandboxasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
