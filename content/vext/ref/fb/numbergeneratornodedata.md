---
title: NumberGeneratorNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| NumberGeneratorNodeData()                                                          | Create a new instance of this container type.                                                                                         |
| NumberGeneratorNodeData(NumberGeneratorNodeData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| NumberGeneratorNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [NumberGeneratorNodeData](/vext/ref/fb/numbergeneratornodedata/).            |
| NumberGeneratorNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [NumberGeneratorNodeData](/vext/ref/fb/numbergeneratornodedata/). |

## Properties

| Name    | Type                                       | Description |
| ------- | ------------------------------------------ | ----------- |
| trigger | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| min     | number                                     |             |
| max     | number                                     |             |
| mode    | [NumberGeneratorMode](/vext/ref/fb/numbergeneratormode/) |             |
| y       | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [NumberGeneratorNodeData](/vext/ref/fb/numbergeneratornodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [NumberGeneratorNodeData](/vext/ref/fb/numbergeneratornodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
