---
title: DirectOutputNodeData
---
### Base Classes

[OutputNodeData](OutputNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| DirectOutputNodeData()                                                          | Create a new instance of this container type.                                                                                   |
| DirectOutputNodeData(DirectOutputNodeData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| DirectOutputNodeData([OutputNodeData](OutputNodeData) other)                    | Upcast an instance of type [OutputNodeData](OutputNodeData) to [DirectOutputNodeData](DirectOutputNodeData).                    |
| DirectOutputNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [DirectOutputNodeData](DirectOutputNodeData).            |
| DirectOutputNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DirectOutputNodeData](DirectOutputNodeData). |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [DirectOutputNodeData](DirectOutputNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DirectOutputNodeData](DirectOutputNodeData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
