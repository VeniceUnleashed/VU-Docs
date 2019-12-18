---
title: OnlineSettings (Frostbite Container)
---
### Base Classes

[SystemSettings](SystemSettings)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| OnlineSettings()                                                          | Create a new instance of this container type.                                                                       |
| OnlineSettings(OnlineSettings other)                                      | Create a reference copy of an instance of the same type.                                                            |
| OnlineSettings([SystemSettings](SystemSettings) other)                    | Upcast an instance of type [SystemSettings](SystemSettings) to [OnlineSettings](OnlineSettings).                    |
| OnlineSettings([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [OnlineSettings](OnlineSettings). |

## Properties

| Name                           | Type                                       | Description |
| ------------------------------ | ------------------------------------------ | ----------- |
| backend                        | [BackendType](BackendType)                 |             |
| peerBackend                    | [BackendType](BackendType)                 |             |
| environment                    | [OnlineEnvironment](OnlineEnvironment)     |             |
| matchmakingToken               | string                                     |             |
| provider                       | [OnlineProviderAsset](OnlineProviderAsset) |             |
| richPresence                   | [RichPresenceData](RichPresenceData)       |             |
| chatSettings                   | [ChatSettings](ChatSettings)               |             |
| matchmakingOptions             | string                                     |             |
| region                         | string                                     |             |
| negativeUserCacheRefreshPeriod | number                                     |             |
| matchmakingMode                | string                                     |             |
| country                        | string                                     |             |
| isSecure                       | bool                                       |             |
| supportHostMigration           | bool                                       |             |
| matchmakeImmediately           | bool                                       |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [OnlineSettings](OnlineSettings) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [OnlineSettings](OnlineSettings) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
