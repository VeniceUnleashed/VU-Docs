---
title: VeniceOnlineConfiguration
---
### Base Classes

[OnlineConfiguration](/vext/ref/fb/onlineconfiguration/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| VeniceOnlineConfiguration()                                                          | Create a new instance of this container type.                                                                                             |
| VeniceOnlineConfiguration(VeniceOnlineConfiguration other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| VeniceOnlineConfiguration([OnlineConfiguration](/vext/ref/fb/onlineconfiguration/) other)          | Upcast an instance of type [OnlineConfiguration](/vext/ref/fb/onlineconfiguration/) to [VeniceOnlineConfiguration](/vext/ref/fb/veniceonlineconfiguration/).          |
| VeniceOnlineConfiguration([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [VeniceOnlineConfiguration](/vext/ref/fb/veniceonlineconfiguration/).                                      |
| VeniceOnlineConfiguration([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VeniceOnlineConfiguration](/vext/ref/fb/veniceonlineconfiguration/). |

## Properties

| Name               | Type                                                           | Description |
| ------------------ | -------------------------------------------------------------- | ----------- |
| platforms          | [OnlinePlatformConfiguration](/vext/ref/fb/onlineplatformconfiguration/)\[\] |             |
| entitlementQueries | [EntitlementQuery](/vext/ref/fb/entitlementquery/)\[\]                       |             |
| useFallback        | bool                                                           |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [VeniceOnlineConfiguration](/vext/ref/fb/veniceonlineconfiguration/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VeniceOnlineConfiguration](/vext/ref/fb/veniceonlineconfiguration/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
