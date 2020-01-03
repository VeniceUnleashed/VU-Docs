---
title: UIAwardsTrackingCompData
---
### Base Classes

[UIComponentData](/vext/ref/fb/uicomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| UIAwardsTrackingCompData()                                                          | Create a new instance of this container type.                                                                                           |
| UIAwardsTrackingCompData(UIAwardsTrackingCompData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| UIAwardsTrackingCompData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UIAwardsTrackingCompData](/vext/ref/fb/uiawardstrackingcompdata/).                  |
| UIAwardsTrackingCompData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIAwardsTrackingCompData](/vext/ref/fb/uiawardstrackingcompdata/).                                      |
| UIAwardsTrackingCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIAwardsTrackingCompData](/vext/ref/fb/uiawardstrackingcompdata/). |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIAwardsTrackingCompData](/vext/ref/fb/uiawardstrackingcompdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIAwardsTrackingCompData](/vext/ref/fb/uiawardstrackingcompdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
