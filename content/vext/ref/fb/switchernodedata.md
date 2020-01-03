---
title: SwitcherNodeData
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| SwitcherNodeData()                                                          | Create a new instance of this container type.                                                                           |
| SwitcherNodeData(SwitcherNodeData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| SwitcherNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [SwitcherNodeData](SwitcherNodeData).            |
| SwitcherNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SwitcherNodeData](SwitcherNodeData). |

## Properties

| Name             | Type                                     | Description |
| ---------------- | ---------------------------------------- | ----------- |
| outputs          | [SwitcherEntry](SwitcherEntry)\[\]       |             |
| trigger          | [AudioGraphNodePort](AudioGraphNodePort) |             |
| value            | [AudioGraphNodePort](AudioGraphNodePort) |             |
| defaultCaseValue | number                                   |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [SwitcherNodeData](SwitcherNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SwitcherNodeData](SwitcherNodeData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
