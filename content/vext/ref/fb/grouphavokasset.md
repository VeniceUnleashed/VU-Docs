---
title: GroupHavokAsset
---
### Base Classes

[HavokAsset](/vext/ref/fb/havokasset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| GroupHavokAsset()                                                          | Create a new instance of this container type.                                                                         |
| GroupHavokAsset(GroupHavokAsset other)                                     | Create a reference copy of an instance of the same type.                                                              |
| GroupHavokAsset([HavokAsset](/vext/ref/fb/havokasset/) other)                            | Upcast an instance of type [HavokAsset](/vext/ref/fb/havokasset/) to [GroupHavokAsset](/vext/ref/fb/grouphavokasset/).                            |
| GroupHavokAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [GroupHavokAsset](/vext/ref/fb/grouphavokasset/).                                      |
| GroupHavokAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GroupHavokAsset](/vext/ref/fb/grouphavokasset/). |

## Properties

| Name                    | Type                         | Description |
| ----------------------- | ---------------------------- | ----------- |
| aabb                    | [AssetAabbs](/vext/ref/fb/assetaabbs/)\[\] |             |
| externalAssetScaleIndex | number\[\]                   |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [GroupHavokAsset](/vext/ref/fb/grouphavokasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [GroupHavokAsset](/vext/ref/fb/grouphavokasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
