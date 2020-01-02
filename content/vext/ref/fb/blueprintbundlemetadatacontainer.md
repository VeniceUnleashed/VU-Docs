---
title: BlueprintBundleMetadataContainer
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
| BlueprintBundleMetadataContainer([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BlueprintBundleMetadataContainer](BlueprintBundleMetadataContainer). |

## Properties

| Name  | Type                                                 | Description |
| ----- | ---------------------------------------------------- | ----------- |
| items | [BlueprintContainerItem](BlueprintContainerItem)\[\] |             |

## Methods

| Type                                                                 | Name            | Parameters                                     |
| -------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [BlueprintBundleMetadataContainer](BlueprintBundleMetadataContainer) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BlueprintBundleMetadataContainer](BlueprintBundleMetadataContainer) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
