---
title: OnlinePlatformConfiguration
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                    | Description                                              |
| -------------------------------------------------------------- | -------------------------------------------------------- |
| OnlinePlatformConfiguration()                                  | Create a new instance of this structure type.            |
| OnlinePlatformConfiguration(OnlinePlatformConfiguration other) | Create a reference copy of a structure of the same type. |

## Properties

| Name           | Type                                           | Description |
| -------------- | ---------------------------------------------- | ----------- |
| platform       | [GamePlatform](/vext/ref/fb/gameplatform/)                   |             |
| services       | [OnlineServicesAsset](/vext/ref/fb/onlineservicesasset/)     |             |
| clientBackends | [PresenceBackendData](/vext/ref/fb/presencebackenddata/)\[\] |             |
| serverBackends | [ServerBackendData](/vext/ref/fb/serverbackenddata/)\[\]     |             |
| isFallback     | bool                                           |             |

## Methods

| Type                                                       | Name            | Parameters |
| ---------------------------------------------------------- | --------------- | ---------- |
| [OnlinePlatformConfiguration](/vext/ref/fb/onlineplatformconfiguration/) | [Clone](#clone) |            |

### Clone

> [OnlinePlatformConfiguration](/vext/ref/fb/onlineplatformconfiguration/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
