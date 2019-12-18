---
title: FollowEnvelopeNodeData (Frostbite Container)
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| FollowEnvelopeNodeData()                                                          | Create a new instance of this container type.                                                                                       |
| FollowEnvelopeNodeData(FollowEnvelopeNodeData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| FollowEnvelopeNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [FollowEnvelopeNodeData](FollowEnvelopeNodeData).            |
| FollowEnvelopeNodeData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [FollowEnvelopeNodeData](FollowEnvelopeNodeData). |

## Properties

| Name  | Type                                     | Description |
| ----- | ---------------------------------------- | ----------- |
| x     | [AudioGraphNodePort](AudioGraphNodePort) |             |
| y     | [AudioGraphNodePort](AudioGraphNodePort) |             |
| base  | number                                   |             |
| scale | number                                   |             |
| pivot | number                                   |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [FollowEnvelopeNodeData](FollowEnvelopeNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [FollowEnvelopeNodeData](FollowEnvelopeNodeData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
