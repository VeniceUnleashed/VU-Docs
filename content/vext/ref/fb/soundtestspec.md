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
| SoundTestSpec([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundTestSpec](/vext/ref/fb/soundtestspec/). |

## Properties

| Name          | Type                               | Description |
| ------------- | ---------------------------------- | ----------- |
| name          | string                             |             |
| description   | string                             |             |
| mainStartTask | [SoundTestTask](/vext/ref/fb/soundtesttask/)     |             |
| mainStopTask  | [SoundTestTask](/vext/ref/fb/soundtesttask/)     |             |
| duration      | number                             |             |
| tasks         | [SoundTestTask](/vext/ref/fb/soundtesttask/)\[\] |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [SoundTestSpec](/vext/ref/fb/soundtestspec/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoundTestSpec](/vext/ref/fb/soundtestspec/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
