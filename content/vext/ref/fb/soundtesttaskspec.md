---
title: SoundTestTaskSpec
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| SoundTestTaskSpec()                                                          | Create a new instance of this container type.                                                                             |
| SoundTestTaskSpec(SoundTestTaskSpec other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| SoundTestTaskSpec([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundTestTaskSpec](SoundTestTaskSpec). |

## Properties

| Name        | Type   | Description |
| ----------- | ------ | ----------- |
| description | string |             |
| duration    | number |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [SoundTestTaskSpec](SoundTestTaskSpec) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoundTestTaskSpec](SoundTestTaskSpec) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
