---
title: UIFontAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                            | Description                                                                                                   |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| UIFontAsset()                                                          | Create a new instance of this container type.                                                                 |
| UIFontAsset(UIFontAsset other)                                         | Create a reference copy of an instance of the same type.                                                      |
| UIFontAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIFontAsset](/vext/ref/fb/uifontasset/).                                      |
| UIFontAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIFontAsset](/vext/ref/fb/uifontasset/). |

## Properties

| Name                       | Type                             | Description |
| -------------------------- | -------------------------------- | ----------- |
| sourceFile                 | string                           |             |
| textDatabase               | [UITextDatabase](/vext/ref/fb/uitextdatabase/) |             |
| scaleformFontName          | string\[\]                       |             |
| numericsOnly               | bool                             |             |
| completeKorean             | bool                             |             |
| completeJapanese           | bool                             |             |
| completeTraditionalChinese | bool                             |             |

## Methods

| Type                       | Name            | Parameters                                     |
| -------------------------- | --------------- | ---------------------------------------------- |
| [UIFontAsset](/vext/ref/fb/uifontasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIFontAsset](/vext/ref/fb/uifontasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
