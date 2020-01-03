---
title: VeniceUIConfiguration
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| VeniceUIConfiguration()                                                          | Create a new instance of this container type.                                                                                     |
| VeniceUIConfiguration(VeniceUIConfiguration other)                               | Create a reference copy of an instance of the same type.                                                                          |
| VeniceUIConfiguration([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [VeniceUIConfiguration](/vext/ref/fb/veniceuiconfiguration/).                                      |
| VeniceUIConfiguration([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VeniceUIConfiguration](/vext/ref/fb/veniceuiconfiguration/). |

## Properties

| Name              | Type   | Description |
| ----------------- | ------ | ----------- |
| metaDataAssetPath | string |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [VeniceUIConfiguration](/vext/ref/fb/veniceuiconfiguration/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VeniceUIConfiguration](/vext/ref/fb/veniceuiconfiguration/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
