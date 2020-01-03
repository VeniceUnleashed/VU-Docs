---
title: UIHardcoreCompData
---
### Base Classes

[UIComponentData](/vext/ref/fb/uicomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| UIHardcoreCompData()                                                          | Create a new instance of this container type.                                                                               |
| UIHardcoreCompData(UIHardcoreCompData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| UIHardcoreCompData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UIHardcoreCompData](/vext/ref/fb/uihardcorecompdata/).                  |
| UIHardcoreCompData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIHardcoreCompData](/vext/ref/fb/uihardcorecompdata/).                                      |
| UIHardcoreCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIHardcoreCompData](/vext/ref/fb/uihardcorecompdata/). |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [UIHardcoreCompData](/vext/ref/fb/uihardcorecompdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIHardcoreCompData](/vext/ref/fb/uihardcorecompdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
