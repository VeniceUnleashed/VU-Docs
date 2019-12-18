---
title: UIFontCollection (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| UIFontCollection()                                                          | Create a new instance of this container type.                                                                           |
| UIFontCollection(UIFontCollection other)                                    | Create a reference copy of an instance of the same type.                                                                |
| UIFontCollection([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIFontCollection](UIFontCollection).                                      |
| UIFontCollection([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIFontCollection](UIFontCollection). |

## Properties

| Name         | Type                                     | Description |
| ------------ | ---------------------------------------- | ----------- |
| language     | [LanguageFormat](LanguageFormat)         |             |
| textDatabase | [UITextDatabase](UITextDatabase)         |             |
| fonts        | [UIFontAsset](UIFontAsset)\[\]           |             |
| bundleKind   | [ResourceBundleKind](ResourceBundleKind) |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [UIFontCollection](UIFontCollection) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIFontCollection](UIFontCollection) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
