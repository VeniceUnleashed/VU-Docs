---
title: CameraShakeNodeData (Frostbite Container)
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| CameraShakeNodeData()                                                          | Create a new instance of this container type.                                                                                 |
| CameraShakeNodeData(CameraShakeNodeData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| CameraShakeNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [CameraShakeNodeData](CameraShakeNodeData).            |
| CameraShakeNodeData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [CameraShakeNodeData](CameraShakeNodeData). |

## Properties

| Name  | Type                                     | Description |
| ----- | ---------------------------------------- | ----------- |
| pitch | [AudioGraphNodePort](AudioGraphNodePort) |             |
| yaw   | [AudioGraphNodePort](AudioGraphNodePort) |             |
| roll  | [AudioGraphNodePort](AudioGraphNodePort) |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [CameraShakeNodeData](CameraShakeNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [CameraShakeNodeData](CameraShakeNodeData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
