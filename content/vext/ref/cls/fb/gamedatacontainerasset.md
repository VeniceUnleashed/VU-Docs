---
title: GameDataContainerAsset (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| GameDataContainerAsset()                                                          | Create a new instance of this container type.                                                                                       |
| GameDataContainerAsset(GameDataContainerAsset other)                              | Create a reference copy of an instance of the same type.                                                                            |
| GameDataContainerAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [GameDataContainerAsset](GameDataContainerAsset).                                      |
| GameDataContainerAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [GameDataContainerAsset](GameDataContainerAsset). |

## Properties

| Name | Type                                   | Description |
| ---- | -------------------------------------- | ----------- |
| data | [GameDataContainer](GameDataContainer) |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [GameDataContainerAsset](GameDataContainerAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [GameDataContainerAsset](GameDataContainerAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
