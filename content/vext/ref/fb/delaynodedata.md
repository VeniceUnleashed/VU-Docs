---
title: DelayNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| DelayNodeData()                                                          | Create a new instance of this container type.                                                                     |
| DelayNodeData(DelayNodeData other)                                       | Create a reference copy of an instance of the same type.                                                          |
| DelayNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [DelayNodeData](/vext/ref/fb/delaynodedata/).            |
| DelayNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DelayNodeData](/vext/ref/fb/delaynodedata/). |

## Properties

| Name         | Type                                       | Description |
| ------------ | ------------------------------------------ | ----------- |
| inValue      | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| delayTime    | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| feedback     | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| out          | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| maxDelayTime | number                                     |             |
| plugin       | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref/) |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [DelayNodeData](/vext/ref/fb/delaynodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DelayNodeData](/vext/ref/fb/delaynodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
