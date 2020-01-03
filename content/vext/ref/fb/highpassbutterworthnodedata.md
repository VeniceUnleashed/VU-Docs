---
title: HighPassButterworthNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| HighPassButterworthNodeData()                                                          | Create a new instance of this container type.                                                                                                 |
| HighPassButterworthNodeData(HighPassButterworthNodeData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| HighPassButterworthNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [HighPassButterworthNodeData](/vext/ref/fb/highpassbutterworthnodedata/).            |
| HighPassButterworthNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [HighPassButterworthNodeData](/vext/ref/fb/highpassbutterworthnodedata/). |

## Properties

| Name      | Type                                       | Description |
| --------- | ------------------------------------------ | ----------- |
| inValue   | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| frequency | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| order     | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| out       | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| plugin    | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref/) |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [HighPassButterworthNodeData](/vext/ref/fb/highpassbutterworthnodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [HighPassButterworthNodeData](/vext/ref/fb/highpassbutterworthnodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
