---
title: OutputNodeData (Frostbite Container)
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| OutputNodeData()                                                          | Create a new instance of this container type.                                                                       |
| OutputNodeData(OutputNodeData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| OutputNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [OutputNodeData](OutputNodeData).            |
| OutputNodeData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [OutputNodeData](OutputNodeData). |

## Properties

| Name                 | Type                                           | Description |
| -------------------- | ---------------------------------------------- | ----------- |
| inValue              | [AudioGraphNodePort](AudioGraphNodePort)       |             |
| bypassHeadroom       | [AudioGraphNodePort](AudioGraphNodePort)       |             |
| minDistance          | number                                         |             |
| attenuationCurve     | [AudioCurve](AudioCurve)                       |             |
| gain                 | number                                         |             |
| hfDampingDistance    | number                                         |             |
| hfDampingObstruction | number                                         |             |
| hfDampingOcclusion   | number                                         |             |
| mainSendPlugin       | [SoundGraphPluginRef](SoundGraphPluginRef)     |             |
| mainSend             | [SoundBusData](SoundBusData)                   |             |
| outputName           | string                                         |             |
| transformSource      | [OutputTransformSource](OutputTransformSource) |             |
| outputNameHash       | number                                         |             |
| lowPassPlugin        | [SoundGraphPluginRef](SoundGraphPluginRef)     |             |
| vuPlugin             | [SoundGraphPluginRef](SoundGraphPluginRef)     |             |
| solo                 | bool                                           |             |
| enableHdr            | bool                                           |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [OutputNodeData](OutputNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [OutputNodeData](OutputNodeData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
