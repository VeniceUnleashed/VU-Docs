---
title: UIScreenAsset
---
### Base Classes

[UIGraphAsset](/vext/ref/fb/uigraphasset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| UIScreenAsset()                                                          | Create a new instance of this container type.                                                                     |
| UIScreenAsset(UIScreenAsset other)                                       | Create a reference copy of an instance of the same type.                                                          |
| UIScreenAsset([UIGraphAsset](/vext/ref/fb/uigraphasset/) other)                        | Upcast an instance of type [UIGraphAsset](/vext/ref/fb/uigraphasset/) to [UIScreenAsset](/vext/ref/fb/uiscreenasset/).                        |
| UIScreenAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIScreenAsset](/vext/ref/fb/uiscreenasset/).                                      |
| UIScreenAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIScreenAsset](/vext/ref/fb/uiscreenasset/). |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [UIScreenAsset](/vext/ref/fb/uiscreenasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIScreenAsset](/vext/ref/fb/uiscreenasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
