---
title: GameTipAsset (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| GameTipAsset()                                                          | Create a new instance of this container type.                                                                   |
| GameTipAsset(GameTipAsset other)                                        | Create a reference copy of an instance of the same type.                                                        |
| GameTipAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [GameTipAsset](GameTipAsset).                                      |
| GameTipAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [GameTipAsset](GameTipAsset). |

## Properties

| Name | Type                           | Description |
| ---- | ------------------------------ | ----------- |
| tips | [GameTipData](GameTipData)\[\] |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [GameTipAsset](GameTipAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [GameTipAsset](GameTipAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
