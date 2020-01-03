---
title: MinMaxValueSelectorNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| MinMaxValueSelectorNodeData()                                                          | Create a new instance of this container type.                                                                                                 |
| MinMaxValueSelectorNodeData(MinMaxValueSelectorNodeData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| MinMaxValueSelectorNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [MinMaxValueSelectorNodeData](/vext/ref/fb/minmaxvalueselectornodedata/).            |
| MinMaxValueSelectorNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MinMaxValueSelectorNodeData](/vext/ref/fb/minmaxvalueselectornodedata/). |

## Properties

| Name     | Type                                                     | Description |
| -------- | -------------------------------------------------------- | ----------- |
| inputs   | [MinMaxValueSelectorEntry](/vext/ref/fb/minmaxvalueselectorentry/)\[\] |             |
| maxValue | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)                 |             |
| maxIndex | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)                 |             |
| minValue | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)                 |             |
| minIndex | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)                 |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [MinMaxValueSelectorNodeData](/vext/ref/fb/minmaxvalueselectornodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MinMaxValueSelectorNodeData](/vext/ref/fb/minmaxvalueselectornodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
