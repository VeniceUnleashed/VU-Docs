---
title: LfoNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                            | Description                                                                                                   |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| LfoNodeData()                                                          | Create a new instance of this container type.                                                                 |
| LfoNodeData(LfoNodeData other)                                         | Create a reference copy of an instance of the same type.                                                      |
| LfoNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [LfoNodeData](/vext/ref/fb/lfonodedata/).            |
| LfoNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LfoNodeData](/vext/ref/fb/lfonodedata/). |

## Properties

| Name               | Type                                     | Description |
| ------------------ | ---------------------------------------- | ----------- |
| hz                 | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| amplitude          | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| out                | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| min                | number                                   |             |
| max                | number                                   |             |
| startAtRandomValue | bool                                     |             |

## Methods

| Type                       | Name            | Parameters                                     |
| -------------------------- | --------------- | ---------------------------------------------- |
| [LfoNodeData](/vext/ref/fb/lfonodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LfoNodeData](/vext/ref/fb/lfonodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
