---
title: OnlineSettings
---
### Base Classes

[SystemSettings](/vext/ref/fb/systemsettings/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| OnlineSettings()                                                          | Create a new instance of this container type.                                                                       |
| OnlineSettings(OnlineSettings other)                                      | Create a reference copy of an instance of the same type.                                                            |
| OnlineSettings([SystemSettings](/vext/ref/fb/systemsettings/) other)                    | Upcast an instance of type [SystemSettings](/vext/ref/fb/systemsettings/) to [OnlineSettings](/vext/ref/fb/onlinesettings/).                    |
| OnlineSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [OnlineSettings](/vext/ref/fb/onlinesettings/). |

## Properties

| Name                           | Type                                       | Description |
| ------------------------------ | ------------------------------------------ | ----------- |
| backend                        | [BackendType](/vext/ref/fb/backendtype/)                 |             |
| peerBackend                    | [BackendType](/vext/ref/fb/backendtype/)                 |             |
| environment                    | [OnlineEnvironment](/vext/ref/fb/onlineenvironment/)     |             |
| matchmakingToken               | string                                     |             |
| provider                       | [OnlineProviderAsset](/vext/ref/fb/onlineproviderasset/) |             |
| richPresence                   | [RichPresenceData](/vext/ref/fb/richpresencedata/)       |             |
| chatSettings                   | [ChatSettings](/vext/ref/fb/chatsettings/)               |             |
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
| [OnlineSettings](/vext/ref/fb/onlinesettings/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [OnlineSettings](/vext/ref/fb/onlinesettings/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
