---
title: MixerSetPropertyNodeData
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| MixerSetPropertyNodeData()                                                          | Create a new instance of this container type.                                                                                           |
| MixerSetPropertyNodeData(MixerSetPropertyNodeData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| MixerSetPropertyNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [MixerSetPropertyNodeData](MixerSetPropertyNodeData).            |
| MixerSetPropertyNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MixerSetPropertyNodeData](MixerSetPropertyNodeData). |

## Properties

| Name    | Type                                               | Description |
| ------- | -------------------------------------------------- | ----------- |
| entries | [MixerSetPropertyEntry](MixerSetPropertyEntry)\[\] |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [MixerSetPropertyNodeData](MixerSetPropertyNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MixerSetPropertyNodeData](MixerSetPropertyNodeData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
