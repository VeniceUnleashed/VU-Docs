---
title: OnlinePlatformConfiguration (Frostbite Structure)
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
| platform       | [GamePlatform](GamePlatform)                   |             |
| services       | [OnlineServicesAsset](OnlineServicesAsset)     |             |
| clientBackends | [PresenceBackendData](PresenceBackendData)\[\] |             |
| serverBackends | [ServerBackendData](ServerBackendData)\[\]     |             |
| isFallback     | bool                                           |             |

## Methods

| Type                                                       | Name            | Parameters |
| ---------------------------------------------------------- | --------------- | ---------- |
| [OnlinePlatformConfiguration](OnlinePlatformConfiguration) | [Clone](#clone) |            |

### Clone

> [OnlinePlatformConfiguration](OnlinePlatformConfiguration) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
