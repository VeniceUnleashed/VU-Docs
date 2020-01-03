---
title: VeniceUICombatAreaAsset
---
### Base Classes

[UICombatAreaAsset](/vext/ref/fb/uicombatareaasset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| VeniceUICombatAreaAsset()                                                          | Create a new instance of this container type.                                                                                         |
| VeniceUICombatAreaAsset(VeniceUICombatAreaAsset other)                             | Create a reference copy of an instance of the same type.                                                                              |
| VeniceUICombatAreaAsset([UICombatAreaAsset](/vext/ref/fb/uicombatareaasset/) other)              | Upcast an instance of type [UICombatAreaAsset](/vext/ref/fb/uicombatareaasset/) to [VeniceUICombatAreaAsset](/vext/ref/fb/veniceuicombatareaasset/).              |
| VeniceUICombatAreaAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [VeniceUICombatAreaAsset](/vext/ref/fb/veniceuicombatareaasset/).                                      |
| VeniceUICombatAreaAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VeniceUICombatAreaAsset](/vext/ref/fb/veniceuicombatareaasset/). |

## Properties

| Name                     | Type                                         | Description |
| ------------------------ | -------------------------------------------- | ----------- |
| distanceField            | [UIDistanceFieldAsset](/vext/ref/fb/uidistancefieldasset/) |             |
| surroundingDistanceField | [UIDistanceFieldAsset](/vext/ref/fb/uidistancefieldasset/) |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VeniceUICombatAreaAsset](/vext/ref/fb/veniceuicombatareaasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VeniceUICombatAreaAsset](/vext/ref/fb/veniceuicombatareaasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
