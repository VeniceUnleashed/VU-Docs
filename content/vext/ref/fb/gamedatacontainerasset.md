---
title: GameDataContainerAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| GameDataContainerAsset()                                                          | Create a new instance of this container type.                                                                                       |
| GameDataContainerAsset(GameDataContainerAsset other)                              | Create a reference copy of an instance of the same type.                                                                            |
| GameDataContainerAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [GameDataContainerAsset](/vext/ref/fb/gamedatacontainerasset/).                                      |
| GameDataContainerAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GameDataContainerAsset](/vext/ref/fb/gamedatacontainerasset/). |

## Properties

| Name | Type                                   | Description |
| ---- | -------------------------------------- | ----------- |
| data | [GameDataContainer](/vext/ref/fb/gamedatacontainer/) |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [GameDataContainerAsset](/vext/ref/fb/gamedatacontainerasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [GameDataContainerAsset](/vext/ref/fb/gamedatacontainerasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
