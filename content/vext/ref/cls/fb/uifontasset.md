---
title: UIFontAsset (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                            | Description                                                                                                   |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| UIFontAsset()                                                          | Create a new instance of this container type.                                                                 |
| UIFontAsset(UIFontAsset other)                                         | Create a reference copy of an instance of the same type.                                                      |
| UIFontAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIFontAsset](UIFontAsset).                                      |
| UIFontAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIFontAsset](UIFontAsset). |

## Properties

| Name                       | Type                             | Description |
| -------------------------- | -------------------------------- | ----------- |
| sourceFile                 | string                           |             |
| textDatabase               | [UITextDatabase](UITextDatabase) |             |
| scaleformFontName          | string\[\]                       |             |
| numericsOnly               | bool                             |             |
| completeKorean             | bool                             |             |
| completeJapanese           | bool                             |             |
| completeTraditionalChinese | bool                             |             |

## Methods

| Type                       | Name            | Parameters                                     |
| -------------------------- | --------------- | ---------------------------------------------- |
| [UIFontAsset](UIFontAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIFontAsset](UIFontAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
