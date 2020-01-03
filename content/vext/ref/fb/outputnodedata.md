---
title: OutputNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| OutputNodeData()                                                          | Create a new instance of this container type.                                                                       |
| OutputNodeData(OutputNodeData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| OutputNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [OutputNodeData](/vext/ref/fb/outputnodedata/).            |
| OutputNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [OutputNodeData](/vext/ref/fb/outputnodedata/). |

## Properties

| Name                 | Type                                           | Description |
| -------------------- | ---------------------------------------------- | ----------- |
| inValue              | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)       |             |
| bypassHeadroom       | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)       |             |
| minDistance          | number                                         |             |
| attenuationCurve     | [AudioCurve](/vext/ref/fb/audiocurve/)                       |             |
| gain                 | number                                         |             |
| hfDampingDistance    | number                                         |             |
| hfDampingObstruction | number                                         |             |
| hfDampingOcclusion   | number                                         |             |
| mainSendPlugin       | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref/)     |             |
| mainSend             | [SoundBusData](/vext/ref/fb/soundbusdata/)                   |             |
| outputName           | string                                         |             |
| transformSource      | [OutputTransformSource](/vext/ref/fb/outputtransformsource/) |             |
| outputNameHash       | number                                         |             |
| lowPassPlugin        | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref/)     |             |
| vuPlugin             | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref/)     |             |
| solo                 | bool                                           |             |
| enableHdr            | bool                                           |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [OutputNodeData](/vext/ref/fb/outputnodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [OutputNodeData](/vext/ref/fb/outputnodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
