---
title: ManualDataAsset (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| ManualDataAsset()                                                          | Create a new instance of this container type.                                                                         |
| ManualDataAsset(ManualDataAsset other)                                     | Create a reference copy of an instance of the same type.                                                              |
| ManualDataAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [ManualDataAsset](ManualDataAsset).                                      |
| ManualDataAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ManualDataAsset](ManualDataAsset). |

## Properties

| Name    | Type                                   | Description |
| ------- | -------------------------------------- | ----------- |
| entries | [ManualDataEntry](ManualDataEntry)\[\] |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [ManualDataAsset](ManualDataAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ManualDataAsset](ManualDataAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
