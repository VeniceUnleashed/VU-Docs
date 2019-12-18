---
title: MixerValueNodeData (Frostbite Container)
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| MixerValueNodeData()                                                          | Create a new instance of this container type.                                                                               |
| MixerValueNodeData(MixerValueNodeData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| MixerValueNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [MixerValueNodeData](MixerValueNodeData).            |
| MixerValueNodeData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [MixerValueNodeData](MixerValueNodeData). |

## Properties

| Name         | Type                                     | Description |
| ------------ | ---------------------------------------- | ----------- |
| out          | [AudioGraphNodePort](AudioGraphNodePort) |             |
| defaultValue | number                                   |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [MixerValueNodeData](MixerValueNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [MixerValueNodeData](MixerValueNodeData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
