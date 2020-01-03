---
title: UIItemDescriptionAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| UIItemDescriptionAsset()                                                          | Create a new instance of this container type.                                                                                       |
| UIItemDescriptionAsset(UIItemDescriptionAsset other)                              | Create a reference copy of an instance of the same type.                                                                            |
| UIItemDescriptionAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIItemDescriptionAsset](/vext/ref/fb/uiitemdescriptionasset/).                                      |
| UIItemDescriptionAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIItemDescriptionAsset](/vext/ref/fb/uiitemdescriptionasset/). |

## Properties

| Name     | Type                                                 | Description |
| -------- | ---------------------------------------------------- | ----------- |
| children | [UIItemDescriptionAsset](/vext/ref/fb/uiitemdescriptionasset/)\[\] |             |
| items    | [UIItemDescription](/vext/ref/fb/uiitemdescription/)\[\]           |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [UIItemDescriptionAsset](/vext/ref/fb/uiitemdescriptionasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIItemDescriptionAsset](/vext/ref/fb/uiitemdescriptionasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
