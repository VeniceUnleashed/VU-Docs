---
title: BlueprintContainerItem
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| BlueprintContainerItem()                                                          | Create a new instance of this container type.                                                                                       |
| BlueprintContainerItem(BlueprintContainerItem other)                              | Create a reference copy of an instance of the same type.                                                                            |
| BlueprintContainerItem([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BlueprintContainerItem](BlueprintContainerItem). |

## Properties

| Name     | Type                                               | Description |
| -------- | -------------------------------------------------- | ----------- |
| metadata | [BlueprintBundleMetadata](BlueprintBundleMetadata) |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [BlueprintContainerItem](BlueprintContainerItem) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BlueprintContainerItem](BlueprintContainerItem) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
