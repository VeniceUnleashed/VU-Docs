---
title: UIBundleAssetState
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                  | Description                                              |
| -------------------------------------------- | -------------------------------------------------------- |
| UIBundleAssetState()                         | Create a new instance of this structure type.            |
| UIBundleAssetState(UIBundleAssetState other) | Create a reference copy of a structure of the same type. |

## Properties

| Name               | Type               | Description |
| ------------------ | ------------------ | ----------- |
| stateName          | string             |             |
| uiState            | [UIState](UIState) |             |
| resourceBundleName | string             |             |

## Methods

| Type                                     | Name            | Parameters |
| ---------------------------------------- | --------------- | ---------- |
| [UIBundleAssetState](UIBundleAssetState) | [Clone](#clone) |            |

### Clone

> [UIBundleAssetState](UIBundleAssetState) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
