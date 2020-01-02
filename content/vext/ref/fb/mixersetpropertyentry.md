---
title: MixerSetPropertyEntry
---
### Base Classes

[AudioGraphNodePortGroup](AudioGraphNodePortGroup)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| MixerSetPropertyEntry()                                                          | Create a new instance of this container type.                                                                                     |
| MixerSetPropertyEntry(MixerSetPropertyEntry other)                               | Create a reference copy of an instance of the same type.                                                                          |
| MixerSetPropertyEntry([AudioGraphNodePortGroup](AudioGraphNodePortGroup) other)  | Upcast an instance of type [AudioGraphNodePortGroup](AudioGraphNodePortGroup) to [MixerSetPropertyEntry](MixerSetPropertyEntry).  |
| MixerSetPropertyEntry([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MixerSetPropertyEntry](MixerSetPropertyEntry). |

## Properties

| Name        | Type                                     | Description |
| ----------- | ---------------------------------------- | ----------- |
| inValue     | [AudioGraphNodePort](AudioGraphNodePort) |             |
| target      | number                                   |             |
| group       | [MixGroup](MixGroup)                     |             |
| attackTime  | number                                   |             |
| releaseTime | number                                   |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [MixerSetPropertyEntry](MixerSetPropertyEntry) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MixerSetPropertyEntry](MixerSetPropertyEntry) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
