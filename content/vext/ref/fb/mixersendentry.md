---
title: MixerSendEntry
---
### Base Classes

[AudioGraphNodePortGroup](AudioGraphNodePortGroup)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| MixerSendEntry()                                                          | Create a new instance of this container type.                                                                       |
| MixerSendEntry(MixerSendEntry other)                                      | Create a reference copy of an instance of the same type.                                                            |
| MixerSendEntry([AudioGraphNodePortGroup](AudioGraphNodePortGroup) other)  | Upcast an instance of type [AudioGraphNodePortGroup](AudioGraphNodePortGroup) to [MixerSendEntry](MixerSendEntry).  |
| MixerSendEntry([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MixerSendEntry](MixerSendEntry). |

## Properties

| Name    | Type                                       | Description |
| ------- | ------------------------------------------ | ----------- |
| inValue | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| target  | [AudioGraphParameter](AudioGraphParameter) |             |
| mixer   | [MixerAsset](MixerAsset)                   |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [MixerSendEntry](MixerSendEntry) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MixerSendEntry](MixerSendEntry) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
