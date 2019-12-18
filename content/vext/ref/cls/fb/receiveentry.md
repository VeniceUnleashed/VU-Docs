---
title: ReceiveEntry (Frostbite Container)
---
### Base Classes

[AudioGraphNodePortGroup](AudioGraphNodePortGroup)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| ReceiveEntry()                                                          | Create a new instance of this container type.                                                                   |
| ReceiveEntry(ReceiveEntry other)                                        | Create a reference copy of an instance of the same type.                                                        |
| ReceiveEntry([AudioGraphNodePortGroup](AudioGraphNodePortGroup) other)  | Upcast an instance of type [AudioGraphNodePortGroup](AudioGraphNodePortGroup) to [ReceiveEntry](ReceiveEntry).  |
| ReceiveEntry([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ReceiveEntry](ReceiveEntry). |

## Properties

| Name       | Type                                       | Description |
| ---------- | ------------------------------------------ | ----------- |
| out        | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| source     | [AudioGraphParameter](AudioGraphParameter) |             |
| parameter  | number                                     |             |
| savedValue | number                                     |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [ReceiveEntry](ReceiveEntry) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ReceiveEntry](ReceiveEntry) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
