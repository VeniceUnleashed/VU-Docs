---
title: PresenceEntitlementServiceData
---
### Base Classes

[PresenceServiceData](/vext/ref/fb/presenceservicedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| PresenceEntitlementServiceData()                                                          | Create a new instance of this container type.                                                                                                       |
| PresenceEntitlementServiceData(PresenceEntitlementServiceData other)                      | Create a reference copy of an instance of the same type.                                                                                            |
| PresenceEntitlementServiceData([PresenceServiceData](/vext/ref/fb/presenceservicedata/) other)          | Upcast an instance of type [PresenceServiceData](/vext/ref/fb/presenceservicedata/) to [PresenceEntitlementServiceData](/vext/ref/fb/presenceentitlementservicedata/).          |
| PresenceEntitlementServiceData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [PresenceEntitlementServiceData](/vext/ref/fb/presenceentitlementservicedata/).                                      |
| PresenceEntitlementServiceData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PresenceEntitlementServiceData](/vext/ref/fb/presenceentitlementservicedata/). |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PresenceEntitlementServiceData](/vext/ref/fb/presenceentitlementservicedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PresenceEntitlementServiceData](/vext/ref/fb/presenceentitlementservicedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
