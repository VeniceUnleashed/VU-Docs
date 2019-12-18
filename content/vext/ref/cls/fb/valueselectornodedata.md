---
title: ValueSelectorNodeData (Frostbite Container)
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| ValueSelectorNodeData()                                                          | Create a new instance of this container type.                                                                                     |
| ValueSelectorNodeData(ValueSelectorNodeData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| ValueSelectorNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [ValueSelectorNodeData](ValueSelectorNodeData).            |
| ValueSelectorNodeData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ValueSelectorNodeData](ValueSelectorNodeData). |

## Properties

| Name             | Type                                         | Description |
| ---------------- | -------------------------------------------- | ----------- |
| inputs           | [ValueSelectorEntry](ValueSelectorEntry)\[\] |             |
| value            | [AudioGraphNodePort](AudioGraphNodePort)     |             |
| out              | [AudioGraphNodePort](AudioGraphNodePort)     |             |
| defaultCaseValue | number                                       |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [ValueSelectorNodeData](ValueSelectorNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ValueSelectorNodeData](ValueSelectorNodeData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
