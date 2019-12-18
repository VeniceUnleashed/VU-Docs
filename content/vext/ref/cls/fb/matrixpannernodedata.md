---
title: MatrixPannerNodeData (Frostbite Container)
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| MatrixPannerNodeData()                                                          | Create a new instance of this container type.                                                                                   |
| MatrixPannerNodeData(MatrixPannerNodeData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| MatrixPannerNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [MatrixPannerNodeData](MatrixPannerNodeData).            |
| MatrixPannerNodeData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [MatrixPannerNodeData](MatrixPannerNodeData). |

## Properties

| Name         | Type                                     | Description |
| ------------ | ---------------------------------------- | ----------- |
| inValue      | [AudioGraphNodePort](AudioGraphNodePort) |             |
| frontLeft    | [AudioGraphNodePort](AudioGraphNodePort) |             |
| center       | [AudioGraphNodePort](AudioGraphNodePort) |             |
| frontRight   | [AudioGraphNodePort](AudioGraphNodePort) |             |
| rearLeft     | [AudioGraphNodePort](AudioGraphNodePort) |             |
| lfe          | [AudioGraphNodePort](AudioGraphNodePort) |             |
| rearRight    | [AudioGraphNodePort](AudioGraphNodePort) |             |
| farRearLeft  | [AudioGraphNodePort](AudioGraphNodePort) |             |
| farRearRight | [AudioGraphNodePort](AudioGraphNodePort) |             |
| out          | [AudioGraphNodePort](AudioGraphNodePort) |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [MatrixPannerNodeData](MatrixPannerNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [MatrixPannerNodeData](MatrixPannerNodeData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
