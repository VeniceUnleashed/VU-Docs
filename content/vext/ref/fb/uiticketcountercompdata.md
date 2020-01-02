---
title: UITicketCounterCompData
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| UITicketCounterCompData()                                                          | Create a new instance of this container type.                                                                                         |
| UITicketCounterCompData(UITicketCounterCompData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| UITicketCounterCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UITicketCounterCompData](UITicketCounterCompData).                  |
| UITicketCounterCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UITicketCounterCompData](UITicketCounterCompData).                                      |
| UITicketCounterCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UITicketCounterCompData](UITicketCounterCompData). |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UITicketCounterCompData](UITicketCounterCompData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UITicketCounterCompData](UITicketCounterCompData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
