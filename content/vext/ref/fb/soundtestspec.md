---
title: SoundTestSpec
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| SoundTestSpec()                                                          | Create a new instance of this container type.                                                                     |
| SoundTestSpec(SoundTestSpec other)                                       | Create a reference copy of an instance of the same type.                                                          |
| SoundTestSpec([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundTestSpec](SoundTestSpec). |

## Properties

| Name          | Type                               | Description |
| ------------- | ---------------------------------- | ----------- |
| name          | string                             |             |
| description   | string                             |             |
| mainStartTask | [SoundTestTask](SoundTestTask)     |             |
| mainStopTask  | [SoundTestTask](SoundTestTask)     |             |
| duration      | number                             |             |
| tasks         | [SoundTestTask](SoundTestTask)\[\] |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [SoundTestSpec](SoundTestSpec) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoundTestSpec](SoundTestSpec) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
