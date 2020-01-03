---
title: IrReverbNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| IrReverbNodeData()                                                          | Create a new instance of this container type.                                                                           |
| IrReverbNodeData(IrReverbNodeData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| IrReverbNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [IrReverbNodeData](/vext/ref/fb/irreverbnodedata/).            |
| IrReverbNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [IrReverbNodeData](/vext/ref/fb/irreverbnodedata/). |

## Properties

| Name            | Type                                       | Description |
| --------------- | ------------------------------------------ | ----------- |
| inValue         | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| out             | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| reverb0         | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| amplitude0      | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| reverb1         | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| amplitude1      | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| maxReverbLength | number                                     |             |
| reverbPlugin    | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref/) |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [IrReverbNodeData](/vext/ref/fb/irreverbnodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [IrReverbNodeData](/vext/ref/fb/irreverbnodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
