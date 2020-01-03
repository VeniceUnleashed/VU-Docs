---
title: UIQueuedEventsCompData
---
### Base Classes

[UIComponentData](/vext/ref/fb/uicomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| UIQueuedEventsCompData()                                                          | Create a new instance of this container type.                                                                                       |
| UIQueuedEventsCompData(UIQueuedEventsCompData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| UIQueuedEventsCompData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UIQueuedEventsCompData](/vext/ref/fb/uiqueuedeventscompdata/).                  |
| UIQueuedEventsCompData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIQueuedEventsCompData](/vext/ref/fb/uiqueuedeventscompdata/).                                      |
| UIQueuedEventsCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIQueuedEventsCompData](/vext/ref/fb/uiqueuedeventscompdata/). |

## Properties

| Name                         | Type   | Description |
| ---------------------------- | ------ | ----------- |
| initialQueueDelay            | number |             |
| showUnlocksBecomingAvailable | bool   |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [UIQueuedEventsCompData](/vext/ref/fb/uiqueuedeventscompdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIQueuedEventsCompData](/vext/ref/fb/uiqueuedeventscompdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
