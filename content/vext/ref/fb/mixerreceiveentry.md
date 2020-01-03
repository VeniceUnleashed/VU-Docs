---
title: MixerReceiveEntry
---
### Base Classes

[AudioGraphNodePortGroup](AudioGraphNodePortGroup)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| MixerReceiveEntry()                                                          | Create a new instance of this container type.                                                                             |
| MixerReceiveEntry(MixerReceiveEntry other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| MixerReceiveEntry([AudioGraphNodePortGroup](AudioGraphNodePortGroup) other)  | Upcast an instance of type [AudioGraphNodePortGroup](AudioGraphNodePortGroup) to [MixerReceiveEntry](MixerReceiveEntry).  |
| MixerReceiveEntry([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MixerReceiveEntry](MixerReceiveEntry). |

## Properties

| Name   | Type                                       | Description |
| ------ | ------------------------------------------ | ----------- |
| out    | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| source | [AudioGraphParameter](AudioGraphParameter) |             |
| mixer  | [MixerAsset](MixerAsset)                   |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [MixerReceiveEntry](MixerReceiveEntry) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MixerReceiveEntry](MixerReceiveEntry) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
