---
title: MinMaxValueSelectorNodeData
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| MinMaxValueSelectorNodeData()                                                          | Create a new instance of this container type.                                                                                                 |
| MinMaxValueSelectorNodeData(MinMaxValueSelectorNodeData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| MinMaxValueSelectorNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [MinMaxValueSelectorNodeData](MinMaxValueSelectorNodeData).            |
| MinMaxValueSelectorNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MinMaxValueSelectorNodeData](MinMaxValueSelectorNodeData). |

## Properties

| Name     | Type                                                     | Description |
| -------- | -------------------------------------------------------- | ----------- |
| inputs   | [MinMaxValueSelectorEntry](MinMaxValueSelectorEntry)\[\] |             |
| maxValue | [AudioGraphNodePort](AudioGraphNodePort)                 |             |
| maxIndex | [AudioGraphNodePort](AudioGraphNodePort)                 |             |
| minValue | [AudioGraphNodePort](AudioGraphNodePort)                 |             |
| minIndex | [AudioGraphNodePort](AudioGraphNodePort)                 |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [MinMaxValueSelectorNodeData](MinMaxValueSelectorNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MinMaxValueSelectorNodeData](MinMaxValueSelectorNodeData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
