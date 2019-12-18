---
title: SoundTestAsset (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| SoundTestAsset()                                                          | Create a new instance of this container type.                                                                       |
| SoundTestAsset(SoundTestAsset other)                                      | Create a reference copy of an instance of the same type.                                                            |
| SoundTestAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [SoundTestAsset](SoundTestAsset).                                      |
| SoundTestAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SoundTestAsset](SoundTestAsset). |

## Properties

| Name      | Type                                       | Description |
| --------- | ------------------------------------------ | ----------- |
| taskSpecs | [SoundTestTaskSpec](SoundTestTaskSpec)\[\] |             |
| testSpecs | [SoundTestSpec](SoundTestSpec)\[\]         |             |
| suites    | [SoundTestSuite](SoundTestSuite)\[\]       |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [SoundTestAsset](SoundTestAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SoundTestAsset](SoundTestAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
