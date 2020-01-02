---
title: UserMusicArbiterNodeData
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| UserMusicArbiterNodeData()                                                          | Create a new instance of this container type.                                                                                           |
| UserMusicArbiterNodeData(UserMusicArbiterNodeData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| UserMusicArbiterNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [UserMusicArbiterNodeData](UserMusicArbiterNodeData).            |
| UserMusicArbiterNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UserMusicArbiterNodeData](UserMusicArbiterNodeData). |

## Properties

| Name    | Type                                       | Description |
| ------- | ------------------------------------------ | ----------- |
| inValue | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| out     | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| plugin  | [SoundGraphPluginRef](SoundGraphPluginRef) |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UserMusicArbiterNodeData](UserMusicArbiterNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UserMusicArbiterNodeData](UserMusicArbiterNodeData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
