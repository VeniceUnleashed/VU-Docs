---
title: GameTipAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| GameTipAsset()                                                          | Create a new instance of this container type.                                                                   |
| GameTipAsset(GameTipAsset other)                                        | Create a reference copy of an instance of the same type.                                                        |
| GameTipAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [GameTipAsset](/vext/ref/fb/gametipasset/).                                      |
| GameTipAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GameTipAsset](/vext/ref/fb/gametipasset/). |

## Properties

| Name | Type                           | Description |
| ---- | ------------------------------ | ----------- |
| tips | [GameTipData](/vext/ref/fb/gametipdata/)\[\] |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [GameTipAsset](/vext/ref/fb/gametipasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [GameTipAsset](/vext/ref/fb/gametipasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
