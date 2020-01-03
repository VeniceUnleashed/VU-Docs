---
title: DistortionClipNodeData
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| DistortionClipNodeData()                                                          | Create a new instance of this container type.                                                                                       |
| DistortionClipNodeData(DistortionClipNodeData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| DistortionClipNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [DistortionClipNodeData](DistortionClipNodeData).            |
| DistortionClipNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DistortionClipNodeData](DistortionClipNodeData). |

## Properties

| Name      | Type                                       | Description |
| --------- | ------------------------------------------ | ----------- |
| inValue   | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| clipLevel | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| out       | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| plugin    | [SoundGraphPluginRef](SoundGraphPluginRef) |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [DistortionClipNodeData](DistortionClipNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DistortionClipNodeData](DistortionClipNodeData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
