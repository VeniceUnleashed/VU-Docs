---
title: UILocalizeCompData
---
### Base Classes

[UIComponentData](/vext/ref/fb/uicomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| UILocalizeCompData()                                                          | Create a new instance of this container type.                                                                               |
| UILocalizeCompData(UILocalizeCompData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| UILocalizeCompData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UILocalizeCompData](/vext/ref/fb/uilocalizecompdata/).                  |
| UILocalizeCompData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UILocalizeCompData](/vext/ref/fb/uilocalizecompdata/).                                      |
| UILocalizeCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UILocalizeCompData](/vext/ref/fb/uilocalizecompdata/). |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [UILocalizeCompData](/vext/ref/fb/uilocalizecompdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UILocalizeCompData](/vext/ref/fb/uilocalizecompdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
