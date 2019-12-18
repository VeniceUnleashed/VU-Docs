---
title: BlueprintBundleMetadataContainer (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                 | Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BlueprintBundleMetadataContainer()                                                          | Create a new instance of this container type.                                                                                                           |
| BlueprintBundleMetadataContainer(BlueprintBundleMetadataContainer other)                    | Create a reference copy of an instance of the same type.                                                                                                |
| BlueprintBundleMetadataContainer([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [BlueprintBundleMetadataContainer](BlueprintBundleMetadataContainer).                                      |
| BlueprintBundleMetadataContainer([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [BlueprintBundleMetadataContainer](BlueprintBundleMetadataContainer). |

## Properties

| Name  | Type                                                 | Description |
| ----- | ---------------------------------------------------- | ----------- |
| items | [BlueprintContainerItem](BlueprintContainerItem)\[\] |             |

## Methods

| Type                                                                 | Name            | Parameters                                     |
| -------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [BlueprintBundleMetadataContainer](BlueprintBundleMetadataContainer) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [BlueprintBundleMetadataContainer](BlueprintBundleMetadataContainer) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
