---
title: VeniceUIConfiguration
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| VeniceUIConfiguration()                                                          | Create a new instance of this container type.                                                                                     |
| VeniceUIConfiguration(VeniceUIConfiguration other)                               | Create a reference copy of an instance of the same type.                                                                          |
| VeniceUIConfiguration([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [VeniceUIConfiguration](VeniceUIConfiguration).                                      |
| VeniceUIConfiguration([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VeniceUIConfiguration](VeniceUIConfiguration). |

## Properties

| Name              | Type   | Description |
| ----------------- | ------ | ----------- |
| metaDataAssetPath | string |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [VeniceUIConfiguration](VeniceUIConfiguration) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VeniceUIConfiguration](VeniceUIConfiguration) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
