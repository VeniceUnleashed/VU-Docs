---
title: SimpleValueSelectorNodeData
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| SimpleValueSelectorNodeData()                                                          | Create a new instance of this container type.                                                                                                 |
| SimpleValueSelectorNodeData(SimpleValueSelectorNodeData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| SimpleValueSelectorNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [SimpleValueSelectorNodeData](SimpleValueSelectorNodeData).            |
| SimpleValueSelectorNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SimpleValueSelectorNodeData](SimpleValueSelectorNodeData). |

## Properties

| Name      | Type                                     | Description |
| --------- | ---------------------------------------- | ----------- |
| outValues | number\[\]                               |             |
| index     | [AudioGraphNodePort](AudioGraphNodePort) |             |
| out       | [AudioGraphNodePort](AudioGraphNodePort) |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SimpleValueSelectorNodeData](SimpleValueSelectorNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SimpleValueSelectorNodeData](SimpleValueSelectorNodeData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
