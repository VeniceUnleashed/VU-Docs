---
title: DirectOutputNodeData
---
### Base Classes

[OutputNodeData](/vext/ref/fb/outputnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| DirectOutputNodeData()                                                          | Create a new instance of this container type.                                                                                   |
| DirectOutputNodeData(DirectOutputNodeData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| DirectOutputNodeData([OutputNodeData](/vext/ref/fb/outputnodedata/) other)                    | Upcast an instance of type [OutputNodeData](/vext/ref/fb/outputnodedata/) to [DirectOutputNodeData](/vext/ref/fb/directoutputnodedata/).                    |
| DirectOutputNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [DirectOutputNodeData](/vext/ref/fb/directoutputnodedata/).            |
| DirectOutputNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DirectOutputNodeData](/vext/ref/fb/directoutputnodedata/). |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [DirectOutputNodeData](/vext/ref/fb/directoutputnodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DirectOutputNodeData](/vext/ref/fb/directoutputnodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
