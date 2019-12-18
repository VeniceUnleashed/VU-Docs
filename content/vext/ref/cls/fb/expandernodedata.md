---
title: ExpanderNodeData (Frostbite Container)
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| ExpanderNodeData()                                                          | Create a new instance of this container type.                                                                           |
| ExpanderNodeData(ExpanderNodeData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| ExpanderNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [ExpanderNodeData](ExpanderNodeData).            |
| ExpanderNodeData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ExpanderNodeData](ExpanderNodeData). |

## Properties

| Name        | Type                                       | Description |
| ----------- | ------------------------------------------ | ----------- |
| inValue     | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| threshold   | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| ratio       | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| attackTime  | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| releaseTime | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| out         | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| channelMode | [ExpanderChannelMode](ExpanderChannelMode) |             |
| plugin      | [SoundGraphPluginRef](SoundGraphPluginRef) |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [ExpanderNodeData](ExpanderNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ExpanderNodeData](ExpanderNodeData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
