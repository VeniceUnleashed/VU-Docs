---
title: OrientationNodeData (Frostbite Container)
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| OrientationNodeData()                                                          | Create a new instance of this container type.                                                                                 |
| OrientationNodeData(OrientationNodeData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| OrientationNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [OrientationNodeData](OrientationNodeData).            |
| OrientationNodeData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [OrientationNodeData](OrientationNodeData). |

## Properties

| Name                  | Type                                     | Description |
| --------------------- | ---------------------------------------- | ----------- |
| listenerRelativeYaw   | [AudioGraphNodePort](AudioGraphNodePort) |             |
| listenerRelativePitch | [AudioGraphNodePort](AudioGraphNodePort) |             |
| listenerRelativeRoll  | [AudioGraphNodePort](AudioGraphNodePort) |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [OrientationNodeData](OrientationNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [OrientationNodeData](OrientationNodeData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
