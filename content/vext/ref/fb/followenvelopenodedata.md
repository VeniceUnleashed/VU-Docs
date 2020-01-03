---
title: FollowEnvelopeNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| FollowEnvelopeNodeData()                                                          | Create a new instance of this container type.                                                                                       |
| FollowEnvelopeNodeData(FollowEnvelopeNodeData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| FollowEnvelopeNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [FollowEnvelopeNodeData](/vext/ref/fb/followenvelopenodedata/).            |
| FollowEnvelopeNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FollowEnvelopeNodeData](/vext/ref/fb/followenvelopenodedata/). |

## Properties

| Name  | Type                                     | Description |
| ----- | ---------------------------------------- | ----------- |
| x     | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| y     | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| base  | number                                   |             |
| scale | number                                   |             |
| pivot | number                                   |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [FollowEnvelopeNodeData](/vext/ref/fb/followenvelopenodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FollowEnvelopeNodeData](/vext/ref/fb/followenvelopenodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
