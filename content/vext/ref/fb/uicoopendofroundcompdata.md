---
title: UICoopEndOfRoundCompData
---
### Base Classes

[UIComponentData](/vext/ref/fb/uicomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| UICoopEndOfRoundCompData()                                                          | Create a new instance of this container type.                                                                                           |
| UICoopEndOfRoundCompData(UICoopEndOfRoundCompData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| UICoopEndOfRoundCompData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UICoopEndOfRoundCompData](/vext/ref/fb/uicoopendofroundcompdata/).                  |
| UICoopEndOfRoundCompData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UICoopEndOfRoundCompData](/vext/ref/fb/uicoopendofroundcompdata/).                                      |
| UICoopEndOfRoundCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UICoopEndOfRoundCompData](/vext/ref/fb/uicoopendofroundcompdata/). |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UICoopEndOfRoundCompData](/vext/ref/fb/uicoopendofroundcompdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UICoopEndOfRoundCompData](/vext/ref/fb/uicoopendofroundcompdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
