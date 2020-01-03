---
title: VeniceOnlineSettings
---
### Base Classes

[SystemSettings](SystemSettings)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| VeniceOnlineSettings()                                                          | Create a new instance of this container type.                                                                                   |
| VeniceOnlineSettings(VeniceOnlineSettings other)                                | Create a reference copy of an instance of the same type.                                                                        |
| VeniceOnlineSettings([SystemSettings](SystemSettings) other)                    | Upcast an instance of type [SystemSettings](SystemSettings) to [VeniceOnlineSettings](VeniceOnlineSettings).                    |
| VeniceOnlineSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VeniceOnlineSettings](VeniceOnlineSettings). |

## Properties

| Name                                                 | Type                                                           | Description |
| ---------------------------------------------------- | -------------------------------------------------------------- | ----------- |
| webFeedMaxFetchAttempts                              | number                                                         |             |
| platforms                                            | [OnlinePlatformConfiguration](OnlinePlatformConfiguration)\[\] |             |
| serviceNameOverride                                  | string                                                         |             |
| clientGameConfigurationOverride                      | string                                                         |             |
| blazeLogLevel                                        | number                                                         |             |
| dirtySockLogLevel                                    | number                                                         |             |
| battlelogReportURL                                   | string                                                         |             |
| entitlementQueries                                   | [EntitlementQuery](EntitlementQuery)\[\]                       |             |
| webFeedUrlPrefix                                     | string                                                         |             |
| snowrollerOrphanTimeout                              | number                                                         |             |
| queueCapacityOverride                                | number                                                         |             |
| webFeedCountUrlPrefix                                | string                                                         |             |
| matchFeedMaxFetchAttempts                            | number                                                         |             |
| dogTagUploadPolicy                                   | [DTagUploadPolicy](DTagUploadPolicy)                           |             |
| webFeedUnreadCountFetchPeriod                        | number                                                         |             |
| matchImagesUrlPrefix                                 | string                                                         |             |
| webFeedMaxItems                                      | number                                                         |             |
| webFeedMinimumMillisecondsBetweenRequests            | number                                                         |             |
| webFeedMillisecondsBetweenNewRequestAttempt          | number                                                         |             |
| matchFeedMinimumMillisecondsBetweenRequests          | number                                                         |             |
| matchFeedMinimumMillisecondsBetweenMatchRequests     | number                                                         |             |
| pingPeriod                                           | number                                                         |             |
| matchFeedMinimumMillisecondsBetweenNewRequestAttempt | number                                                         |             |
| matchFeedDetailsUrlPrefix                            | string                                                         |             |
| matchFeedListUrlPrefix                               | string                                                         |             |
| matchFeedMinimumMillisecondsBetweenMatchReloads      | number                                                         |             |
| enableSnowroller                                     | bool                                                           |             |
| enableQoS                                            | bool                                                           |             |
| punkBusterActivateClient                             | bool                                                           |             |
| punkBusterActivateServer                             | bool                                                           |             |
| battlelogReport                                      | bool                                                           |             |
| useFallback                                          | bool                                                           |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [VeniceOnlineSettings](VeniceOnlineSettings) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VeniceOnlineSettings](VeniceOnlineSettings) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
