---
title: LimiterNodeData
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| LimiterNodeData()                                                          | Create a new instance of this container type.                                                                         |
| LimiterNodeData(LimiterNodeData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| LimiterNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [LimiterNodeData](LimiterNodeData).            |
| LimiterNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LimiterNodeData](LimiterNodeData). |

## Properties

| Name        | Type                                       | Description |
| ----------- | ------------------------------------------ | ----------- |
| inValue     | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| threshold   | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| releaseTime | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| out         | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| channelMode | [LimiterChannelMode](LimiterChannelMode)   |             |
| plugin      | [SoundGraphPluginRef](SoundGraphPluginRef) |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [LimiterNodeData](LimiterNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LimiterNodeData](LimiterNodeData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
