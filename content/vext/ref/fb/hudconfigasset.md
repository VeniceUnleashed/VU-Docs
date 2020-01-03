---
title: HudConfigAsset
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| HudConfigAsset()                                                          | Create a new instance of this container type.                                                                       |
| HudConfigAsset(HudConfigAsset other)                                      | Create a reference copy of an instance of the same type.                                                            |
| HudConfigAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [HudConfigAsset](HudConfigAsset).                                      |
| HudConfigAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [HudConfigAsset](HudConfigAsset). |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [HudConfigAsset](HudConfigAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [HudConfigAsset](HudConfigAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
