---
title: ValueSelectorNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| ValueSelectorNodeData()                                                          | Create a new instance of this container type.                                                                                     |
| ValueSelectorNodeData(ValueSelectorNodeData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| ValueSelectorNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [ValueSelectorNodeData](/vext/ref/fb/valueselectornodedata/).            |
| ValueSelectorNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ValueSelectorNodeData](/vext/ref/fb/valueselectornodedata/). |

## Properties

| Name             | Type                                         | Description |
| ---------------- | -------------------------------------------- | ----------- |
| inputs           | [ValueSelectorEntry](/vext/ref/fb/valueselectorentry/)\[\] |             |
| value            | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)     |             |
| out              | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)     |             |
| defaultCaseValue | number                                       |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [ValueSelectorNodeData](/vext/ref/fb/valueselectornodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ValueSelectorNodeData](/vext/ref/fb/valueselectornodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
