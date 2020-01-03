---
title: ConeOutputNodeData
---
### Base Classes

[OutputNodeData](OutputNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| ConeOutputNodeData()                                                          | Create a new instance of this container type.                                                                               |
| ConeOutputNodeData(ConeOutputNodeData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| ConeOutputNodeData([OutputNodeData](OutputNodeData) other)                    | Upcast an instance of type [OutputNodeData](OutputNodeData) to [ConeOutputNodeData](ConeOutputNodeData).                    |
| ConeOutputNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [ConeOutputNodeData](ConeOutputNodeData).            |
| ConeOutputNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ConeOutputNodeData](ConeOutputNodeData). |

## Properties

| Name             | Type                                       | Description |
| ---------------- | ------------------------------------------ | ----------- |
| direction        | [Vec3](/vext/ref/shared/class/vec3)          |             |
| positionY        | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| positionX        | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| positionZ        | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| outerAngle       | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| innerAngle       | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| outsideGain      | number                                     |             |
| panSize          | number                                     |             |
| centerLevel      | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| lfeLevel         | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| hfDampingAngle   | number                                     |             |
| reverbGain       | number                                     |             |
| reverbSend       | [SoundBusData](SoundBusData)               |             |
| panPlugin        | [SoundGraphPluginRef](SoundGraphPluginRef) |             |
| reverbSendPlugin | [SoundGraphPluginRef](SoundGraphPluginRef) |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [ConeOutputNodeData](ConeOutputNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ConeOutputNodeData](ConeOutputNodeData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
