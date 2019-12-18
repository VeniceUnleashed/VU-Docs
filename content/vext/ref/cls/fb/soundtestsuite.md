---
title: SoundTestSuite (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| SoundTestSuite()                                                          | Create a new instance of this container type.                                                                       |
| SoundTestSuite(SoundTestSuite other)                                      | Create a reference copy of an instance of the same type.                                                            |
| SoundTestSuite([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SoundTestSuite](SoundTestSuite). |

## Properties

| Name         | Type                               | Description |
| ------------ | ---------------------------------- | ----------- |
| name         | string                             |             |
| assets       | [SoundAsset](SoundAsset)\[\]       |             |
| tests        | [SoundTestSpec](SoundTestSpec)\[\] |             |
| profileTests | bool                               |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [SoundTestSuite](SoundTestSuite) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SoundTestSuite](SoundTestSuite) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
