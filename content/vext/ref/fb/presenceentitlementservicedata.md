---
title: PresenceEntitlementServiceData
---
### Base Classes

[PresenceServiceData](PresenceServiceData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| PresenceEntitlementServiceData()                                                          | Create a new instance of this container type.                                                                                                       |
| PresenceEntitlementServiceData(PresenceEntitlementServiceData other)                      | Create a reference copy of an instance of the same type.                                                                                            |
| PresenceEntitlementServiceData([PresenceServiceData](PresenceServiceData) other)          | Upcast an instance of type [PresenceServiceData](PresenceServiceData) to [PresenceEntitlementServiceData](PresenceEntitlementServiceData).          |
| PresenceEntitlementServiceData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [PresenceEntitlementServiceData](PresenceEntitlementServiceData).                                      |
| PresenceEntitlementServiceData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PresenceEntitlementServiceData](PresenceEntitlementServiceData). |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PresenceEntitlementServiceData](PresenceEntitlementServiceData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PresenceEntitlementServiceData](PresenceEntitlementServiceData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
