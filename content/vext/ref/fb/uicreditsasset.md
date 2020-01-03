---
title: UICreditsAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| UICreditsAsset()                                                          | Create a new instance of this container type.                                                                       |
| UICreditsAsset(UICreditsAsset other)                                      | Create a reference copy of an instance of the same type.                                                            |
| UICreditsAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UICreditsAsset](/vext/ref/fb/uicreditsasset/).                                      |
| UICreditsAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UICreditsAsset](/vext/ref/fb/uicreditsasset/). |

## Properties

| Name  | Type                               | Description |
| ----- | ---------------------------------- | ----------- |
| pages | [UICreditsPage](/vext/ref/fb/uicreditspage/)\[\] |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [UICreditsAsset](/vext/ref/fb/uicreditsasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UICreditsAsset](/vext/ref/fb/uicreditsasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
