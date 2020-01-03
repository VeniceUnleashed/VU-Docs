---
title: UIBundlesAsset
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| UIBundlesAsset()                                                          | Create a new instance of this container type.                                                                       |
| UIBundlesAsset(UIBundlesAsset other)                                      | Create a reference copy of an instance of the same type.                                                            |
| UIBundlesAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIBundlesAsset](UIBundlesAsset).                                      |
| UIBundlesAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIBundlesAsset](UIBundlesAsset). |

## Properties

| Name                   | Type                                         | Description |
| ---------------------- | -------------------------------------------- | ----------- |
| uiBundleAssetStateList | [UIBundleAssetState](UIBundleAssetState)\[\] |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [UIBundlesAsset](UIBundlesAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIBundlesAsset](UIBundlesAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
