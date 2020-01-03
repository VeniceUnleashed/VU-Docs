---
title: BlueprintBundleMetadataContainer
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                 | Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BlueprintBundleMetadataContainer()                                                          | Create a new instance of this container type.                                                                                                           |
| BlueprintBundleMetadataContainer(BlueprintBundleMetadataContainer other)                    | Create a reference copy of an instance of the same type.                                                                                                |
| BlueprintBundleMetadataContainer([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [BlueprintBundleMetadataContainer](/vext/ref/fb/blueprintbundlemetadatacontainer/).                                      |
| BlueprintBundleMetadataContainer([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BlueprintBundleMetadataContainer](/vext/ref/fb/blueprintbundlemetadatacontainer/). |

## Properties

| Name  | Type                                                 | Description |
| ----- | ---------------------------------------------------- | ----------- |
| items | [BlueprintContainerItem](/vext/ref/fb/blueprintcontaineritem/)\[\] |             |

## Methods

| Type                                                                 | Name            | Parameters                                     |
| -------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [BlueprintBundleMetadataContainer](/vext/ref/fb/blueprintbundlemetadatacontainer/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BlueprintBundleMetadataContainer](/vext/ref/fb/blueprintbundlemetadatacontainer/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
