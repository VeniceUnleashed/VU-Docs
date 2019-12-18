---
title: NumberGeneratorNodeData (Frostbite Container)
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| NumberGeneratorNodeData()                                                          | Create a new instance of this container type.                                                                                         |
| NumberGeneratorNodeData(NumberGeneratorNodeData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| NumberGeneratorNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [NumberGeneratorNodeData](NumberGeneratorNodeData).            |
| NumberGeneratorNodeData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [NumberGeneratorNodeData](NumberGeneratorNodeData). |

## Properties

| Name    | Type                                       | Description |
| ------- | ------------------------------------------ | ----------- |
| trigger | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| min     | number                                     |             |
| max     | number                                     |             |
| mode    | [NumberGeneratorMode](NumberGeneratorMode) |             |
| y       | [AudioGraphNodePort](AudioGraphNodePort)   |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [NumberGeneratorNodeData](NumberGeneratorNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [NumberGeneratorNodeData](NumberGeneratorNodeData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
