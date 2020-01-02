---
title: VeniceUICombatAreaAsset
---
### Base Classes

[UICombatAreaAsset](UICombatAreaAsset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| VeniceUICombatAreaAsset()                                                          | Create a new instance of this container type.                                                                                         |
| VeniceUICombatAreaAsset(VeniceUICombatAreaAsset other)                             | Create a reference copy of an instance of the same type.                                                                              |
| VeniceUICombatAreaAsset([UICombatAreaAsset](UICombatAreaAsset) other)              | Upcast an instance of type [UICombatAreaAsset](UICombatAreaAsset) to [VeniceUICombatAreaAsset](VeniceUICombatAreaAsset).              |
| VeniceUICombatAreaAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [VeniceUICombatAreaAsset](VeniceUICombatAreaAsset).                                      |
| VeniceUICombatAreaAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VeniceUICombatAreaAsset](VeniceUICombatAreaAsset). |

## Properties

| Name                     | Type                                         | Description |
| ------------------------ | -------------------------------------------- | ----------- |
| distanceField            | [UIDistanceFieldAsset](UIDistanceFieldAsset) |             |
| surroundingDistanceField | [UIDistanceFieldAsset](UIDistanceFieldAsset) |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VeniceUICombatAreaAsset](VeniceUICombatAreaAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VeniceUICombatAreaAsset](VeniceUICombatAreaAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
