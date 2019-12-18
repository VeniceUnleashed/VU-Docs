---
title: VeniceOnlineConfiguration (Frostbite Container)
---
### Base Classes

[OnlineConfiguration](OnlineConfiguration)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| VeniceOnlineConfiguration()                                                          | Create a new instance of this container type.                                                                                             |
| VeniceOnlineConfiguration(VeniceOnlineConfiguration other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| VeniceOnlineConfiguration([OnlineConfiguration](OnlineConfiguration) other)          | Upcast an instance of type [OnlineConfiguration](OnlineConfiguration) to [VeniceOnlineConfiguration](VeniceOnlineConfiguration).          |
| VeniceOnlineConfiguration([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [VeniceOnlineConfiguration](VeniceOnlineConfiguration).                                      |
| VeniceOnlineConfiguration([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VeniceOnlineConfiguration](VeniceOnlineConfiguration). |

## Properties

| Name               | Type                                                           | Description |
| ------------------ | -------------------------------------------------------------- | ----------- |
| platforms          | [OnlinePlatformConfiguration](OnlinePlatformConfiguration)\[\] |             |
| entitlementQueries | [EntitlementQuery](EntitlementQuery)\[\]                       |             |
| useFallback        | bool                                                           |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [VeniceOnlineConfiguration](VeniceOnlineConfiguration) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VeniceOnlineConfiguration](VeniceOnlineConfiguration) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
