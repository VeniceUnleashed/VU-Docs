---
title: UIFontCollection
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| UIFontCollection()                                                          | Create a new instance of this container type.                                                                           |
| UIFontCollection(UIFontCollection other)                                    | Create a reference copy of an instance of the same type.                                                                |
| UIFontCollection([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIFontCollection](/vext/ref/fb/uifontcollection/).                                      |
| UIFontCollection([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIFontCollection](/vext/ref/fb/uifontcollection/). |

## Properties

| Name         | Type                                     | Description |
| ------------ | ---------------------------------------- | ----------- |
| language     | [LanguageFormat](/vext/ref/fb/languageformat/)         |             |
| textDatabase | [UITextDatabase](/vext/ref/fb/uitextdatabase/)         |             |
| fonts        | [UIFontAsset](/vext/ref/fb/uifontasset/)\[\]           |             |
| bundleKind   | [ResourceBundleKind](/vext/ref/fb/resourcebundlekind/) |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [UIFontCollection](/vext/ref/fb/uifontcollection/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIFontCollection](/vext/ref/fb/uifontcollection/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
