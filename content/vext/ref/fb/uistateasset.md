---
title: UIStateAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| UIStateAsset()                                                          | Create a new instance of this container type.                                                                   |
| UIStateAsset(UIStateAsset other)                                        | Create a reference copy of an instance of the same type.                                                        |
| UIStateAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIStateAsset](/vext/ref/fb/uistateasset/).                                      |
| UIStateAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIStateAsset](/vext/ref/fb/uistateasset/). |

## Properties

| Name                  | Type                                   | Description |
| --------------------- | -------------------------------------- | ----------- |
| uiComponents          | [UIComponentData](/vext/ref/fb/uicomponentdata/)\[\] |             |
| actionscriptLibraries | [UIAsset](/vext/ref/fb/uiasset/)\[\]                 |             |
| actionscriptNames     | string\[\]                             |             |
| stateName             | string                                 |             |
| statePath             | string                                 |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [UIStateAsset](/vext/ref/fb/uistateasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIStateAsset](/vext/ref/fb/uistateasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
