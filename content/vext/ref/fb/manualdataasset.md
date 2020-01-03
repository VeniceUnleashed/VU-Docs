---
title: ManualDataAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| ManualDataAsset()                                                          | Create a new instance of this container type.                                                                         |
| ManualDataAsset(ManualDataAsset other)                                     | Create a reference copy of an instance of the same type.                                                              |
| ManualDataAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [ManualDataAsset](/vext/ref/fb/manualdataasset/).                                      |
| ManualDataAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ManualDataAsset](/vext/ref/fb/manualdataasset/). |

## Properties

| Name    | Type                                   | Description |
| ------- | -------------------------------------- | ----------- |
| entries | [ManualDataEntry](/vext/ref/fb/manualdataentry/)\[\] |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [ManualDataAsset](/vext/ref/fb/manualdataasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ManualDataAsset](/vext/ref/fb/manualdataasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
