---
title: UserMusicControllerNodeData
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| UserMusicControllerNodeData()                                                          | Create a new instance of this container type.                                                                                                 |
| UserMusicControllerNodeData(UserMusicControllerNodeData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| UserMusicControllerNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [UserMusicControllerNodeData](UserMusicControllerNodeData).            |
| UserMusicControllerNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UserMusicControllerNodeData](UserMusicControllerNodeData). |

## Properties

| Name                 | Type                                     | Description |
| -------------------- | ---------------------------------------- | ----------- |
| override             | [AudioGraphNodePort](AudioGraphNodePort) |             |
| restore              | [AudioGraphNodePort](AudioGraphNodePort) |             |
| restoreOnDeactivated | bool                                     |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UserMusicControllerNodeData](UserMusicControllerNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UserMusicControllerNodeData](UserMusicControllerNodeData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
