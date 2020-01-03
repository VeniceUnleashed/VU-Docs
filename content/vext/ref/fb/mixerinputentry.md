---
title: MixerInputEntry
---
### Base Classes

[AudioGraphNodePortGroup](AudioGraphNodePortGroup)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| MixerInputEntry()                                                          | Create a new instance of this container type.                                                                         |
| MixerInputEntry(MixerInputEntry other)                                     | Create a reference copy of an instance of the same type.                                                              |
| MixerInputEntry([AudioGraphNodePortGroup](AudioGraphNodePortGroup) other)  | Upcast an instance of type [AudioGraphNodePortGroup](AudioGraphNodePortGroup) to [MixerInputEntry](MixerInputEntry).  |
| MixerInputEntry([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MixerInputEntry](MixerInputEntry). |

## Properties

| Name           | Type                                                 | Description |
| -------------- | ---------------------------------------------------- | ----------- |
| out            | [AudioGraphNodePort](AudioGraphNodePort)             |             |
| source         | [AudioGraphParameter](AudioGraphParameter)           |             |
| accumulateMode | [MixerValueAccumulateMode](MixerValueAccumulateMode) |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [MixerInputEntry](MixerInputEntry) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MixerInputEntry](MixerInputEntry) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
