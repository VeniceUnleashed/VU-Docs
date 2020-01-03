---
title: ConeOutputNodeData
---
### Base Classes

[OutputNodeData](/vext/ref/fb/outputnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| ConeOutputNodeData()                                                          | Create a new instance of this container type.                                                                               |
| ConeOutputNodeData(ConeOutputNodeData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| ConeOutputNodeData([OutputNodeData](/vext/ref/fb/outputnodedata/) other)                    | Upcast an instance of type [OutputNodeData](/vext/ref/fb/outputnodedata/) to [ConeOutputNodeData](/vext/ref/fb/coneoutputnodedata/).                    |
| ConeOutputNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [ConeOutputNodeData](/vext/ref/fb/coneoutputnodedata/).            |
| ConeOutputNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ConeOutputNodeData](/vext/ref/fb/coneoutputnodedata/). |

## Properties

| Name             | Type                                       | Description |
| ---------------- | ------------------------------------------ | ----------- |
| direction        | [Vec3](/vext/ref/shared/class/vec3)          |             |
| positionY        | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| positionX        | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| positionZ        | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| outerAngle       | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| innerAngle       | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| outsideGain      | number                                     |             |
| panSize          | number                                     |             |
| centerLevel      | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| lfeLevel         | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| hfDampingAngle   | number                                     |             |
| reverbGain       | number                                     |             |
| reverbSend       | [SoundBusData](/vext/ref/fb/soundbusdata/)               |             |
| panPlugin        | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref/) |             |
| reverbSendPlugin | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref/) |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [ConeOutputNodeData](/vext/ref/fb/coneoutputnodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ConeOutputNodeData](/vext/ref/fb/coneoutputnodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
