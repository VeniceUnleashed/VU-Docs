---
title: SwitcherNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| SwitcherNodeData()                                                          | Create a new instance of this container type.                                                                           |
| SwitcherNodeData(SwitcherNodeData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| SwitcherNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [SwitcherNodeData](/vext/ref/fb/switchernodedata/).            |
| SwitcherNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SwitcherNodeData](/vext/ref/fb/switchernodedata/). |

## Properties

| Name             | Type                                     | Description |
| ---------------- | ---------------------------------------- | ----------- |
| outputs          | [SwitcherEntry](/vext/ref/fb/switcherentry/)\[\]       |             |
| trigger          | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| value            | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| defaultCaseValue | number                                   |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [SwitcherNodeData](/vext/ref/fb/switchernodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SwitcherNodeData](/vext/ref/fb/switchernodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
