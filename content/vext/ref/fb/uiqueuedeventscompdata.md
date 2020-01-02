---
title: UIQueuedEventsCompData
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| UIQueuedEventsCompData()                                                          | Create a new instance of this container type.                                                                                       |
| UIQueuedEventsCompData(UIQueuedEventsCompData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| UIQueuedEventsCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIQueuedEventsCompData](UIQueuedEventsCompData).                  |
| UIQueuedEventsCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIQueuedEventsCompData](UIQueuedEventsCompData).                                      |
| UIQueuedEventsCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIQueuedEventsCompData](UIQueuedEventsCompData). |

## Properties

| Name                         | Type   | Description |
| ---------------------------- | ------ | ----------- |
| initialQueueDelay            | number |             |
| showUnlocksBecomingAvailable | bool   |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [UIQueuedEventsCompData](UIQueuedEventsCompData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIQueuedEventsCompData](UIQueuedEventsCompData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
