---
title: UserMusicControllerNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| UserMusicControllerNodeData()                                                          | Create a new instance of this container type.                                                                                                 |
| UserMusicControllerNodeData(UserMusicControllerNodeData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| UserMusicControllerNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [UserMusicControllerNodeData](/vext/ref/fb/usermusiccontrollernodedata/).            |
| UserMusicControllerNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UserMusicControllerNodeData](/vext/ref/fb/usermusiccontrollernodedata/). |

## Properties

| Name                 | Type                                     | Description |
| -------------------- | ---------------------------------------- | ----------- |
| override             | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| restore              | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| restoreOnDeactivated | bool                                     |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UserMusicControllerNodeData](/vext/ref/fb/usermusiccontrollernodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UserMusicControllerNodeData](/vext/ref/fb/usermusiccontrollernodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
