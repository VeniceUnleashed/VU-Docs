---
title: BlueprintBundleMetadata
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| BlueprintBundleMetadata()                                                          | Create a new instance of this container type.                                                                                         |
| BlueprintBundleMetadata(BlueprintBundleMetadata other)                             | Create a reference copy of an instance of the same type.                                                                              |
| BlueprintBundleMetadata([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BlueprintBundleMetadata](/vext/ref/fb/blueprintbundlemetadata/). |

## Properties

| Name           | Type   | Description |
| -------------- | ------ | ----------- |
| bundlePathName | string |             |
| bundleName     | string |             |
| blueprintName  | string |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [BlueprintBundleMetadata](/vext/ref/fb/blueprintbundlemetadata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BlueprintBundleMetadata](/vext/ref/fb/blueprintbundlemetadata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
