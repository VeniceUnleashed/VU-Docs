---
title: MixerSetPropertyEntry
---
### Base Classes

[AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| MixerSetPropertyEntry()                                                          | Create a new instance of this container type.                                                                                     |
| MixerSetPropertyEntry(MixerSetPropertyEntry other)                               | Create a reference copy of an instance of the same type.                                                                          |
| MixerSetPropertyEntry([AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup/) other)  | Upcast an instance of type [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup/) to [MixerSetPropertyEntry](/vext/ref/fb/mixersetpropertyentry/).  |
| MixerSetPropertyEntry([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MixerSetPropertyEntry](/vext/ref/fb/mixersetpropertyentry/). |

## Properties

| Name        | Type                                     | Description |
| ----------- | ---------------------------------------- | ----------- |
| inValue     | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| target      | number                                   |             |
| group       | [MixGroup](/vext/ref/fb/mixgroup/)                     |             |
| attackTime  | number                                   |             |
| releaseTime | number                                   |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [MixerSetPropertyEntry](/vext/ref/fb/mixersetpropertyentry/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MixerSetPropertyEntry](/vext/ref/fb/mixersetpropertyentry/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
