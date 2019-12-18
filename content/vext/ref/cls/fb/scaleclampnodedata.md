---
title: ScaleClampNodeData (Frostbite Container)
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| ScaleClampNodeData()                                                          | Create a new instance of this container type.                                                                               |
| ScaleClampNodeData(ScaleClampNodeData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| ScaleClampNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [ScaleClampNodeData](ScaleClampNodeData).            |
| ScaleClampNodeData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ScaleClampNodeData](ScaleClampNodeData). |

## Properties

| Name    | Type                                     | Description |
| ------- | ---------------------------------------- | ----------- |
| inValue | [AudioGraphNodePort](AudioGraphNodePort) |             |
| inMin   | [AudioGraphNodePort](AudioGraphNodePort) |             |
| inMax   | [AudioGraphNodePort](AudioGraphNodePort) |             |
| outMin  | [AudioGraphNodePort](AudioGraphNodePort) |             |
| outMax  | [AudioGraphNodePort](AudioGraphNodePort) |             |
| out     | [AudioGraphNodePort](AudioGraphNodePort) |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [ScaleClampNodeData](ScaleClampNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ScaleClampNodeData](ScaleClampNodeData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
