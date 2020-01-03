---
title: ReceiveEntry
---
### Base Classes

[AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| ReceiveEntry()                                                          | Create a new instance of this container type.                                                                   |
| ReceiveEntry(ReceiveEntry other)                                        | Create a reference copy of an instance of the same type.                                                        |
| ReceiveEntry([AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup/) other)  | Upcast an instance of type [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup/) to [ReceiveEntry](/vext/ref/fb/receiveentry/).  |
| ReceiveEntry([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ReceiveEntry](/vext/ref/fb/receiveentry/). |

## Properties

| Name       | Type                                       | Description |
| ---------- | ------------------------------------------ | ----------- |
| out        | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| source     | [AudioGraphParameter](/vext/ref/fb/audiographparameter/) |             |
| parameter  | number                                     |             |
| savedValue | number                                     |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [ReceiveEntry](/vext/ref/fb/receiveentry/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ReceiveEntry](/vext/ref/fb/receiveentry/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
