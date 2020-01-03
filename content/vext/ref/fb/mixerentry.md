---
title: MixerEntry
---
### Base Classes

[AudioGraphNodePortGroup](AudioGraphNodePortGroup)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                           | Description                                                                                                 |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| MixerEntry()                                                          | Create a new instance of this container type.                                                               |
| MixerEntry(MixerEntry other)                                          | Create a reference copy of an instance of the same type.                                                    |
| MixerEntry([AudioGraphNodePortGroup](AudioGraphNodePortGroup) other)  | Upcast an instance of type [AudioGraphNodePortGroup](AudioGraphNodePortGroup) to [MixerEntry](MixerEntry).  |
| MixerEntry([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MixerEntry](MixerEntry). |

## Properties

| Name      | Type                                       | Description |
| --------- | ------------------------------------------ | ----------- |
| inValue   | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| amplitude | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| plugin    | [SoundGraphPluginRef](SoundGraphPluginRef) |             |

## Methods

| Type                     | Name            | Parameters                                     |
| ------------------------ | --------------- | ---------------------------------------------- |
| [MixerEntry](MixerEntry) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MixerEntry](MixerEntry) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
