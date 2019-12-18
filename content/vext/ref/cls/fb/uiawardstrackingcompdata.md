---
title: UIAwardsTrackingCompData (Frostbite Container)
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| UIAwardsTrackingCompData()                                                          | Create a new instance of this container type.                                                                                           |
| UIAwardsTrackingCompData(UIAwardsTrackingCompData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| UIAwardsTrackingCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIAwardsTrackingCompData](UIAwardsTrackingCompData).                  |
| UIAwardsTrackingCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIAwardsTrackingCompData](UIAwardsTrackingCompData).                                      |
| UIAwardsTrackingCompData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIAwardsTrackingCompData](UIAwardsTrackingCompData). |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIAwardsTrackingCompData](UIAwardsTrackingCompData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIAwardsTrackingCompData](UIAwardsTrackingCompData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
