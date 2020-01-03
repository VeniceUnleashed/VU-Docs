---
title: LocalizationAsset
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| LocalizationAsset()                                                          | Create a new instance of this container type.                                                                             |
| LocalizationAsset(LocalizationAsset other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| LocalizationAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [LocalizationAsset](LocalizationAsset).                                      |
| LocalizationAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LocalizationAsset](LocalizationAsset). |

## Properties

| Name           | Type                                 | Description |
| -------------- | ------------------------------------ | ----------- |
| localizedTexts | [UITextDatabase](UITextDatabase)\[\] |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [LocalizationAsset](LocalizationAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LocalizationAsset](LocalizationAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
