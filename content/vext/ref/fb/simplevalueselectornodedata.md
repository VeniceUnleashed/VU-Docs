---
title: SimpleValueSelectorNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| SimpleValueSelectorNodeData()                                                          | Create a new instance of this container type.                                                                                                 |
| SimpleValueSelectorNodeData(SimpleValueSelectorNodeData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| SimpleValueSelectorNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [SimpleValueSelectorNodeData](/vext/ref/fb/simplevalueselectornodedata/).            |
| SimpleValueSelectorNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SimpleValueSelectorNodeData](/vext/ref/fb/simplevalueselectornodedata/). |

## Properties

| Name      | Type                                     | Description |
| --------- | ---------------------------------------- | ----------- |
| outValues | number\[\]                               |             |
| index     | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| out       | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SimpleValueSelectorNodeData](/vext/ref/fb/simplevalueselectornodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SimpleValueSelectorNodeData](/vext/ref/fb/simplevalueselectornodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
