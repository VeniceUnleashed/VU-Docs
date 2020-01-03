---
title: SoundTestSuite
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| SoundTestSuite()                                                          | Create a new instance of this container type.                                                                       |
| SoundTestSuite(SoundTestSuite other)                                      | Create a reference copy of an instance of the same type.                                                            |
| SoundTestSuite([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundTestSuite](/vext/ref/fb/soundtestsuite/). |

## Properties

| Name         | Type                               | Description |
| ------------ | ---------------------------------- | ----------- |
| name         | string                             |             |
| assets       | [SoundAsset](/vext/ref/fb/soundasset/)\[\]       |             |
| tests        | [SoundTestSpec](/vext/ref/fb/soundtestspec/)\[\] |             |
| profileTests | bool                               |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [SoundTestSuite](/vext/ref/fb/soundtestsuite/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoundTestSuite](/vext/ref/fb/soundtestsuite/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
