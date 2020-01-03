---
title: FrequencyShiftSsbNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| FrequencyShiftSsbNodeData()                                                          | Create a new instance of this container type.                                                                                             |
| FrequencyShiftSsbNodeData(FrequencyShiftSsbNodeData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| FrequencyShiftSsbNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [FrequencyShiftSsbNodeData](/vext/ref/fb/frequencyshiftssbnodedata/).            |
| FrequencyShiftSsbNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FrequencyShiftSsbNodeData](/vext/ref/fb/frequencyshiftssbnodedata/). |

## Properties

| Name      | Type                                               | Description |
| --------- | -------------------------------------------------- | ----------- |
| inValue   | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)           |             |
| frequency | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)           |             |
| out       | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)           |             |
| filter    | [FrequencyShiftSsbFilter](/vext/ref/fb/frequencyshiftssbfilter/) |             |
| plugin    | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref/)         |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [FrequencyShiftSsbNodeData](/vext/ref/fb/frequencyshiftssbnodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FrequencyShiftSsbNodeData](/vext/ref/fb/frequencyshiftssbnodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
