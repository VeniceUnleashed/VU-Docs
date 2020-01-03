---
title: ReceiveNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| ReceiveNodeData()                                                          | Create a new instance of this container type.                                                                         |
| ReceiveNodeData(ReceiveNodeData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| ReceiveNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [ReceiveNodeData](/vext/ref/fb/receivenodedata/).            |
| ReceiveNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ReceiveNodeData](/vext/ref/fb/receivenodedata/). |

## Properties

| Name    | Type                             | Description |
| ------- | -------------------------------- | ----------- |
| entries | [ReceiveEntry](/vext/ref/fb/receiveentry/)\[\] |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [ReceiveNodeData](/vext/ref/fb/receivenodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ReceiveNodeData](/vext/ref/fb/receivenodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
