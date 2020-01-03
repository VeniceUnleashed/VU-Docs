---
title: UIDirectAccessCompData
---
### Base Classes

[UIComponentData](/vext/ref/fb/uicomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| UIDirectAccessCompData()                                                          | Create a new instance of this container type.                                                                                       |
| UIDirectAccessCompData(UIDirectAccessCompData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| UIDirectAccessCompData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UIDirectAccessCompData](/vext/ref/fb/uidirectaccesscompdata/).                  |
| UIDirectAccessCompData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIDirectAccessCompData](/vext/ref/fb/uidirectaccesscompdata/).                                      |
| UIDirectAccessCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIDirectAccessCompData](/vext/ref/fb/uidirectaccesscompdata/). |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [UIDirectAccessCompData](/vext/ref/fb/uidirectaccesscompdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIDirectAccessCompData](/vext/ref/fb/uidirectaccesscompdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
