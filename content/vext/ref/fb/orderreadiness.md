---
title: OrderReadiness
---
### Base Classes

[UrgencyUserData](/vext/ref/fb/urgencyuserdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| OrderReadiness()                                                          | Create a new instance of this container type.                                                                       |
| OrderReadiness(OrderReadiness other)                                      | Create a reference copy of an instance of the same type.                                                            |
| OrderReadiness([UrgencyUserData](/vext/ref/fb/urgencyuserdata/) other)                  | Upcast an instance of type [UrgencyUserData](/vext/ref/fb/urgencyuserdata/) to [OrderReadiness](/vext/ref/fb/orderreadiness/).                  |
| OrderReadiness([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [OrderReadiness](/vext/ref/fb/orderreadiness/). |

## Properties

| Name             | Type                             | Description |
| ---------------- | -------------------------------- | ----------- |
| orderType        | string                           |             |
| minimumReadiness | [ReadinessState](/vext/ref/fb/readinessstate/) |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [OrderReadiness](/vext/ref/fb/orderreadiness/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [OrderReadiness](/vext/ref/fb/orderreadiness/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
