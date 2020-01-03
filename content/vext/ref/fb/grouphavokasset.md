---
title: GroupHavokAsset
---
### Base Classes

[HavokAsset](HavokAsset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| GroupHavokAsset()                                                          | Create a new instance of this container type.                                                                         |
| GroupHavokAsset(GroupHavokAsset other)                                     | Create a reference copy of an instance of the same type.                                                              |
| GroupHavokAsset([HavokAsset](HavokAsset) other)                            | Upcast an instance of type [HavokAsset](HavokAsset) to [GroupHavokAsset](GroupHavokAsset).                            |
| GroupHavokAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [GroupHavokAsset](GroupHavokAsset).                                      |
| GroupHavokAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GroupHavokAsset](GroupHavokAsset). |

## Properties

| Name                    | Type                         | Description |
| ----------------------- | ---------------------------- | ----------- |
| aabb                    | [AssetAabbs](AssetAabbs)\[\] |             |
| externalAssetScaleIndex | number\[\]                   |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [GroupHavokAsset](GroupHavokAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [GroupHavokAsset](GroupHavokAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
